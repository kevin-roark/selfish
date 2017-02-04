<template>
  <div class="color-bars" :style="style">
    <div class="color-bar red" />
    <div class="color-bar blue" />
  </div>
</template>

<script>
export default {
  props: {
    opacity: { type: Number, default: 1.0 },
  },
  computed: {
    style() {
      return {
        opacity: this.opacity,
      };
    },
  },
};
</script>

<style scoped>
.color-bars {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  mix-blend-mode: overlay;
}

.color-bar {
  position: fixed;
  left: 0; width: 100%;
  height: 50%;
}

.color-bar.red {
  background: #f00;
  top: 0;
}

.color-bar.blue {
  background: #00f;
  top: 50%;
}
</style>
