
function convert (text) {
  let files = text.split(' ');
  let filtered = files.filter(f => {
    return f.indexOf('jpg') >= 0;
  });

  let images = filtered.map(f => {
    let parts = f.split('/');
    let name = parts[parts.length - 1];
    let src = 'images/' + name;
    return `<img src="${src}" />`;
  });

  return images.reverse();
}

module.exports = convert;
