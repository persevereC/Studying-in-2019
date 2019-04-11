// 静态服务器

// 不使用流
// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res) => {
//     fs.readFile(`${__dirname}/index.html`, (err, data) => {
//         if(err){
//             res.statusCode = 500;
//             res.end(String(err));
//             return;
//         }
//         res.end(data);
//     })
// }).listen(8000);

// 使用流
// http.createServer((req, res) => {
//     fs.createReadStream(`${__dirname}/index.html`).pipe(res);
// }).listen(8000);

// 使用流 + gzip
// const zlib = require('zlib');
// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'content-encoding': 'gzip'
//     });
//     fs.createReadStream(`${__dirname}/index.html`)
//       .pipe(zlib.createGzip())
//       .pipe(res);
// }).listen(8000);

// const stream = fs.createReadStream('not-found');
// stream.on('error', err => {
//     console.trace();
//     console.error(`stack: ${err.stack}`);
//     console.error(`the error was: ${err}`);
// })



// 可读流 - JSON 行解析器
// const stream = require('stream');
// const fs = require('fs');
// const util = require('util');

// class JsonLineReader extends stream.Readable {
//     constructor(source) {
//         super();
//         this._source = source;
//         this._buffer = '';

//         source.on('readable', () => {
//             this.read();
//         })
//     }

//     _read(size) {
//         let chunk;
//         let line;
//         let result;
//         if(this._buffer.length === 0){
//             chunk = this._source.read();
//             this._buffer += chunk; 
//         }
//         const lineIndex = this._buffer.indexOf('\n');
//         if(lineIndex !== -1){
//             line = this._buffer.slice(0, lineIndex);
//             if(line){
//                 result = JSON.parse(line);
//                 this._buffer = this._buffer.slice(lineIndex + 1);
//                 this.emit('object', result);
//                 this.push(util.inspect(result));
//             }else{
//                 this._buffer = this._buffer.slice(1);
//             }
//         }
//     }
// }
// const input = fs.createReadStream(`${__dirname}/json.txt`, {
//     encoding: 'utf8'
// })
// const jsonLineReader = new JsonLineReader(input);
// jsonLineReader.on('object', obj => {
//     console.log(`pos: ${obj.position}, - letter ${obj.letter}`);
// }) 


const stream = require('stream');

class GreenStream extends stream.Writable {
  constructor(options) {
    super(options);
  }

  _write(chunk, encoding, cb) {
    process.stdout.write(`\u001b[32m${chunk}\u001b[39m`);
    cb();
  }
}

process.stdin.pipe(new GreenStream());