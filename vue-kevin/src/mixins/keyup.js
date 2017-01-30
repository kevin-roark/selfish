
export default {
  mounted() {
    this.keyup = this.keyup.bind(this);
    window.addEventListener('keyup', this.keyup);
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.keyup);
  },
  methods: {
    keyup() {

    },
  },
};
