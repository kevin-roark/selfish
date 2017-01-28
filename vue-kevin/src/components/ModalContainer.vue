<template>
  <div class="modal-container">
    <div class="color-bar color-bar-red" />
    <div class="color-bar color-bar-blue" />

    <template v-for="i in 4">
      <x-icon :class="['x-icon', `x-icon-${i + 1}`]" @click.native="close" />
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
  mounted() {
    window.addEventListener('keyup', this.keyup);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyup);
  },
  methods: {
    keyup(ev) {
      if (ev.keyCode === 27) {
        this.close();
      }
    },
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
  overflow: auto;
}

.color-bar {
  position: fixed;
  left: 0; width: 100%;
  height: 50%;
  mix-blend-mode: overlay;
  opacity: 0.9;
  z-index: -1;
}
.color-bar-red {
  background: #f00;
  top: 0;
}
.color-bar-blue {
  background: #00f;
  top: 50%;
}

.x-icon {
  position: fixed;
  width: 50px; height: 50px;
  cursor: pointer;
  transition: box-shadow 0.2s, background 0.2s;
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

  .no-touch .x-icon:hover {
    background: #f00;
    box-shadow: -5px 5px 1px 0 #232323, -10px 10px 1px 0 #444444, -15px 15px 1px 0 #636363, -20px 20px 1px 0 #959595;
  }

</style>
