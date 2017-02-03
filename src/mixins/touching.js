
export default {
  data: () => ({
    touchingDown: false,
  }),
  mounted() {
    ['update', 'mousedown', 'move', 'touchmove', 'mouseup'].forEach((fn) => {
      this[fn] = this[fn].bind(this);
    });

    window.addEventListener('mousedown', this.mousedown);
    window.addEventListener('touchdown', this.mousedown);
    window.addEventListener('mousemove', this.move);
    window.addEventListener('touchmove', this.touchmove);
    window.addEventListener('mouseup', this.mouseup);
    window.addEventListener('touchup', this.mouseup);
  },
  beforeDestroy() {
    window.removeEventListener('mousedown', this.mousedown);
    window.removeEventListener('touchdown', this.mousedown);
    window.removeEventListener('mousemove', this.move);
    window.removeEventListener('touchmove', this.touchmove);
    window.removeEventListener('mouseup', this.mouseup);
    window.removeEventListener('touchup', this.mouseup);
  },
  methods: {
    mousedown() {
      this.touchingDown = true;
    },
    mouseup() {
      this.touchingDown = false;
    },
    move() {

    },
    touchmove(ev) {
      this.move(ev.touches[0]);
    },
  },
};
