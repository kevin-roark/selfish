
function Content(config) {
  this.link = config.link;
  this.title = config.title;
  this.tags = config.tags;
  this.date = config.date;
  this.text = config.text;
  this.images = config.images || [];
  this.weight = config.weight || 1;
  this.unavailable = config.unavailable;

  this.config = config;
}

var primaryColors = ['#ff0000', '#00cc00', '#0000ff', '#ff7f00', '#6666ff', '#ff66a2', '#c0c0c0'];
var tagColorMap = {
  'Money': 'rgb(10, 147, 69)',
  'Text': 'rgb(190, 155, 10)'
};

Content.prototype.render = function() {
  var view = '';
  var i;

  if (this.link) {
    view += '<a target="_blank" class="content-item" href="' + this.link + '">';
  } else {
    view += '<div class="content-item">';
  }

  view += '<div class="content-text">';

  if (this.tags) {
    view += '<div class="content-tags">';

    for (i = 0; i < this.tags.length; i++) {
      var t = this.tags[i];
      var c = tagColorMap[t] || primaryColors[Math.floor(primaryColors.length * Math.random())];

      view += '<span style="color: ' + c + '">' + t + '</span>';
      if (this.tags.length > 1 && this.tags.length - 1 !== i) {
        view += ', ';
      }
    }

    view += '</div>';
  }

  var titleClass = 'content-title' + (this.tags ? ' with-tags' : '');
  view += '<div class="' + titleClass + '">' + this.title + '</div>';

  if (this.date) {
    view += '<div class="content-date">' + this.date + '</div>';
  }

  if (this.text) {
    view += '<div class="content-description">' + this.text + '</div>';
  }

  view += '</div>'; // content-text

  if (this.images) {
    view += '<div class="content-image-zone">';
    for (i = 0; i < this.images.length; i++) {
      var imageContainerClass = 'content-image-container' + (this.images.length > 1 ? ' multi-image' : '');
      view += '<div class="' + imageContainerClass + '">';

      view += '<img src="' + this.images[i] + '" alt=""></img>';

      view += '</div>';
    }
    view += '</div>';
  }

  if (this.unavailable) {
    view += '<div class="content-unavailable">TEMPORARILY MISSING</div>';
  }

  // content-item
  if (this.link) {
    view += '</a>';
  } else {
    view += '</div>';
  }

  return view;
};

Content.prototype.listTitle = function() {
  return this.title;
};

Content.prototype.renderedMenuLink = function(active) {
  var view = active ? '<li class="active"' : '<li';

  var style = this.config.listStyle || '';
  if (this.weight !== 1) {
    var weightPercent = (this.weight * 100).toFixed(1) + '%';
    style += ' font-size: ' + weightPercent;
  }
  if (style.length > 0) {
    view += ' style="' + style + '"';
  }

  view += '>';

  if (this.link) {
    view += '<a target="_blank" href="' + this.link + '">';
  }

  view += this.listTitle();

  if (this.link) {
    view += '</a>';
  }

  view += '</li>';

  return view;
};

function Section(config) {
  this.id = config.id;
  this.title = config.title;
  this.contents = config.contents;
  this.isNotMine = config.isNotMine;
}

Section.prototype.render = function({ index } = {}) {
  var view = '';

  view += '<div class="section-list-wrapper" id="' + this.id + '">';

  view += '<a class="section-list-header" href="#' + this.id + '" id="' + this.id + '-header">' + this.title + '</a>';

  view += '<ul class="section-list">';

  for (var i = 0; i < this.contents.length; i++) {
    let active = index === 0 && i === 0;
    view += this.contents[i].renderedMenuLink(active) + '</br>';
  }

  view += '</ul>'; // section-list

  view += '</div>'; // section-list-wrapper

  return view;
};

Section.prototype.renderFullTicker = function(sections) {
  var count = 0;
  sections.forEach(function(section) {
    if (!section.isNotMine) {
      count += section.contents.length;
    }
  });

  var view = '<span class="ticker-intro">' +
    'I have ' + count + ' works. Is that enough? When will it be? ' +
    '</span>';

  view += '<span class="ticker-travel-intro">Fast Travel: </span>';
  view += '<span class="ticker-travel-items">';

  sections.forEach(function(section) {
    view += section.renderTicker();
  });

  view += '</span>'; // ticker-travel-items

  return view;
};

Section.prototype.renderTicker = function() {
  return '<a href="#' + this.id + '">' + this.title + '</a>';
};

module.exports.Content = Content;
module.exports.Section = Section;
