const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
// const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const static = require('koa-static');
const session = require('koa-session');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
// 转化为实际id
const ObjectId = require('mongodb').ObjectId;
const IO = require('koa-socket-2');

const DB = require('./module/db');

const app = new Koa();
const io = new IO();
const router = new Router();
// 配置session中间件
app.keys = ['some secret hurr'];
const CONFIG = {
    key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
    maxAge: 1000*5,
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true,
    renew: false,
};
app
    // koa2-connect-history-api-fallback中间件一定要放在静态资源服务中间件加载前面，不然会失效！！！
    .use(historyApiFallback({
        index: '/index.html'
    }))
    .use(session(CONFIG, app))
    // 配置post中间件
    // .use(bodyParser())
    // 支持文件上传
    .use(koaBody({
        multipart: true,
        formidable: {
            maxFieldsSize: 200*1024*1024,    // 设置上传文件大小最大限制，默认2M
            keepExtensions: true,    // 保持文件的后缀
        }
    }))
    // 配置静态资源服务中间件
    .use(static(path.join( __dirname, '/public')));

// 配置路由
router
    .get('/', async ctx => {
        ctx.render('index');
    })
    .get('/getSearchResults', async ctx => {
        await DB.find('users', {'username': new RegExp(ctx.query.searchKey)}, {'password': 0}).then( res => {
            ctx.body = res;
        });
    })
    .get('/getRecommendUsers', async ctx => {
        await DB.aggregate('users', [{ $sample: { size: Number(ctx.query.recommendNum) } }]).then( res => {
            ctx.body = res;
        });
    })
    .get('/getInfo', async ctx => {
        await DB.find('users', {'username': ctx.query.targetName}, {'password': 0}).then( res => {
            ctx.body = res[0];
        })
    })
    .get('/getFollowRelation', async ctx => {
        await DB.find('follow_relation', {'follower': ctx.query.follower, 'followee': ctx.query.followee }).then( res => {
            if (res.length == 0) {
                ctx.body = false;
            } else {
                ctx.body = true;
            }
        })
    })
    .get('/changeFollowRelation', async ctx => {
        let flag = false;
        // aod等于true则表示添加关系
        if (ctx.query.aod == 'true') {
            await DB.insert('follow_relation', {
                follower: ctx.query.follower,
                followee: ctx.query.followee
            });
            flag = true;
        } else if (ctx.query.aod == 'false') {
            await DB.remove('follow_relation', {
                follower: ctx.query.follower,
                followee: ctx.query.followee
            });
            flag = false;
        } else {
            ctx.body = false;
        }
        let followee_fanNum = 0, follower_followNum = 0;
        await DB.find('users', {'_id': ObjectId(ctx.query.follower)}, {'followNum': 1}).then(res => {
            follower_followNum = Number(res[0].followNum);
        })
        await DB.find('users', {'_id': ObjectId(ctx.query.followee)}, {'fanNum': 1}).then(res => {
            followee_fanNum = Number(res[0].fanNum);
        })
        // flag为true表明要为被关注的用户的粉丝数加一（以及关注用户的关注数加一），为false则相反减一
        if (flag) {
            follower_followNum++;
            followee_fanNum++;
        } else {
            follower_followNum--;
            followee_fanNum--;
        }
        await DB.update('users', {'_id': ObjectId(ctx.query.follower)}, { followNum: follower_followNum });
        await DB.update('users', {'_id': ObjectId(ctx.query.followee)}, { fanNum: followee_fanNum });
        // 把新的粉丝数返回以便更新
        ctx.body = {isOk: true, followee_fanNum: followee_fanNum, follower_followNum: follower_followNum};
    })
    .get('/getFollowList', async ctx => {
        let followIDList = [];
        let followList = [];
        await DB.find('follow_relation', {'follower': ctx.query.id}, {'followee': 1}).then(res => {
            followIDList = res;
        });
        if (followIDList.length == 0) {
            ctx.body = [];
        } else {
            for (let i=0; i<followIDList.length; i++) {
                let fe = followIDList[i].followee;
                followIDList[i] = { '_id': ObjectId(fe) };
            }
            await DB.find('users', { $or: followIDList }).then(res => {
                followList = res;
                ctx.body = followList;
            });
        }
    })
    .get('/getFanList', async ctx => {
        let fanIDList = [];
        let fanList = [];
        await DB.find('follow_relation', {'followee': ctx.query.id}, {'follower': 1}).then(res => {
            fanIDList = res;
        });
        if (fanIDList.length == 0) {
            ctx.body = [];
        } else {
            for (let i=0; i<fanIDList.length; i++) {
                let fr = fanIDList[i].follower;
                fanIDList[i] = { '_id': ObjectId(fr) };
            }
            await DB.find('users', { $or: fanIDList }).then(res => {
                fanList = res;
                ctx.body = fanList;
            });
        }
    })
    .post('/changeAvatar', async ctx => {
        let avrData = ctx.request.body;
        let file = ctx.request.files.avatar; // 获取上传文件
        // 修改文件名为用户id
        let spl = file.name.split(".");
        file.name = avrData._id + '.' + spl[spl.length-1];
        // 创建可读流
        const reader = fs.createReadStream(file.path);
        let filePath = path.join(__dirname, 'public/resource/avatar') + `/${file.name}`;
        // 创建可写流
        const writer = fs.createWriteStream(filePath);
        // 可读流通过管道写入可写流
        reader.pipe(writer);
        // 保存图片路径
        let newAvatarUrl = '/resource/avatar/' + file.name;
        await DB.update('users', {'_id': ObjectId(avrData._id)}, {'avatarUrl': newAvatarUrl});
        ctx.body = newAvatarUrl;
    })
    .post('/changeInfo', async ctx => {
        let infoData = ctx.request.body;
        let flag = false;
        // 先判断要修改的用户名是不是已经存在了
        await DB.find('users', {'username': infoData.username}, {'username': 1}).then( res => {
            if (res.length == 0) {
                flag = true;
            } else {
                // 已存在,先判断是不是自己（即用户名并未做改动）
                // 如果是自己当然也得允许！
                if (res[0].username == infoData.username) {
                    flag = true;
                } else {
                    ctx.body = -1;
                }
            }
        });
        if (flag == true) {
            // 未存在则修改，此时需要用_id作为查询条件
            await DB.update('users', {'_id': ObjectId(infoData._id)}, {
                'username': infoData.username,
                'age': infoData.age, 
                'gender': infoData.gender, 
                'email': infoData.email,
                'intro': infoData.intro
            });
            ctx.body = 1;
        }
    })
    .post('/register', async ctx => {
        let regData = ctx.request.body;
        let flag = false;
        await DB.find('users', {'username': regData.username}, {'username': 1}).then( res => {
            if (res.length == 0) {
                flag = true;
            } else {
                ctx.body = false;
            }
        });
        if (flag == true) {
            await DB.insert('users', {
                username: regData.username, 
                password: regData.password, 
                age: 0, 
                birthday: '',
                gender: '', 
                level: 0,
                email: '',
                issueNum: 0,
                followNum: 0,
                collectNum: 0,
                fanNum: 0,
                avatarUrl: '/resource/avatar/default.png',
                intro: ''
            });
            ctx.body = true;
        }
    })
    .post('/login', async ctx => {
        let loginData = ctx.request.body;
        let userInfo = { isLogin: false };
        await DB.find('users', {'username': loginData.username}).then( res => {
            if (res.length != 0) {
                if (res[0].password == loginData.password) {
                    userInfo = res[0];
                    userInfo.isLogin = true;
                }
            }
            ctx.body = userInfo;
        });
    });

// 启动路由
app
    .use(router.routes())
    .use(router.allowedMethods());

// 配置socket.io
io.attach(app);
io.on('message', (ctx, data) => {
    console.log(data);
});

app.listen(3000);