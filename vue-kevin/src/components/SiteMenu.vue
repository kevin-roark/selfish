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
  bottom: 10px; right: 10px;
  text-align: right;
}

li {
  font-family: Menlo, Monaco, monospace;
  font-size: 16px;
  line-height: 2;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (max-width: 800px) {
  ul {
    bottom: auto; top: 10px;
  }
  li {
    font-size: 11px;
  }
}
</style>
