<template>
  <div id="app">
    <div class="main-content" :class="{ 'modal-showing': modalRoute }">
      <my-name></my-name>
      <site-menu></site-menu>
    </div>

    <modal-container v-if="modalRoute">
      <router-view></router-view>
    </modal-container>
  </div>
</template>

<script>
import ModalContainer from './components/ModalContainer';
import MyName from './components/MyName';
import SiteMenu from './components/SiteMenu';

export default {
  name: 'app',
  components: {
    MyName,
    SiteMenu,
    ModalContainer,
  },
  computed: {
    modalRoute() {
      return this.$route.path.length > 1; // only "/" will return false
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

.main-content.modal-showing {
  opacity: 0.5;
}
</style>
