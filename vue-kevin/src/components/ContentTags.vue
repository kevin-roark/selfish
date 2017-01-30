<template>
<div class="tags-container" :class="{ tagged, tagsShowing }">
  <div class="tags-button" @click="tagButtonPressed" :class="{ reset: tagsShowing && tagged }">
    <span class="tags-button-text">{{ tagsButtonText }}</span>
  </div>
  <ul class="tags">
    <li
      v-for="tag in tags"
      :class="{ 'active-tag': currentTagMap[tag] }"
      :style="tagStyle(tag)"
      @click="tagClick(tag)"
    >
      {{ tag }}
    </li>
  </ul>
</div>
</template>

<script>
import tagStyle from '../util/tag-style';

export default {
  props: {
    tags: Array,
    currentTags: Array,
  },
  data: () => ({ tagsShowing: false }),
  computed: {
    tagged() {
      return this.currentTags.length > 0;
    },
    currentTagMap() {
      const m = {};
      this.currentTags.forEach(t => (m[t] = true));
      return m;
    },
    tagsButtonText() {
      if (!this.tagsShowing) {
        return 'TAGS';
      }

      return this.tagged ? 'RESET' : 'HIDE';
    },
  },
  methods: {
    tagButtonPressed() {
      if (!this.tagsShowing) {
        this.tagsShowing = true;
      } else if (this.tagged) {
        this.$router.replace('/');
      } else {
        this.tagsShowing = false;
      }
    },
    tagStyle(tag) {
      return tagStyle(tag, 'solid');
    },
    tagClick(tag) {
      this.$emit('tagClick', tag);
    },
  },
};
</script>

<style scoped>
.tags-container {
  position: fixed;
  bottom: 0; left: 0;
  width: 320px;
  transition: all 0.1s;
  pointer-events: none;
}
  .tagsShowing.tags-container {
    pointer-events: auto;
  }

.tags-button {
  position: fixed;
  bottom: 0; left: 0;
  width: 320px;
  padding: 20px 0 25px 0;
  cursor: pointer;
  background: #FFFFB3;
  color: #0000ff;
  box-sizing: border-box;
  border: 4px solid #0000FF;
  text-align: center;
  user-select: none;
  z-index: 1;
  transition: all 0.25s;
  pointer-events: auto;
}
  .tags-button.reset {
    border-color: #ff0000;
    color: #ff0000;
  }
  .tagsShowing .tags-button {
    background: rgba(255, 255, 179, 0.95);
  }
  .no-touch .tags-button:hover .tags-button-text {
    transform: scale(5, 4) rotate(180deg) translateY(-2px);
  }

.tags-button-text {
  display: inline-block;
  font-family: 'Work Sans', 'SF UI', 'Helvetica', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-shadow: 1px 2px 2px #000088, 0 1.2px 0 #000000;
  transform: scale(5, 3);
  transition: transform 0.1s;
}
  .reset .tags-button-text {
    text-shadow: 1px 2px 2px #880000, 0 1.2px 0 #000000;
  }

.tags {
  position: relative;
  top: 95px;
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-wrap: wrap;
  transform: translateY(100%);
  transition: all 0.25s;
  opacity: 0;
  background: linear-gradient(#00f, #e04, #f00);
}
  .tagsShowing .tags {
    top: 0;
    padding: 10px 0 80px 0;
    transform: none;
    opacity: 1;
  }

.tags li {
  margin: 5px 10px;
  padding: 2px;
  cursor: pointer;
  background: rgba(255, 255, 255, 1);
  font-family: 'Work Sans', 'SF UI', 'Helvetica', sans-serif;
  font-weight: 600;
  font-size: 15px;
  user-select: none;
  transition: all 0.1s;
}

  .tagged .tags li {
    opacity: 0.3;
  }

  .no-touch .tags li:hover, .no-touch .tagged .tags li:hover {
    background: #000;
    color: #fff !important;
    opacity: 1;
  }

  .tagged .tags li.active-tag {
    opacity: 1;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }

@media (max-width: 800px) {
  .tags-button, .tags-container {
    left: calc(50% - 160px);
  }
}
</style>
