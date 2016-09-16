(function () {
  var content = [
    { image: '3', text: 'Husband and Wife and the Muscular Horse they Got' },
    { image: '5', text: 'Man Looking at Women Not Looking at the Family Separated by the Window' },
    { image: '2', text: 'Groomed and Bearded and Divided by the Reflection of My Pants' },
    { image: '7', text: 'One Pack of Men behind the Glass, Another Pack in front of It' },
    { image: '4', text: 'The Car in the Woman on the Horse and her Daughter' },
    { image: '6', text: 'Women in Three Dresses Watched through the Mirror made of Buildings' },
    { image: '8', text: 'One Man and One Woman and One Woman and One Man for Sale in front of a TV' },
    { image: '1', text: 'Four Women on a Platform through a Window, Three are in Love' },

    { image: '9', text: 'Sixteen Male Heads and Four and One Half Male Torsos, each on a Pedestal' },
    { image: '10', text: 'Growth Curve where the Points are Bodies' },

    { image: '11', text: 'One Man Alone' },
    { image: '12', text: 'Circle of Men Watching Pants and a Body from the Street' },
    { image: '13', text: 'Old Man Trapped in the Cage with a Curtain and a Painting and his Family' },
    { image: '14', text: 'Woman Without Wig Working for Woman with Wig by a Hollow Cross' },

    { image: '15', text: 'Fourteen Bodies Arranged for an Ad in a Window on a Building near a Truck' },
    { image: '18', text: 'Litter of Recent Births from Other Earth, a Visor with a Price Tag' },
    { image: '20', text: 'Sunglasses on a Rod in the Reflection of a Car in the Window surrounded by Perfect Bodies and the Equipment that Constrains Them' },

    { image: '16', text: 'Three Hands Grasping for Red Warm Light in an Upward and Wrong Direction' },
    { image: '19', text: 'Pile of Hands Clutching at Their Own Reflections' },
    { image: '17', text: 'Yellow Minivan Taxi Driving to a Man with Strange Light and Strong Body and Deformed Genitals and the Hands' },
    { image: '21', text: 'NEW Hands Clawing at the Sky or the Roof and a Honda Parked Alone' }
  ];

  var contentEl = document.querySelector('.content');
  var contentImages = document.querySelectorAll('.content-image');
  var textEls = document.querySelectorAll('.text');

  var currentIndex = 0;
  var lastDownTime = new Date();
  bleed();

  document.addEventListener('mousedown', function () {
    lastDownTime = new Date();
  }, false);
  document.addEventListener('click', function () {
    if (new Date() - lastDownTime < 500) {
      resetBleed();
      transition();
      bleed();
    }
  }, false);

  function transition () {
    contentEl.classList.add('shrunken');
    currentIndex = (currentIndex + 1) % content.length;
    var c = content[currentIndex];
    var indexAtTime = currentIndex;

    setTimeout(function () {
      var src = 'images/1200/img' + c.image + '.jpg';

      contentEl.style.backgroundImage = 'url(' + src + ')';

      var i;
      for (i = 0; i < contentImages.length; i++) {
        contentImages[i].src = src;
      }
      for (i = 0; i < textEls.length; i++) {
        textEls[i].textContent = c.text;
      }
    }, 500);

    setTimeout(function () {
      if (indexAtTime === currentIndex) {
        contentEl.classList.remove('shrunken');
      }
    }, 500);
  }

  function bleed () {
    var indexAtTime = currentIndex;

    setTimeout(function () {
      if (indexAtTime !== currentIndex) return;

      var i;
      for (i = 0; i < textEls.length; i++) {
        textEls[i].classList.add('long-transform');
      }

      setTimeout(function () {
        for (i = 0; i < textEls.length; i++) {
          textEls[i].classList.add('bleeding');
        }
      }, 0);
    }, 4000);
  }

  function resetBleed () {
    for (var i = 0; i < textEls.length; i++) {
      var el = textEls[i];
      el.classList.remove('long-transform');
      el.classList.remove('bleeding');
    }
  }

})();
