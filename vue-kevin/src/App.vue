<template>
  <div id="app" :class="appClass">
    <ThreeDee />

    <div class="main-content" :class="contentClass">
      <my-name></my-name>
      <site-menu></site-menu>
      <site-content :content="content"></site-content>
    </div>

    <transition name="simple-fade">
      <modal-container v-if="modalRoute" :mode="modalMode">
        <router-view></router-view>
      </modal-container>
    </transition>
  </div>
</template>

<script>
import ThreeDee from './components/ThreeDee';
import ModalContainer from './components/ModalContainer';
import MyName from './components/MyName';
import SiteMenu from './components/SiteMenu';
import SiteContent from './components/SiteContent';
import content from './data/content.json';

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
    ModalContainer,
    ThreeDee,
  },
  data: () => ({ touch: true, content }),
  mounted() {
    if (!isTouchDevice()) {
      this.touch = false;
    }
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
        'modal-showing': this.modalRoute,
      };
    },
    modalRoute() {
      return this.$route.path.length > 1; // only "/" will return false
    },
    modalMode() {
      return this.$route.path.indexOf('detail') >= 0 ? 'detail' : 'default';
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
