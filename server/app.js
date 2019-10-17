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
        await DB.find('users', {'username': new RegExp(ctx.query.searchKey)}).then( res => {
            ctx.body = res;
        });
    })
    .get('/getRecommendUsers', async ctx => {
        await DB.aggregate('users', [{ $sample: { size: Number(ctx.query.recommendNum) } }]).then( res => {
            ctx.body = res;
        });
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
    .post('/register', async ctx => {
        let regData = ctx.request.body;
        let flag = false;
        await DB.find('users', {'username': regData.username}).then( res => {
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
                gender: '', 
                level: 0,
                issueNum: 0,
                followNum: 0,
                collectNum: 0,
                fanNum: 0,
                avatarUrl: '/resource/avatar/default.png'
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