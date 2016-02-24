#!/usr/bin/env node

var fs = require('fs');
var beautify = require('js-beautify');
var cms = require('./porkcms');

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

var contentMenu = '<div id="content-menu">';
var contentContainer = '<div id="content-container">';


fs.readFile('base.html', 'utf8', function(err, base) {
  var menuLocation = base.indexOf(contentMenu) + contentMenu.length;
  var containerLocation = base.indexOf(contentContainer) + contentContainer.length;

  var renderedMenu = '\n';
  var renderedContent = '\n';
  content.sections.forEach(function(section) {
    renderedContent += section.render() + '\n';
    renderedMenu += section.menuLink() + '\n';
  });

  var index = base.substring(0, menuLocation) +
              renderedMenu +
              base.substring(menuLocation + 1, containerLocation) +
              renderedContent +
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
