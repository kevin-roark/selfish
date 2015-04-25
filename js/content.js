
function Content(config) {
  this.link = config.link;
  this.title = config.title;
  this.date = config.date;
  this.text = config.text;
  this.images = config.images;
  this.sublist = config.sublist;

  this.config = config;
}

Content.prototype.render = function() {
  var view = '';

  if (this.link) {
    view += '<a class="content-item" href="' + this.link + '">';
  } else {
    view += '<div class="content-item">';
  }

  view += '<div class="content-text">';
  view += '<div class="content-title">' + this.title + '</div>';

  if (this.date) {
    view += '<div class="content-date">' + this.date + '</div>';
  }

  if (this.text) {
    view += '<div class="content-description">' + this.text + '</div>';
  }

  view += '</div>'; // content-text

  if (this.sublist) {
    view += this.sublist.render();
  }

  if (this.images) {
    for (var i = 0; i < this.images.length; i++) {
      view += '<div class="content-image-container">';

      view += '<img src="' + this.images[i] + '" alt=""></img>';

      view += '</div>';
    }
  }

  if (this.link) {
    view += '</a>';
  } else {
    view += '</div>';
  }

  return view;
};

function Sublist(texts) {
  this.texts = texts;
}

Sublist.prototype.render = function() {
  var view = '<ul class="sub-list">';

  for (var i = 0; i < this.texts.length; i++) {
    view += '<li>' + this.texts[i] + '</li>';
  }

  view += '</ul>';
  return view;
};

function Section(config) {
  this.id = config.id;
  this.title = config.title;
  this.contents = config.contents;
}

Section.prototype.render = function() {
  var view = '';
  view += '<p class="content-header" id="' + this.id + '">';
  view += this.title;

  view += '<div class="content-list">';

  for (var i = 0; i < this.contents.length; i++) {
    if (i % 3 === 0) {
      if (i !== 0) {
        view += '</div>';
      }

      view += '<div class="content-group">';
    }

    view += this.contents[i].render();
  }

  view += '</div>';

  view += '</p>';
  return view;
};

Section.prototype.menuLink = function() {
  var view = '<div class="content-menu-link">';

  view += '<a href="#' + this.id + '">' + this.id + '</a>';

  view += '</div>';
  return view;
};

var mixedMedia = new Section({
  id: 'art',
  title: 'miXXXed media w/ internet',
  contents: [
    new Content({
      link: 'http://www.9857188538.website/',
      title: '(985) 718-8538',
      date: 'November 2014',
      text: 'translation of words to phone',
      images: ['images/9857188538.jpg']
    }),
    new Content({
      link: 'http://wayne.porkf.at',
      title: 'wayne',
      date: 'October 2014',
      text: 'a little little wayne model',
      images: ['images/wayne.jpg']
    }),
    new Content({
      link: 'http://www.wideopenwitharms.com',
      title: 'Wide Open With Arms',
      date: 'June 2014',
      text: 'creed music video',
      images: ['images/wideopenwitharms.jpg']
    }),
    new Content({
      link: 'http://www.specialmagicglasshole.com',
      title: 'Special Magic Glass Hole',
      date: 'March 2014',
      text: 'a hole through which all are seen'
    }),
    new Content({
      link: 'http://www.specialmagicyellingroom.com',
      title: 'Special Magic Yelling Room',
      date: 'March 2014',
      text: 'a room where everyone is heard at once'
    }),
    new Content({
      link: 'https://raw.github.com/kevin-roark/watchpi/master/samples/square_600_pi.jpg',
      title: 'watch pi',
      date: 'January 2014',
      text: 'turning irrational numbers into irrational images and videos',
      images: ['images/watchpi.jpg']
    }),
    new Content({
      link: 'http://www.lollaurie.net',
      title: 'Laurie',
      date: 'December 2013',
      text: 'christmas present for my special sister'
    }),
    new Content({
      link: 'http://kevin-roark.github.io/serena/',
      title: 'Serena',
      date: 'December 2013',
      text: 'christmas present for my special friend'
    }),
    new Content({
      link: 'http://lookatpi.com',
      title: 'look at pi',
      date: 'July 2013',
      text: 'turning irrational numbers into irrational colors',
      images: ['images/lookatpi.jpg']
    })
  ]
});

