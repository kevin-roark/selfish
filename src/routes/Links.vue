<template>
  <div>
    <ul>
      <li v-for="link in links">
        <a target="_blank" :href="link.link" @mouseenter="setHovering(link)" @mouseleave="setHovering(null)">
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
  word-wrap: break-word;
  list-style: none;
  margin: 0; padding: 50px 20px;
  font-family: 'Crimson Text', 'Times New Roman', Times, serif;
  font-weight: 400;
  font-size: 72px;
  line-height: 1.5;
  text-align: center;
}

ul li {
  margin: 40px 0;
}

a {
  color: #000;
  text-decoration: underline;
  transition: color 0.1s;
}

.no-touch a:hover {
  color: #ddd;
}

.tip {
  position: fixed;
  top: 40%; left: 20px;
  max-width: 680px;
  color: #ff0;
  text-shadow: 0 2px 1px #000;
  font-family: 'Inconsolata', Menlo, Monaco, monospace;
  font-size: 42px;
  z-index: -1;
}


@media (max-width: 800px) {
  ul {
    font-size: 50px;
  }
}
</style>
