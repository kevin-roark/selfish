
import content from '../data/content.json';

const dateTags = ['2017', '2016', '2015', '2014'];

let slugMap = null; // slug -> content index
let tagMap = null; // tag -> list of indices
const tagList = [].concat(dateTags);

function buildSlugMap() {
  slugMap = {};

  content.forEach((item, index) => {
    if (item.slug) {
      slugMap[item.slug] = index;
    }
  });
}

function buildTagMap() {
  tagMap = {};
  dateTags.forEach(dt => (tagMap[dt] = []));

  content.forEach((item, index) => {
    if (!item.tags) return;

    item.tags.forEach((tag) => {
      if (!tagMap[tag]) {
        tagMap[tag] = [];
        tagList.push(tag);
      }
      tagMap[tag].push(index);
    });

    // index the dates (:
    dateTags.forEach((date) => {
      if (item.date && item.date.indexOf(date) >= 0) {
        tagMap[date].push(index);
      }
    });
  });
}

export function contentFromSlug(slug) {
  if (!slugMap) {
    buildSlugMap();
  }

  return content[slugMap[slug]];
}

export function navigateFromContent(con, { filter, delta = 1 } = {}) {
  if (!slugMap) {
    buildSlugMap();
  }

  const contentIndex = slugMap[con.slug];
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

export function allTags() {
  if (!tagMap) {
    buildTagMap();
  }

  return tagList;
}

export function contentWithTags(tags) {
  if (!tagMap) {
    buildTagMap();
  }

  const indicesPerTag = tags.map(t => tagMap[t]);
  const firstTagIndices = indicesPerTag[0];

  const indices = firstTagIndices.filter((idx) => {
    for (let i = indicesPerTag.length - 1; i > 0; i -= 1) {
      const nextTagIndices = indicesPerTag[i];
      if (nextTagIndices.indexOf(idx) < 0) {
        return false;
      }
    }

    return true;
  });

  return indices;
}

export function contentWithIndex(index) {
  return content[index];
}

export default {
  contentFromSlug,
  navigateFromContent,
  allTags,
  contentWithTags,
  contentWithIndex,
};
