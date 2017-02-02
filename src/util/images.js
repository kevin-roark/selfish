
export function getImageURL(path) {
  return require(`../assets/${path}`); //eslint-disable-line
}

export default {
  getImageURL,
};
