<template>
  <div id="app" :class="appClass">
    <ThreeDee />

    <div class="main-content" :class="contentClass">
      <my-name :imageBackground="contentHovering"></my-name>
      <site-menu></site-menu>
      <site-content :content="content" :tags="currentTags" @cardHover="handleCardHover"></site-content>

      <content-tags
        :tags="allTags"
        :currentTags="currentTags"
        :style="tagsStyle"
        @tagClick="tagClick"
      />
    </div>

    <transition name="simple-fade">
      <keep-alive>
        <modal-container v-if="modalRoute" :mode="modalMode" :active="!!modalRoute">
          <router-view></router-view>
        </modal-container>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import ThreeDee from './components/ThreeDee';
import ModalContainer from './components/ModalContainer';
import MyName from './components/MyName';
import SiteMenu from './components/SiteMenu';
import SiteContent from './components/SiteContent';
import ContentTags from './components/ContentTags';
import content from './data/content.json';
import { allTags } from './util/content';

function isTouchDevice() {
  return 'ontouchstart' in window // works on most browsers
    || navigator.maxTouchPoints;  // works on IE10/11 and Surface
}

export default {
  name: 'app',
  components: {
    MyName,
    SiteMenu,
    SiteContent,
    ContentTags,
    ModalContainer,
    ThreeDee,
  },
  data: () => ({ touch: true, contentHovering: false, content }),
  mounted() {
    if (!isTouchDevice()) {
      this.touch = false;
    }
  },
  methods: {
    handleCardHover(hovering) {
      this.contentHovering = hovering;
    },
    tagClick(tag) {
      const tags = this.currentTags.concat();
      const idx = tags.indexOf(tag);
      if (idx < 0) {
        tags.push(tag);
      } else {
        tags.splice(idx, 1);
      }

      const url = `/tagged/${tags.join(',')}`;
      this.$router.replace(url);
    },
  },
  computed: {
    appClass() {
      return {
        'no-touch': !this.touch,
        touch: this.touch,
      };
    },
    contentClass() {
      return {
        'modal-showing': this.modalShowing,
      };
    },
    modalShowing() {
      return this.modalRoute && this.modalMode !== 'tagged';
    },
    modalRoute() {
      return this.$route.path.length > 1; // only "/" will return false
    },
    modalMode() {
      if (this.$route.path.indexOf('detail') >= 0) return 'detail';
      if (this.$route.path.indexOf('tagged') >= 0) return 'tagged';
      return 'default';
    },
    tagsStyle() {
      return { opacity: this.contentHovering && !this.modalShowing ? 0 : 1 };
    },
    allTags() {
      return allTags();
    },
    currentTags() {
      const path = this.$route.path;
      if (path.indexOf('tagged') < 0) return [];

      const components = path.split('/');
      return components[components.length - 1].split(',').filter(t => t.length > 0);
    },
  },
};
</script>

<style>
html, body {
  margin: 0; padding: 0;
  width: 100%; height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: #00f;
  color: #f00;
}

.main-content {
  transition: opacity 0.2s;
}

.main-content.modal-showing {
  opacity: 0.5;
}

.simple-fade-enter-active, .simple-fade-leave-active {
  transition: opacity 0.2s
}
.simple-fade-enter, .simple-fade-leave-to {
  opacity: 0
}
</style>
