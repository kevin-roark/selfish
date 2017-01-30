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
  top: 40px; left: 44px;
  font-family: Menlo, Monaco, monospace;
  font-weight: normal;
  font-size: 28px;
  z-index: 10;
  color: #1f1f1f;
  text-shadow: 0 2px 2px #fff;
  transition: color 0.1s, text-shadow 0.1s;
}

.image-bg .title-title {
  color: #5e5e5e;
  mix-blend-mode: color-burn;
  text-shadow: 0 2px 2px #222;
}

.title-mirror {
  display: inline-block;
  transform: scale(1, -1);
  position: absolute;
  top: -32px; left: 0;
  color: #eee;
  opacity: 0;
  transition: opacity 0.2s;
  mix-blend-mode: normal;
}
  .image-bg .title-mirror {
    opacity: 1;
  }

@media (max-width: 800px) {
  .title {
    top: 10px; left: 10px;
    font-size: 18px;
  }

  .title-mirror {
    top: -22px;
  }
}
</style>
