
const fs = require('fs');
const path = require('path');
const CSON = require('cson');
const slug = require('slug');

const pathname = file => path.join(__dirname, file);

let content = CSON.parseCSONFile(pathname('content.cson'));

content = content.filter(c => !c.hidden);

content.forEach((c) => {
  c.slug = slug(c.title); //eslint-disable-line
});

fs.writeFileSync(pathname('content.json'), JSON.stringify(content));

const links = CSON.parseCSONFile(pathname('links.cson'));
fs.writeFileSync(pathname('links.json'), JSON.stringify(links));

const data = {
  content,
  links,
};
fs.writeFileSync(pathname('data.json'), JSON.stringify(data));
