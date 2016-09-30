
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

  var contentContainer = $('.content-container');
  var $listItems = $('.section-list li');
  var $activeListElement = $($listItems.get(0));
  var activeListTitle = $activeListElement.text();
  var isSmallScreen = isSmallOne();

  resize();
  window.onresize = resize();

  $(document).scroll(scrolled);

  setHeaderImage();

  $listItems.mouseenter(function() {
    setActiveContent($(this));
  });

  function setActiveContent($listElement) {
    var listTitle = $listElement.text();
    if (activeListTitle === listTitle) {
      return;
    }

    if ($activeListElement) {
      $activeListElement.removeClass('active');
    }

    $listElement.addClass('active');

    var content = contentMap[listTitle];
    var rendered = content.render();
    contentContainer.html(rendered);

    $activeListElement = $listElement;
    activeListTitle = listTitle;
  }

  function scrolled() {
    if (!isSmallScreen) return;

    var topListElement = mostVisibleElement($listItems);
    if (!topListElement) {
      return;
    }

    setActiveContent(topListElement);
  }

  function resize() {
    $('.right-section').css('height', window.innerHeight + 'px');
  }

  function setHeaderImage() {
    var imageNumber = Math.floor(Math.random() * 5) + 1;
    var filename = '/images/headers/' + imageNumber + '.jpg';
    $('.header-image').attr('src', filename);
  }

  function listItemWithTitle(title) {
    for (var i = 0; i < $listItems.length; i++) {
      var item = $listItems[i];
      if (item.textContent === title) {
        return item;
      }
    }

    return null;
  }

})();

function mostVisibleElement(elements, bottomMost, buffer) {
  if (!buffer) buffer = -10;

  var topBound = $(window).scrollTop() + (bottomMost? -buffer : -buffer);
  var bottomBound = topBound + window.innerHeight;

  var bestElement = null;
  var bestOffset = bottomMost? 0 : 10000000;

  for (var i = 0; i < elements.length; i++) {
    var $element = $(elements[i]);
    var top = $element.offset().top;
    var nextTop = (i === elements.length - 1 ? null : $(elements[i + 1]).offset().top);

    if ( (top >= topBound) || (nextTop && nextTop > bottomBound) ) {
      if ( (bottomMost && top > bestOffset) || (!bottomMost && top < bestOffset) ) {
        bestOffset = top;
        bestElement = $element;
      }
    }
  }

  return bestElement;
}

function isSmallOne () {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
