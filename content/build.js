
let fs = require('fs');
let path = require('path');
let CSON = reqire('cson');

let pathname = file => path.join(__dirname, file);

let content = CSON.parseCSONFile(pathname('content.cson'));
let links = CSON.parseCSONFile(pathname('links.cson'));

let data = {
  content,
  links
};

fs.writeFileSync(pathname('data.json'));
