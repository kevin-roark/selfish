<template>
  <div class="modal-container">
    <template v-for="i in 4">
      <x-icon :class="['x-icon', `x-icon-${i + 1}`]" @click="close" />
    </template>
    <slot></slot>
  </div>
</template>

<script>
import XIcon from './x-icon';

export default {
  components: {
    XIcon,
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
}

.x-icon {
  position: fixed;
  width: 50px; height: 50px;
  cursor: pointer;
}
.x-icon-1 {
  top: 0; left: 0;
}
.x-icon-2 {
  top: 0; right: 0;
}
.x-icon-3 {
  bottom: 0; left: 0;
}
.x-icon-4 {
  bottom: 0; right: 0;
}

</style>
