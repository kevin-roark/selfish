<template>
  <div class="modal-container">
    <color-bars :opacity="colorBarOpacity" :style="{ zIndex: -1 }" />

    <template v-for="i in 4">
      <x-icon :class="['x-icon', `x-icon-${i}`]" :color="xColor" @click.native="close" />
    </template>

    <slot></slot>
  </div>
</template>

<script>
import XIcon from './x-icon';
import ColorBars from './ColorBars';
import KeyUp from '../mixins/keyup';

export default {
  components: {
    XIcon,
    ColorBars,
  },
  props: {
    mode: { type: String, default: 'default' },
    active: { type: Boolean, default: false },
  },
  mixins: [KeyUp],
  computed: {
    colorBarOpacity() {
      switch (this.mode) {
        case 'detail': return 0.75;
        default: return 0.9;
      }
    },
    xColor() {
      switch (this.mode) {
        case 'detail': return '#E9E9E9';
        default: return '#000';
      }
    },
  },
  methods: {
    keyup(ev) {
      if (ev.keyCode === 27) {
        this.close();
      }
    },
    close() {
      if (this.active) {
        this.$router.go(-1);
      }
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

.x-icon {
  position: fixed;
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

  .no-touch .x-icon-1:hover {
    box-shadow: 5px 5px 1px 0 #232323, 10px 10px 1px 0 #444444, 15px 15px 1px 0 #636363, 20px 20px 1px 0 #959595;
  }
  .no-touch .x-icon-2:hover {
    box-shadow: -5px 5px 1px 0 #232323, -10px 10px 1px 0 #444444, -15px 15px 1px 0 #636363, -20px 20px 1px 0 #959595;
  }
</style>
