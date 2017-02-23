<template>
  <ul>
    <li v-for="item in items">
      <router-link :to="item.path">
        <img v-if="item.icon" :src="item.icon" alt="" />
        <span v-else>{{ item.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
  const eyeballIcon = require('../assets/site-images/eyeball.png');

  export default {
    name: 'site-menu',
    data: () => ({
      items: [
        { icon: eyeballIcon, path: '/eyeball' },
        { name: 'Info', path: '/info' },
        { name: 'Contact', path: '/contact' },
        // { name: 'Essays', path: '/essays' },
        { name: 'Links', path: '/links' },
      ],
    }),
  };
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0; padding: 0;
  position: fixed;
  bottom: 0; right: 0;
  text-align: right;
  z-index: 10;
  transition: all 0.2s;
  mix-blend-mode: difference;
  background: #000;
}

li {
  display: block;
  font-family: 'Inconsolata', Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 1px;
  line-height: 1.7;
  padding: 0 10px;
}

a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  transform-origin: 100% 50%;
  transition: transform 0.2s;
  background: #000;
  color: #fff;
}
  .no-touch a:hover {
    transform: scale(6.66, 1.5) skewX(15deg);
  }

img {
  margin-bottom: -8px;
  width: 32px;
}

@media (max-width: 800px) {
  ul {
    bottom: auto; top: 0;
  }
  li {
    font-size: 18px;
    padding: 0 8px;
  }
  img {
    width: 24px;
  }
}
</style>
