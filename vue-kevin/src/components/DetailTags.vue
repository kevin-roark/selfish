<template>
  <ul>
    <li v-for="tag in allTags">
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
  computed: {
    allTags() {
      return [this.date].concat(this.tags);
    },
  },
  methods: {
    tagStyle(tag) {
      if (!tag) return null;
      return tagStyle(tag);
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
  margin: 0 0 2px 0;
  padding: 0;
  font-family: "SF UI", sans-serif;
  font-size: 11px;
  font-weight: 600;
  line-height: 20px;
}

</style>
