// 1 开始
const Koa = require('koa');
const app = new Koa();
function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}
const logger = function () {
  return async function ( ctx, next ) {
    log(ctx);
    await next()
  }
}
app.use(logger());
app.use(async ctx => {
    ctx.body = 'hello koa2';
});
app.listen(3000);
console.log('koa2 is running');


// 2 async/await
// function getSyncTime(){
//     return new Promise((resolve, reject) => {
//       try {
//         let sTime = new Date().getTime();
//         setTimeout(() => {
//           let eTime = new Date().getTime();
//           let data = eTime - sTime;
//           resolve(data);
//         }, 500);
//       } catch (err) {
//         reject(err);
//       }
//     })
// }
// async function getSyncData() {
//     let time = await getSyncTime();
//     let data = `eTime - sTime = ${time}`;
//     return data;
// }
// async function getData(){
//     let data = await getSyncData();
//     console.log(data);
// }
// getData();

// koa2结构
//   -- lib
//     -- application.js (入口文件，封装了context，request，response，以及最核心的中间件处理流程)
//     -- context.js (处理应用上下文，里面直接封装部分request.js和response.js的方法)
//     -- request.js
//     -- response.js

// 中间件



