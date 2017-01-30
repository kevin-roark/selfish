<template>
  <h1 class="title" :class="{ 'image-bg': imageBackground }">
    <span class="title-mirror">Kevin Roark Jr</span>
    <span class="title-title">Kevin Roark Jr</span>
  </h1>
</template>

<script>
export default {
  props: {
    imageBackground: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.title {
  position: fixed;
  top: 20px; left: 44px;
  font-family: 'Inconsolata', Menlo, Monaco, monospace;
  font-weight: normal;
  font-size: 40px;
  z-index: 10;
  background: #fff;
  color: #1f1f1f;
  transition: color 0.1s, text-shadow 0.1s;
}

.image-bg .title-title {
  color: #000;
  text-shadow: 0 1px 0 #000;
}

.title-mirror {
  display: inline-block;
  transform: scale(1, -1);
  position: absolute;
  top: -32px; left: 0;
  color: #eee;
  opacity: 0;
  transition: opacity 0.2s;
  text-shadow: 0 2px 2px #fff;
}
  .image-bg .title-mirror {
    opacity: 1;
  }

@media (max-width: 800px) {
  .title {
    top: 5px; left: 20px;
    font-size: 26px;
  }

  .title-mirror {
    top: -22px;
  }
}
</style>
