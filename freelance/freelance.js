(function() {
  var borderColors = ['#ff0', '#000', '#00f', '#f00', '#fff'];
  var transluscentBorderColors = ['rgba(255, 255, 0, 0.3)', 'rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 255, 0.3)', 'rgba(255, 0, 0, 0.3)', 'rgba(255, 255, 255, 0.3)'];

  var backgroundImage = document.querySelector('.background-image');
  var imageContainer = document.querySelector('.freelance-images');
  var images = document.querySelectorAll('.freelance-images img');

  var currentRowIndices = null;
  var lastScrollTime = null;
  var scaledDown = false;

  document.addEventListener('scroll', function() {
    var index = findTopImageIndex(window.pageYOffset);
    if (index !== null) {
      currentRowIndices = findImagesInSameRow(index);
    }

    if (currentRowIndices) {
      var firstImageIndex = currentRowIndices[0];
      var rowMin = images[firstImageIndex].offsetTop;
      var rowMax = rowMin + window.innerHeight;
      var rowScrollPercentage = (window.pageYOffset - rowMin) / (rowMax - rowMin);
      var rowIndex = firstImageIndex + Math.min(currentRowIndices.length - 1, Math.floor(rowScrollPercentage * currentRowIndices.length));
      backgroundImage.src = images[rowIndex].src;
    }

    if (!lastScrollTime) {
      setImagesBorderColor(null);
    }

    lastScrollTime = new Date();
    setTimeout(function() {
      if (new Date().getTime() >= lastScrollTime.getTime() + 220) {
        lastScrollTime = null;
        setImagesBorderColor('transparent');
      }
    }, 220);
  });

  images.forEach(function(img, idx) {
    img.addEventListener('mouseenter', function() {
      var rowIndices = findImagesInSameRow(idx);
      var indexInRow = rowIndices.indexOf(idx);
      var p = (indexInRow + 1) / rowIndices.length;
      console.log(p);
      if (p < 0.34) {
        img.style.transformOrigin = '0 0';
        console.log('ok');
      } else if (p < 0.67) {
        img.style.transformOrigin = '50% 0';
      } else {
        img.style.transformOrigin = '100% 0';
      }

      var s = Math.random() * 1.2 + 1.5;
      if (scaledDown) s *= 5;
      var scale = 'scale(' + s + ',' + s + ')';
      img.style.transform = scale;
      img.style.borderColor = borderColors[Math.floor(borderColors.length * Math.random())];
    });

    img.addEventListener('mouseleave', function() {
      img.style.transform = 'none';
      img.style.borderColor = 'transparent';
    });
  });

  document.addEventListener('click', function() {
    scaledDown = !scaledDown;
    document.body.style.transform = scaledDown ? 'scale(0.1, 0.1)' : 'none';
  });

  function setImagesBorderColor (color) {
    for (var i = 0; i < images.length; i++) {
      images[i].style.borderColor = color || transluscentBorderColors[Math.floor(transluscentBorderColors.length * Math.random())];
    }
  }

  // binary search hell yeah
  function findTopImageIndex (pageOffset) {
    var low = 0;
    var high = images.length - 1;

    for (var mid = low + Math.floor((high - low) / 2); mid >= low && mid <= high; mid = low + Math.floor((high - low) / 2)) {
      var image = images[mid];
      if (image.offsetTop <= pageOffset && image.offsetTop + image.clientHeight >= pageOffset) {
        return mid;
      } else if (image.offsetTop < pageOffset) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return null;
  }

  function findImagesInSameRow (index) {
    var rowIndex = index;
    while (rowIndex > 0 && images[rowIndex - 1].offsetTop === images[rowIndex].offsetTop) {
      rowIndex -= 1;
    }

    var indices = [];
    for (; images[rowIndex].offsetTop === images[index].offsetTop; rowIndex += 1) {
      indices.push(rowIndex);
    }

    return indices;
  }
})();
