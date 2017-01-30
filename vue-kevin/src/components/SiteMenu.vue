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
        { name: 'INFO', path: '/info' },
        { name: 'CONTACT', path: '/contact' },
        { name: 'ESSAYS', path: '/essays' },
        { name: 'LINKS', path: '/links' },
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
}

li {
  font-family: 'Inconsolata', Menlo, Monaco, monospace;
  font-size: 22px;
  letter-spacing: 2px;
  line-height: 2;
  text-shadow: -0.5px 1px 1px rgba(0, 0, 0, 0.2), 0.5px 2px 0 #fff;
}

a {
  display: block;
  color: inherit;
  text-decoration: none;
  transform-origin: 100% 50%;
  transition: transform 0.2s;
}
  .no-touch a:hover {
    transform: scale(8, 1.5);
  }

@media (max-width: 800px) {
  ul {
    bottom: auto; top: 0; right: 8px;
  }
  li {
    font-size: 15px;
    line-height: 1.8;
  }
  a:hover {}
}
</style>
