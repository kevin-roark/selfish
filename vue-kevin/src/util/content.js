
import content from '../data/content.json';

let slugMap = null;
function buildSlugMap() {
  slugMap = {};

  content.forEach((item, index) => {
    if (item.slug) {
      slugMap[item.slug] = { item, index };
    }
  });
}

export function contentFromSlug(slug) {
  if (!slugMap) {
    buildSlugMap();
  }

  return slugMap[slug].item;
}

export function navigateFromContent(con, { filter, delta = 1 } = {}) {
  if (!slugMap) {
    buildSlugMap();
  }

  const contentIndex = slugMap[con.slug].index;
  let hasNext = false;

  let nextIndex;
  while (!hasNext) {
    nextIndex = contentIndex + delta;
    if (nextIndex >= content.length) nextIndex = 0;
    else if (nextIndex < 0) nextIndex = content.length - 1;

    if (!filter || filter(content[nextIndex])) {
      hasNext = true;
    }
  }

  const nc = content[nextIndex];
  return nc.slug !== con.slug ? nc : null;
}

export default {
  contentFromSlug,
  navigateFromContent,
};
