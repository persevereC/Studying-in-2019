const fs = require('fs');

function file(filePath){
    let content = fs.readFileSync(filePath);
    return content;
}

module.exports = file;