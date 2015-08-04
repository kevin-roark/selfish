
var cms = require('./porkcms');
var Content = cms.Content;
var Section = cms.Section;

var mixedMedia = new Section({
  id: 'art',
  title: 'Multimedia (XXX)',
  contents: [
    new Content({
      link: 'http://www.luminal.space/',
      title: 'Luminal.space',
      date: 'April 2015',
      text: "An installation on Columbia's Low Steps; long-term project made with many people more talented than me. click 4 info",
      images: ['images/luminal.jpg']
    }),
    new Content({
      link: 'http://www.9857188538.website/',
      title: '(985) 718-8538',
      date: 'November 2014',
      text: 'translation of words to phone',
      images: ['images/9857188538.jpg']
    }),
    new Content({
      link: 'http://benkogan.github.io/corpse/',
      title: 'Corpse',
      date: 'October 2014',
      text: "Computer corpse for Postcrypt's Exquisite Corpse show. Made w/ Ben, Dylan, Henry. i did the foot.",
      images: ['images/corpse.jpg']
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
      link: 'film/june15-1/',
      title: 'June 2015 1',
      text: 'cycles',
      images: ['images/june15-1.jpg']
    }),
    new Content({
      link: 'film/june15-2/',
      title: 'June 2015 2',
      text: 'you deserve extra',
      images: ['images/june15-2.jpg']
    }),
    new Content({
      link: 'film/june15-3/',
      title: 'June 2015 3',
      text: 'i live in a wet world',
      images: ['images/june15-3.jpg']
    }),
    new Content({
      link: 'film/june15-4/',
      title: 'June 2015 4',
      text: 'visions',
      images: ['images/june15-4.jpg']
    }),
    new Content({
      link: 'film/june15-5/',
      title: 'June 2015 5',
      text: 'Florida',
      images: ['images/june15-5.jpg']
    }),
    new Content({
      link: 'film/textures/',
      title: 'Textures',
      text: 'natural patterns',
      images: ['images/textures.jpg']
    }),
    new Content({
      link: 'film/mouths/',
      title: 'Mouths',
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

module.exports.sections = [mixedMedia, music, computer, games, pics, vids];
