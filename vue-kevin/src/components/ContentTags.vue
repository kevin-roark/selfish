<template>
<div class="tags-container" :class="{ tagged, tagsShowing }">
  <img class="image-bg" src="../assets/images/birdsculpture.jpg" />
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
  transition: bottom 0.25s;
}

.image-bg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.25s;
}
  .tagsShowing .image-bg {
    transform: none;
    opacity: 1;
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
}
  .tags-button.reset {
    border-color: #ff0000;
    color: #ff0000;
  }
  .tagsShowing .tags-button {
    background: rgba(255, 255, 179, 0.95);
  }
  .no-touch .tags-button:hover {
    box-shadow: 5px -5px #ffff91, 10px -10px #dada80, 15px -15px #9299d2, 20px -20px #00f;
  }
  .no-touch .tags-button:hover .tags-button-text {
    transform: scale(6, 3);
  }

.tags-button-text {
  display: inline-block;
  font-family: "SF UI", sans-serif;
  font-size: 15px;
  font-weight: bold;
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
}
  .tagsShowing .tags {
    top: 0;
    padding-bottom: 95px;
    margin: 10px 10px 0 10px;
    transform: none;
    opacity: 1;
  }

.tags li {
  margin: 5px 10px;
  padding: 0;
  cursor: pointer;
  background: #fff;
  font-family: Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 15px;
  user-select: none;
}

  .tagged .tags li {
    opacity: 0.3;
  }

  .no-touch .tags li:hover, .no-touch .tagged .tags li:hover {
    background: #000;
    color: #fff;
    opacity: 1;
  }

  .tagged .tags li.active-tag {
    opacity: 1;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }

@media (max-width: 800px) {
  .tags-button {
    left: calc(50% - 160px);
  }
}
</style>