var music = new Section({
  id: 'music',
  title: 'Sound',
  contents: [
    new Content({
      link: 'http://www.mistershane.com',
      title: 'Mister Shane',
      text: 'an experimental m&amp;V project. blastin out with heart and sean',
      sublist: new Sublist([
        'content volume 1 (spring 2014)',
        "shane's tweet heaven (feb 2015)"
      ])
    }),
    new Content({
      link: '/',
      title: 'TONY TONEHOLE',
      text: 'WHERE ARE YOU / WE WILL FIND YOU. kinect, noise, servers, worlds. These are really awesome, I would love to show you some time.',
      sublist: new Sublist([
        'strength.js (oct 2014)',
        'tony ronald (dec 2014)',
        'jobfair (apr 2015)'
      ])
    }),
    new Content({
      link: 'http://sxecop.bandcamp.com',
      title: 'Straightedge Cop',
      text: 'hardcore straightedge sermon music. one small demo lol its comin back'
    })
  ]
});

var computer = new Section({
  id: 'webs',
  title: 'Computer',
  contents: [
    new Content({
      link: 'http://socket.computer/',
      title: 'Socket.IO Computer',
      date: 'May 2014',
      text: 'a collaborative windows xp emulator that runs in browser'
    }),
    new Content({
      link: 'http://wbar.org',
      title: 'WBAR',
      date: 'Summer 2013 - March 2015',
      text: 'internet work at best freeform nyc college radio station a+'
    }),
    new Content({
      link: 'http://adhoc.fm',
      title: 'AdHoc',
      text: 'i do the internet work at this diy music publication a+'
    }),
    new Content({
      link: 'http://www.hifisnockuptown.com',
      title: 'Hi Fi Snock Uptown',
      date: 'Winter 2014 - forever',
      text: 'made the site for this great place and thing in nyc'
    }),
    new Content({
      link: 'http://www.weplay.io',
      title: 'Weplay',
      date: 'March 2014',
      text: 'a 100% javascript collaborative gameboy player w/ socket.io 1.0 (with mr guillermo &amp; Mr. Tony)'
    }),
    new Content({
      link: 'http://kevin-roark.github.io/arthur',
      title: 'arthur',
      date: 'Spring 2014',
      text: 'a programming language made for manipulating and combining various media styles. made it for a class with melody sahil henry dylan. check the examples.'
    }),
    new Content({
      link: 'https://github.com/sahil-ansari/boar-square',
      title: 'boar square',
      date: 'Fall 2013',
      text: "a stupid ass project for a stupid ass class uses foursquare api don't care"
    })
  ]
});

var games = new Section({
  id: 'games',
  title: 'Gamers',
  contents: [
    new Content({
      link: 'http://journey.porkf.at',
      title: '(Pork) Journey',
      date: 'June 2014',
      text: 'play as a pig and get eaten',
      images: ['images/porkjourney.jpg']
    }),
    new Content({
      link: 'http://www.lonelytrash.me',
      title: 'Lonely Trash',
      date: 'May 2014',
      text: 'three minutes to win in this world i made the pictures and the music and all',
      images: ['images/lonelytrash.jpg']
    }),
    new Content({
      title: 'Meatbeat',
      date: 'February 2013',
      text: 'processing game for javascript where meatballs bounce in rhythm with sique beats',
      images: ['images/meatbeat.jpg']
    })
  ]
});

var pics = new Section({
  id: 'pics',
  title: 'Pics',
  contents: [
    new Content({
      link: 'film',
      title: 'Film',
      text: 'i take most of these with a canon or a scuba cam'
    }),
    new Content({
      link: 'http://kevinr.vsco.co',
      title: 'VSCO',
      text: "these are phone pictures. I work here it's great hmu!"
    })
  ]
});

var vids = new Section({
  id: 'vids',
  title: 'Vids',
  contents: [
    new Content({
      link: 'cruise',
      title: 'cruise remix',
      date: 'October 2013',
      text: 'a remix of a florida georgia line song with video too. link leads u to a movie theater'
    }),
    new Content({
      link: 'https://www.youtube.com/watch?v=Bl8wKauzzdA',
      title: 'brain phlem',
      date: 'Fall 2011',
      text: "i don't know why this is here lol I'm sorry"
    })
  ]
});

function divify(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div;
}

(function() {
  var container = document.getElementById('content-container');
  var contentMenu = document.getElementById('content-menu');

  function append(section) {
    container.appendChild(divify(section.render()));
    contentMenu.appendChild(divify(section.menuLink()));
  }

  append(mixedMedia);
  append(music);
  append(computer);
  append(games);
  append(pics);
  append(vids);

  document.body.style.opacity = '1';
})();
