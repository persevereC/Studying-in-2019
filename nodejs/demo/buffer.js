const fs = require('fs');
const mime = 'image/png';
const encoding = 'base64';
const base64Data = fs.readFileSync(`${__dirname}/1.png`).toString(encoding);
const uri = `data:${mime};${encoding},${base64Data}`;
console.log(uri);

const fs = require('fs');
const uri = 'data:image/png;base64,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';
const base64Data = uri.split(',')[1];
const buf = Buffer(base64Data, 'base64');
fs.writeFileSync(`${__dirname}/node.png`, buf);