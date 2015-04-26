
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
    view += '<a class="content-item" href="' + this.link + '">';
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
    if (i % 3 === 0) {
      if (i !== 0) {
        view += '</div>';
      }

      view += '<div class="content-group">';
    }

    view += this.contents[i].render();
  }

  view += '</div>'; // content-group

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
      //link: 'http://www.specialmagicglasshole.com',
      unavailable: true,
      title: 'Special Magic Glass Hole',
      date: 'March 2014',
      text: 'a hole through which all are seen',
      images: ['images/specialmagicglasshole.jpg']
    }),
    new Content({
      //link: 'http://www.specialmagicyellingroom.com',
      unavailable: true,
      title: 'Special Magic Yelling Room',
      date: 'March 2014',
      text: 'a room where everyone is heard at once',
      images: ['images/specialmagicyellingroom.jpg'],
    }),
    new Content({
      link: 'http://www.whereistimesquare.com/',
      title: "Miller's Fantasy",
      subtitle: "WHERE IS TIME SQUARE?",
      date: 'February 2014',
      text: 'Map findng application to map find time square',
      images: ['images/miller/whereistimesquare.jpg']
    }),
    new Content({
      link: 'http://www.diningatcu.com/',
      title: "Miller's Fantasy",
      subtitle: "Dining@CU",
      date: 'March 2014',
      text: 'Dining menu application to discover dining hall menus',
      images: ['images/miller/diningatcu.jpg']
    }),
    new Content({
      link: 'http://www.networkforu.com/',
      title: "Miller's Fantasy",
      subtitle: "Network Style",
      date: 'March 2014',
      text: 'Learning trade secrets',
      images: ['images/miller/networkstyle.jpg']
    }),
    new Content({
      link: 'http://www.millersfantasy.com/',
      title: "Miller's Fantasy",
      subtitle: "yellin",
      date: 'April 2014',
      text: "iOS application. Send sound at miller's fantasy founders. We send it back",
      images: ['images/miller/yellin.jpg']
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
      text: 'christmas present for my special sister come on its cute',
      images: [
        'images/laurie.jpg'
      ]
    }),
    new Content({
      link: 'http://pi.porkf.at',
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
      subtitle: 'Content: Volume 1',
      date: 'May 2014',
      text: 'first collection from mister shane, experimental m&amp;v project from sean and kev man',
      images: [
        'images/shane/laborpain.jpg',
        'images/shane/osteen.jpg',
        'images/shane/pig.jpg',
        'images/shane/birthday.jpg',
        'images/shane/eat.jpg',
      ]
    }),
    new Content({
      link: 'http://heaven.mistershane.com',
      title: 'Mister Shane',
      subtitle: "Shane's Tweet Heaven",
      date: 'February 2015',
      text: "explore your twitter self with a museum made just 4 u",
      images: [
        'images/shane/heaven.jpg'
      ]
    }),
    new Content({
      title: 'TONY TONEHOLE',
      subtitle: 'strengh.js',
      date: 'October 2014',
      text: 'tech masculinity / wrestling with kinect puppets',
      images: [
        'images/tony/strengthjs.jpg'
      ]
    }),
    new Content({
      title: 'TONY TONEHOLE',
      subtitle: 'Ronald',
      date: 'December 2014',
      text: "can't seem to get outside of that computer trash can",
      images: [
        'images/tony/ronald.jpg'
      ]
    }),
    new Content({
      title: 'TONY TONEHOLE',
      subtitle: 'Job Fair',
      date: 'March 2015',
      text: 'simulation of a startup job fair / earn and prove your worth',
      images: [
        'images/tony/jobfair.jpg'
      ]
    }),
    new Content({
      link: 'http://sxecop.bandcamp.com',
      title: 'Straightedge Cop',
      subtitle: '2014 Demo',
      date: 'May 2015',
      text: 'hardcore straightedge sermon music. first small demo lol its comin back',
      images: [
        'images/sxecop.jpg'
      ]
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
      text: 'a collaborative windows xp emulator that runs in browser',
      images: ['images/socketcomputer.jpg']
    }),
    new Content({
      link: 'http://kevin-roark.github.io/arthur',
      title: 'arthur',
      date: 'Spring 2014',
      text: 'a programming language made for manipulating and combining various media styles. made it for a class with melody sahil henry dylan. check the examples.',
      images: ['images/arthur.jpg']
    }),
    new Content({
      link: 'http://wbar.org',
      title: 'WBAR',
      date: 'always',
      text: 'internet work at best freeform nyc college radio station a+',
      images: ['images/wbar.jpg']
    }),
    new Content({
      link: 'http://adhoc.fm',
      title: 'AdHoc',
      text: 'i do the internet work at this diy music publication a+',
      images: ['images/adhoc.jpg']
    }),
    new Content({
      link: 'http://www.hifisnockuptown.com',
      title: 'Hi Fi Snock Uptown',
      date: '2014 - forever',
      text: 'made the site for this great place and thing in nyc',
      images: ['images/hifisnockuptown.jpg']
    }),
    new Content({
      link: 'http://www.weplay.io',
      title: 'Weplay',
      date: 'March 2014',
      text: 'a 100% javascript collaborative gameboy player w/ socket.io 1.0 (with mr guillermo &amp; Mr. Tony)',
      images: ['images/weplay.jpg']
    }),
    new Content({
      link: 'https://github.com/sahil-ansari/boar-square',
      title: 'boar square',
      date: 'Fall 2013',
      text: "a stupid ass project for a stupid ass class uses foursquare api don't care",
      images: ['images/boarsquare.jpg']
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
      link: 'film/textures.html',
      title: 'Film',
      subtitle: 'Textures',
      text: 'natural patterns',
      images: ['images/textures.jpg']
    }),
    new Content({
      link: 'film/mouths.html',
      title: 'Film',
      subtitle: 'Mouths',
      text: 'eating from a cannon',
      images: ['images/mouths.jpg']
    }),
    new Content({
      link: 'http://kevinr.vsco.co',
      title: 'VSCO',
      text: "these are phone pictures. I work here it's great hmu!",
      images: ['images/vsco.jpg']
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
      text: 'a remix of a florida georgia line song with video too. link leads u to a movie theater',
      images: [
        'images/cruise.jpg'
      ]
    }),
    new Content({
      link: 'https://www.youtube.com/watch?v=Bl8wKauzzdA',
      title: 'brain phlem',
      date: 'Fall 2011',
      text: "i don't know why this is here lol I'm sorry its a legacy lifestyle",
      images: [
        'images/brainphlem.jpg'
      ]
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

  var $media = $('#art');
  var $music = $('#music');
  var $webs = $('#webs');
  var $games = $('#games');
  var $pics = $('#pics');
  var $vids = $('#vids');
  var sectionElements = [$media, $music, $webs, $games, $pics, $vids];

  var currentBottomElementID = null;
  var currentActiveMenuButton = null;
  scrolled();
  $(document).scroll(scrolled);

  function scrolled() {
    var bottomElement = mostVisibleElement(sectionElements);
    if (!bottomElement) {
      return;
    }

    var bottomElementID = bottomElement.attr('id');

    var bottomElementMenuButton = $('#' + bottomElementID + '-menu-link');
    if (!bottomElementMenuButton) {
      return;
    }

    if (bottomElementID !== currentBottomElementID) {
      if (currentActiveMenuButton) {
        currentActiveMenuButton.removeClass('active-menu-button');
      }
    }

    bottomElementMenuButton.addClass('active-menu-button');

    currentActiveMenuButton = bottomElementMenuButton;
    currentBottomElementID = bottomElementID;
  }

})();

function mostVisibleElement(elements, bottomMost, buffer) {
  if (!buffer) buffer = 100;

  var topBound = $(window).scrollTop() + (bottomMost? -buffer : -buffer);
  var bottomBound = topBound + window.innerHeight;

  var bestElement = null;
  var bestOffset = bottomMost? 0 : 10000000;

  for (var i = 0; i < elements.length; i++) {
    var $element = elements[i];
    var top = $element.offset().top;
    var nextTop = (i === elements.length - 1 ? null : elements[i + 1].offset().top);

    if ( (top >= topBound) || (nextTop && nextTop > bottomBound) ) {
      if ( (bottomMost && top > bestOffset) || (!bottomMost && top < bestOffset) ) {
        bestOffset = top;
        bestElement = $element;
      }
    }
  }

  return bestElement;
}
