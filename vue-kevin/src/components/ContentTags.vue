<template>
<div class="tags-container" :class="{ tagged, untagged: !tagged, tagsShowing }">
  <TagsButton @click.native="tagButtonPressed" :tagsShowing="tagsShowing" :tagged="tagged" />

  <ul class="tags">
    <li
      v-for="tag in sortedTags"
      :class="tagClass(tag)"
      :style="tagStyle(tag)"
      @click="tagClick(tag)"
    >
      {{ tag }}
    </li>
  </ul>
</div>
</template>

<script>
import TagsButton from './TagsButton';
import tagStyle from '../util/tag-style';
import { contentWithTag, remainingTags } from '../util/content';

const a2m = (a) => {
  const m = {};
  a.forEach(i => (m[i] = true));
  return m;
};

export default {
  components: { TagsButton },
  props: {
    tags: Array,
    currentTags: Array,
  },
  data: () => ({ tagsShowing: false }),
  computed: {
    sortedTags() {
      return this.tags.concat()
        .sort((t1, t2) => {
          // prioritize years
          const nt1 = /^\d+$/.test(t1) && parseInt(t1, 10);
          const nt2 = /^\d+$/.test(t2) && parseInt(t2, 10);
          if (nt1 && nt2) {
            return nt2 - nt1;
          }
          if (nt1) {
            return -1;
          }
          if (nt2) {
            return 1;
          }

          return contentWithTag(t2).length - contentWithTag(t1).length;
        });
    },
    tagged() {
      return this.currentTags.length > 0;
    },
    currentTagMap() {
      return a2m(this.currentTags);
    },
    remainingTagMap() {
      return a2m(remainingTags(this.currentTags));
    },
  },
  methods: {
    tagButtonPressed() {
      if (!this.tagsShowing) {
        this.tagsShowing = true;
      } else {
        if (this.tagged) {
          this.$router.replace('/');
        }

        this.tagsShowing = false;
      }
    },
    tagStyle(tag) {
      return tagStyle(tag, this.currentTagMap[tag] ? 'background' : 'solid');
    },
    tagClass(tag) {
      return {
        'active-tag': this.currentTagMap[tag],
        'remaining-tag': this.remainingTagMap[tag],
      };
    },
    tagClick(tag) {
      if (!this.tagged || this.currentTagMap[tag] || this.remainingTagMap[tag]) {
        this.$emit('tagClick', tag);
      }
    },
  },
};
</script>

<style scoped>
.tags-container {
  position: fixed;
  bottom: 0; left: 0;
  width: 320px;
  max-height: 666px;
  overflow-y: auto;
  transition: all 0.1s;
  pointer-events: none;
}
  .tagsShowing.tags-container {
    pointer-events: auto;
    /*mix-blend-mode: darken;*/
  }
  .no-touch .tagsShowing.tags-container:hover {
    mix-blend-mode: normal;
  }

.tags {
  position: relative;
  top: 95px;
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-wrap: wrap;
  transform: translateY(100%);
  transition: all 0.25s, background none;
  opacity: 0;
  background: linear-gradient(rgba(0,0,255,0.8), rgba(120, 0, 40, 0.8), rgba(255,0,0,0.8));
}
  .tagsShowing .tags {
    top: 0;
    padding: 10px 5px 80px 0;
    transform: none;
    opacity: 1;
  }

  .no-touch .tagsShowing:hover .tags {
    background: #f00;
  }

.tags li {
  margin: 5px;
  padding: 1px;
  cursor: pointer;
  background: #000;
  color: #fff;
  text-shadow: 0 0.5px 0.7px rgba(255,255,255,0.3);
  font-family: 'Inconsolata', 'Work Sans', 'SF UI', 'Helvetica', sans-serif;
  font-weight: 400;
  font-size: 20px;
  user-select: none;
  transition: all 0.15s;
  border: 3px solid transparent;
}

  .tagged .tags li {
    opacity: 0.1;
    cursor: auto;
  }

  .tagged .tags li.active-tag {
    cursor: pointer;
    opacity: 1;
    border-color: #fffb7e;
    background: #000;
    color: #fff;
    text-shadow: 0 1px 1px #000;
    font-weight: 600;
    box-shadow: none;
    transform: skew(-10deg);
  }

  .tagged .tags li.remaining-tag {
    cursor: pointer;
    opacity: 0.9;
    background: #111;
  }

  .no-touch .untagged .tags li:hover,
  .no-touch .tagged .tags li.remaining-tag:hover {
    background: #ccc;
    color: #fff !important;
    text-shadow: 0 1px 1px #000;
    opacity: 1;
  }

  .no-touch .tagged .tags li.active-tag:hover {
    border-color: #000;
  }

@media (max-width: 800px) {
  .tags-container {
    left: calc(50% - 160px);
  }
}
</style>
