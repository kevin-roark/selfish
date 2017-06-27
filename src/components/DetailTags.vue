<template>
  <ul>
    <li><span class="tag date">{{ date }}</span></li>
    <li v-for="tag in tags">
      <span class="tag" :style="tagStyle(tag)">{{ tag }}</span>
    </li>
  </ul>
</template>

<script>
import tagStyle from '../util/tag-style';

export default {
  props: {
    tags: Array,
    date: String,
  },
  methods: {
    tagStyle(tag) {
      if (!tag) return null;
      return tagStyle(tag, 'background');
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0; padding: 0;
  text-align: right;
}

li {
  margin: 0 0 10px 0;
  padding: 0;
  font-family: 'Inconsolata', 'Work Sans', "SF UI", sans-serif;
  font-size: 16px;
  font-weight: 600;
}

.date {
  color: #000;
  background: #f0f0f0;
}

.tag {
  padding: 2px;
}

@media (max-width: 800px) {
  ul {
    text-align: left;
    margin-left: -5px;
    margin-bottom: -10px;
  }

  li {
    font-size: 14px;
    display: inline-block;
    margin: 0 0 10px 10px;
  }
}

</style>
