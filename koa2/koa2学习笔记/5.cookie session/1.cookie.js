const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
    if(ctx.url === '/index'){
        ctx.cookies.set(
            'cid',
            'hello koa',
            {
                domain: 'localhost',
                path: '/index',
                maxAge: 10*60*1000,
                expires: new Date('2019-04-01'),
                httponly: false,
                overwrite: false
            }
        )
        ctx.body = 'cookie is ready';
        console.log(ctx.cookies.get('cid'));
    }else{
        ctx.body = 'cookie is not ready';
    }
})

app.listen(3000, () => {
    console.log('[demo] cookie is starting at port 3000')
})