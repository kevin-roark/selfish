
export default {
  mounted() {
    this.onResize = this.onResize.bind(this);
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {

    },
  },
};
