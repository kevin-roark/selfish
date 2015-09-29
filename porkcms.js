
function Content(config) {
  this.link = config.link;
  this.title = config.title;
  this.subtitle = config.subtitle;
  this.date = config.date;
  this.text = config.text;
  this.images = config.images;
  this.unavailable = config.unavailable;

  this.config = config;
}

Content.prototype.render = function() {
  var view = '';

  if (this.link) {
    view += '<a target="_blank" class="content-item" href="' + this.link + '">';
  } else {
    view += '<div class="content-item">';
  }

  view += '<div class="content-text">';
  view += '<div class="content-title">' + this.title;

  if (this.subtitle) {
    view += ': <span class="content-subtitle">' + this.subtitle + '</span>';
  }

  view += '</div>'; // for title

  if (this.date) {
    view += '<div class="content-date">' + this.date + '</div>';
  }

  if (this.text) {
    view += '<div class="content-description">' + this.text + '</div>';
  }

  view += '</div>'; // content-text

  if (this.images) {
    for (var i = 0; i < this.images.length; i++) {
      view += '<div class="content-image-container">';

      view += '<img src="' + this.images[i] + '" alt=""></img>';

      view += '</div>';
    }
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

function Section(config) {
  this.id = config.id;
  this.title = config.title;
  this.contents = config.contents;
}

Section.prototype.render = function() {
  var view = '';

  view += '<div class="content-section" id="' + this.id + '">';

  view += '<div class="content-section-buffer"></div>';

  view += '<div class="content-header" id="' + this.id + '-header">' + this.title + '</div>';

  view += '<div class="content-list">';

  for (var i = 0; i < this.contents.length; i++) {
    view += this.contents[i].render();
  }

  view += '</div>'; // content-list

  view += '</div>'; // content-section

  return view;
};

Section.prototype.menuLink = function() {
  var view = '<div class="content-menu-link" id="' + this.id + '-menu-link">';

  view += '<a href="#' + this.id + '">' + this.id + '</a>';

  view += '</div>';
  return view;
};

module.exports.Content = Content;
module.exports.Section = Section;
