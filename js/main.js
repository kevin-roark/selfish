
(function() {
  var cms = require('./porkcms');
  var content = require('../content');

  var contentMap = {};
  content.forEach(function(section) {
    section.contents.forEach(function(contentData) {
      var content = new cms.Content(contentData);
      contentMap[content.listTitle()] = content;
    });
  });

  var currentBottomElementID = null;
  var contentContainer = $('.content-container');

  resize();
  window.onresize = resize();

  scrolled();
  $(document).scroll(scrolled);

  setHeaderImage();

  $('.section-list li').mouseenter(function() {
    var listTitle = this.textContent;
    setActiveContent(listTitle);
  });

  function setActiveContent(listTitle) {
    var content = contentMap[listTitle];
    var rendered = content.render();
    contentContainer.html(rendered);
  }

  function scrolled() {
    var bottomElement = mostVisibleElement([]);
    if (!bottomElement) {
      return;
    }

    var bottomElementID = bottomElement.attr('id');
    if (bottomElementID !== currentBottomElementID) {

    }

    currentBottomElementID = bottomElementID;
  }

  function resize() {
    $('.right-section').css('height', window.innerHeight + 'px');
  }

  function setHeaderImage() {
    var imageNumber = Math.floor(Math.random() * 5) + 1;
    var filename = '/images/headers/' + imageNumber + '.jpg';
    $('.header-image').attr('src', filename);
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
