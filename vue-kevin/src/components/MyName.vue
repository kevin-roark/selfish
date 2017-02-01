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
  top: 15px; left: 48px;
  font-family: 'Inconsolata', Menlo, Monaco, monospace;
  font-weight: normal;
  font-size: 40px;
  z-index: 10;
  background: #fff;
  color: #1f1f1f;
  transition: all 0.2s;
}

.image-bg .title-title {
  color: #00f;
  transition: inherit;
}

.title-mirror {
  display: inline-block;
  transform: scale(-1, -1) translateY(100%);
  position: absolute;
  top: 0; left: 0;
  color: #f00;
  background: #000;
  opacity: 0;
  transition: inherit;
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
