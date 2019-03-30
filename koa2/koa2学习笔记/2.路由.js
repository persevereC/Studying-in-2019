// 原生实现koa2路由
// const Koa = require('koa');
// const fs = require('fs');
// const app =new Koa();

// function render(page) {
//     return new Promise((resolve, reject) => {
//         let viewUrl = `./${page}`;
//         fs.readFile(viewUrl, 'binary', (err, data) => {
//             if(err){
//                 reject(err);
//             }else{
//                 resolve(data);
//             }
//         })
//     })
// }
// async function route(url){
//     let view = '404.html';
//     view = `${url}.html`;
//     let html = await render(view);
//     return html;
// }
// app.use(async ctx => {
//     let url = ctx.request.url;
//     let html = await route(url.slice(1));
//     ctx.body = html;
// })
// app.listen(3003);


// koa-router中间件
const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

const Router = require('koa-router');

let home = new Router();
home.get('/', async ctx => {
    let html =  `
        <ul>
        <li><a href="/page/hello">/page/helloworld</a></li>
        <li><a href="/page/404">/page/404</a></li>
        </ul>
    `;
    ctx.body = html;
})

let page = new Router();
page.get('/404', async ctx => {
    ctx.body = '404 page!';
}).get('/hello', async ctx => {
    ctx.body = 'hello koa!';
})

let router = new Router();

router.use('/', home.routes(), home.allowedMethods());
router.use('/page', page.routes(), page.allowedMethods());

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3003, () => {
    console.log('3003');
})