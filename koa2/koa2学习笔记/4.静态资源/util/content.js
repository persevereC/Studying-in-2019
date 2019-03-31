const path = require('path');
const fs = require('fs');

const dir = require('./dir');
const file = require('./file');

async function content(ctx, fullStaticath) {
    let reqPath = path.join(fullStaticath, ctx.url);
    let exist = fs.existsSync(reqPath);
    let content = '';
    if(!exist){
        content = '404';
    }else{
        let stat = fs.statSync(reqPath);
        if(stat.isDirectory()){
            content = dir(ctx.url, reqPath);
        }else{
            content = await file(reqPath); 
        }
    }
    return content;
}

module.exports = content;