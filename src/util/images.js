
export function getImageURL(path) {
  return require(`../assets/${path}`); //eslint-disable-line
}

export function getThumbnailURL(path) {
  return require(`../assets/${path.replace('images', 'image-thumbnails')}`); //eslint-disable-line
}

export default {
  getImageURL,
  getThumbnailURL,
};
