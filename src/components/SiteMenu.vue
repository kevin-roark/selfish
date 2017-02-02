<template>
  <ul>
    <li v-for="item in items">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'site-menu',
    data: () => ({
      items: [
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
  bottom: 0; right: 10px;
  text-align: right;
  z-index: 10;
  transition: all 0.2s;
  mix-blend-mode: difference;
}

li {
  font-family: 'Inconsolata', Menlo, Monaco, monospace;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 1px;
  line-height: 1.8;
}

a {
  display: block;
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

@media (max-width: 800px) {
  ul {
    bottom: auto; top: 0; right: 8px;
  }
  li {
    font-size: 18px;
  }
}
</style>
