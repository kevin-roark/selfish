
(function() {
  var $media = $('#multimedia');
  var $computer = $('#computer');
  var $pics = $('#pics');
  var sectionElements = [$media, $computer, $pics];

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
