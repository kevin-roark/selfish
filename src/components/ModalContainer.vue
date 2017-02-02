<template>
  <div v-if="routeHasContainer" class="modal-container">
    <color-bars :opacity="colorBarOpacity" :style="{ zIndex: -1 }" />

    <template v-for="i in 4">
      <x-icon :class="['x-icon', `x-icon-${i}`]" :color="xColor" @click.native="close" />
    </template>

    <slot></slot>
  </div>
  <span v-else></span>
</template>

<script>
import XIcon from './x-icon';
import ColorBars from './ColorBars';
import KeyUp from '../mixins/keyup';
import { routeHasTags, tagsFromRoute } from '../util/tags-route';

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
    routeHasContainer() {
      switch (this.mode) {
        case 'tagged': return false;
        default: return true;
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
        if (routeHasTags(this.$route)) {
          const tags = tagsFromRoute(this.$route);
          this.$router.push(`/tagged/${tags.join(',')}`);
        } else {
          this.$router.push('/');
        }
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
  transition: all 0.25s;
  border-radius: 40px;
  padding: 10px 15px;
  margin: 4px;
}
.x-icon-1 {
  top: 0; left: 0;
}
.x-icon-2 {
  top: 0; right: 0;
  transform: scaleX(-1);
}
.x-icon-3 {
  bottom: 0; left: 0;
  transform: scaleY(-1);
}
.x-icon-4 {
  bottom: 0; right: 0;
  transform: scale(-1, -1);
}

  .no-touch .x-icon:hover {
    background: #000;
    box-shadow: 5px 5px 1px 0 #232323, 10px 10px 1px 0 #444444, 15px 15px 1px 0 #636363, 20px 20px 1px 0 #959595, 25px 25px 1px 0 #cccccc, 30px 30px 1px 0 #fff;
  }
</style>
