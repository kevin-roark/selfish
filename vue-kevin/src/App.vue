<template>
  <div id="app">
    <my-name></my-name>
    <site-menu></site-menu>
  </div>
</template>

<script>
import MyName from './components/MyName';
import SiteMenu from './components/SiteMenu';

export default {
  name: 'app',
  components: {
    MyName,
    SiteMenu,
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
</style>
