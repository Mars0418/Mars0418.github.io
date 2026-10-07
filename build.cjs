const fs = require('node:fs');
const path = require('node:path');
const data = require('./assets/js/site-data.js');
const {renderMain, renderSidebar} = require('./assets/js/render.js');
const template = fs.readFileSync(path.join(__dirname, 'index.template.html'), 'utf8');
const html = template.replace('<!-- PROFILE -->', renderSidebar('en')).replace('<!-- MAIN -->', renderMain(data, 'en'));
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('Built static index.html with complete English content.');
