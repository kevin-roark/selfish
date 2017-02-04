<template>
  <div id="app" :class="appClass">
    <ThreeDee />

    <div class="main-content" :class="contentClass">
      <my-name :imageBackground="!!backgroundImageURL"></my-name>

      <site-menu :style="menuStyle" />

      <site-content
        :content="content"
        :tags="currentTags"
        :bgImage="backgroundImageURL"
        @cardHover="handleCardHover"
      />

      <content-tags
        :tags="allTags"
        :currentTags="currentTags"
        :style="tagsStyle"
        @tagClick="tagClick"
      />
    </div>

    <modal-container v-if="modalRoute" :mode="modalMode" :active="!!modalRoute">
      <router-view></router-view>
    </modal-container>
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
import { allTags, contentFromSlug } from './util/content';
import { getImageURL } from './util/images';
import { tagsFromRoute } from './util/tags-route';

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
  data: () => ({
    touch: true,
    hoveringImageURL: null,
    detailImageURL: null,
    content,
  }),
  mounted() {
    if (!isTouchDevice()) {
      this.touch = false;
    }
    this.setDetailImageURL(this.$route);
  },
  watch: {
    $route(rt) {
      this.setDetailImageURL(rt);
    },
  },
  methods: {
    setDetailImageURL(rt) {
      if (rt.path.indexOf('detail') >= 0) {
        const item = contentFromSlug(rt.params.slug);
        if (item && item.images) {
          this.detailImageURL = getImageURL(item.images[0]);
          console.log(this.detailImageURL);
        }
      } else {
        this.detailImageURL = null;
      }
    },
    handleCardHover({ hovering, imageURL }) {
      this.hoveringImageURL = hovering ? imageURL : null;
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
    backgroundImageURL() {
      return this.detailImageURL || this.hoveringImageURL;
    },
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
    menuStyle() {
      return {
        opacity: this.backgroundImageURL && !this.modalShowing ? 0 : 1,
      };
    },
    tagsStyle() {
      return { opacity: this.backgroundImageURL && !this.modalShowing ? 0 : 1 };
    },
    allTags() {
      return allTags();
    },
    currentTags() {
      return tagsFromRoute(this.$route);
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
  /*opacity: 0.5;*/
}

.simple-fade-enter-active, .simple-fade-leave-active {
  transition: opacity 0.2s
}
.simple-fade-enter, .simple-fade-leave-to {
  opacity: 0
}

svg {
  overflow: visible;
}
</style>