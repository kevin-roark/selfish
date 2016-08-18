#!/usr/bin/env node

var fs = require('fs');
var beautify = require('js-beautify');
var cms = require('./js/porkcms');

var contentData = require('./content');
var content = {sections: []};
contentData.forEach(function(sectionData) {
  var contents = [];
  sectionData.contents.forEach(function(contentData) {
    contents.push(new cms.Content(contentData));
  });
  sectionData.contents = contents;

  content.sections.push(new cms.Section(sectionData));
});

var ticker = '<div class="ticker">';
var contentMenu = '<div class="content-menu">';
var contentContainer = '<div class="content-container">';

fs.readFile('base.html', 'utf8', function(err, base) {
  var tickerLocation = base.indexOf(ticker) + ticker.length;
  var menuLocation = base.indexOf(contentMenu) + contentMenu.length;
  var containerLocation = base.indexOf(contentContainer) + contentContainer.length;

  var renderedTicker = content.sections[0].renderFullTicker(content.sections);
  var renderedMenu = '\n' + content.sections.map((s, index) => s.render({ index })).join('\n');
  var renderedFirstContent = content.sections[0].contents[0].render();

  var index = base.substring(0, tickerLocation) +
    renderedTicker +
    base.substring(tickerLocation + 1, menuLocation) +
    renderedMenu +
    base.substring(menuLocation + 1, containerLocation) +
    renderedFirstContent +
    base.substring(containerLocation + 1);

  index = beautify.html(index, {
    indent_size: 2
  });
  index += '\n';

  fs.writeFile('index.html', index, 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
});
