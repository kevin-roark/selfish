
import content from '../data/content.json';

let slugMap = null;
function buildSlugMap() {
  slugMap = {};

  content.forEach((item) => {
    if (item.slug) {
      slugMap[item.slug] = item;
    }
  });
}

export function contentFromSlug(slug) {
  if (!slugMap) {
    buildSlugMap();
  }

  return slugMap[slug];
}

export default {
  contentFromSlug,
};
