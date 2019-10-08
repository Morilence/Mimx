const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const session = require('koa-session');

const DB = require('./module/db');
// const chat = require('./routes/chat');
// const explore = require('./routes/explore');
// const profile = require('./routes/profile');

const app = new Koa();
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
app.use(session(CONFIG, app));
// 配置post中间件
app.use(bodyParser());
// 配置静态资源服务中间件
app.use(static('./public'));
app.use(static('./dist'));


// 配置路由
router
    .get('/', async ctx => {
        fs.readFile('./dist/index.html','utf-8',function(err, data){
            if(err){
                throw err;
            }
            ctx.body = data;
        });
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
                avatarUrl: ''
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

app.listen(3000);