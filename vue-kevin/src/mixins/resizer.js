
export default {
  mounted() {
    window.addEventListener('resize', this.onResize.bind(this));
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  },
  methods: {
    onResize() {

    },
  },
};
