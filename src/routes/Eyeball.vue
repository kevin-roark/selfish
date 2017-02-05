<template>
  <div class="eyeball-container">
    <ol class="eyeball-list">
      <li v-for="item in content">
        <router-link :to="`/detail/${item.slug}`">
          {{ item.title }} — <span class="date">{{ item.date }}</span>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
import content from '../data/content.json';

export default {
  data: () => ({ content }),
};
</script>

<style scoped>
.eyeball-container {
  box-sizing: border-box;
  margin: 60px auto;
  width: 600px;
}

.eyeball-list {
  padding: 20px;
  list-style: decimal;
  background: #fff;
  color: #181818;
}

.eyeball-list li {
  font-family: 'Crimson Text', 'Times New Roman', Times, serif;
  font-size: 15px;
  line-height: 1.5;
  margin-bottom: 5px;
  margin-left: 15px;
}

.date {
  font-size: 12px;
  color: #333;
  font-family: 'Crimson Text', 'Times New Roman', Times, serif;
}

a {
  color: inherit;
  text-decoration: none;
  padding-left: 5px;
}

.no-touch a:hover {
  text-decoration: underline;
}

.touch a {
  text-decoration: underline;
}

@media (max-width: 800px) {
  .eyeball-container {
    position: fixed;
    left: 0; top: 0;
    bottom: 100px; right: 0;
    margin: 0;
    width: auto;
    overflow: auto;
  }
}
</style>
