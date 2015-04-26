
var fs = require('fs');

var content = require('./content.js');
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

  fs.writeFile('index.html', index, 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
});
