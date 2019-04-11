const util = require('util');
const fs = require('fs');
const readAsync = util.promisify(fs.readFile);

// async function init(){
//     try {
//         console.log(1)
//         let data = await readAsync('./package.json');
//         data = JSON.parse(data);
//         console.log(data);
//         console.log(2)
//     } catch (err) {
//         console.log(err);
//     }
// }

function init(){
    try {
        console.log(1)
        let data = fs.readFileSync('./package.json');
        data = JSON.parse(data);
        console.log(data);
        console.log(2)
    } catch (err) {
        console.log(err);
    }
}

init();