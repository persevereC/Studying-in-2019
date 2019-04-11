const m = require('./1');

console.log(m.method1());
console.log(m.method2());

console.log(`__dirname: ${__dirname}`);
console.log(`__filename: ${__filename}`);

const path = require('path');
console.log(path.join(__dirname, 'views', 'view.html'));

console.log(require('os').homedir())

console.log('%d', '3.14')

console.log(process.argv);

const EventEmitter = require('events').EventEmitter;
function complex(){
    const events = new EventEmitter();
    process.nextTick(()=>{
        events.emit('suc');
    });
    console.log(222)
    return events;
}
complex().on('suc', ()=>console.log('success1'));
complex().on('suc', ()=>console.log('success2'));