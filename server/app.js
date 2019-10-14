const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const session = require('koa-session');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
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
    .use(bodyParser())
    // 配置静态资源服务中间件
    .use(static(path.join( __dirname, '/public')));

// 配置路由
router
    .get('/', async ctx => {
        ctx.render('index');
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

// 配置socket.io
io.attach(app);
io.on('message', (ctx, data) => {
    console.log(data);
});

app.listen(3000);