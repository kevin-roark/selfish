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
  top: 20px; left: 60px;
  margin: 0; padding: 0;
  font-family: 'Crimson Text', 'Inconsolata', Menlo, Monaco, monospace;
  font-weight: 600;
  font-size: 64px;
  z-index: 10;
  color: #1f1f1f;
  transition: all 0.2s;
}

.image-bg .title {
  color: #000;
}

.image-bg .title-title {
  /*color: #00f;*/
  /*background: #fff;*/
}

.title-mirror {
  display: inline-block;
  transform: scale(-1, -1) translateY(-100%);
  position: absolute;
  top: 0; left: 0;
  /*color: #f00;*/
  /*background: #000;*/
  opacity: 0;
  transition: inherit;
}
  .image-bg .title-mirror {
    opacity: 1;
  }

@media (max-width: 1200px) {
  .title {
    font-size: 50px;
  }
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
