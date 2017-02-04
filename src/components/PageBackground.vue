<template>
  <img v-if="src" class="background-image" :src="src" alt="" />
  <span v-else />
</template>

<script>
export default {
  props: {
    src: String,
  },
};
</script>

<style scoped>
.background-image {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-color: #ccc;
  mix-blend-mode: multiply;
}
</style>
