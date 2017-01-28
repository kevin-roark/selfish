<template>
  <div>
    <ul>
      <li v-for="link in links">
        <a :href="link.link" @mouseenter="setHovering(link)" @mouseleave="setHovering(null)">
          {{ link.title }}
        </a>
      </li>
    </ul>
    <div v-if="hoveringLink" class="tip">{{ hoveringLink.text }}</div>
  </div>
</template>

<script>
import links from '../data/links.json';

export default {
  data: () => ({ links, hoveringLink: null }),
  methods: {
    setHovering(link) {
      this.hoveringLink = link;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0; padding: 100px;
  font-family: Menlo, Monaco, monospace;
  font-weight: normal;
  font-size: 72px;
  line-height: 1.8;
}

a {
  color: #000;
}

.tip {
  position: fixed;
  top: 10px; left: 120px;
  max-width: 680px;
  color: #ff0;
  text-shadow: 0 2px 1px #000;
  font-family: Helvetica, sans-serif;
  font-size: 42px;
  z-index: 1;
}
</style>
