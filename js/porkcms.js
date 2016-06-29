
function Content(config) {
  this.link = config.link;
  this.title = config.title;
  this.tags = config.tags;
  this.date = config.date;
  this.text = config.text;
  this.images = config.images || [];
  this.unavailable = config.unavailable;

  this.config = config;
}

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
    var colors = ['#ff0000', '#00ff00', '#0000ff'];
    view += '<div class="content-tags">';

    for (i = 0; i < this.tags.length; i++) {
      var c = colors[Math.floor(colors.length * Math.random())];
      view += '<span style="color: ' + c + '">' + this.tags[i] + '</span>';
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
    for (i = 0; i < this.images.length; i++) {
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

Content.prototype.listTitle = function() {
  return this.title;
};

Content.prototype.renderedMenuLink = function() {
  var view = '';
  if (this.link) {
    view += '<a target="_blank" href="' + this.link + '">';
  }

  view += this.listTitle();

  if (this.link) {
    view += '</a>';
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

  view += '<div class="section-list-wrapper" id="' + this.id + '">';

  view += '<div class="section-list-header" id="' + this.id + '-header">' + this.title + '</div>';

  view += '<ul class="section-list">';

  for (var i = 0; i < this.contents.length; i++) {
    view += '<li>' + this.contents[i].renderedMenuLink() + '</li></br>';
  }

  view += '</ul>'; // section-list

  view += '</div>'; // section-list-wrapper

  return view;
};

module.exports.Content = Content;
module.exports.Section = Section;
