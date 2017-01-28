<template>
  <svg @click="click" width="59px" height="59px" viewBox="0 0 59 59" version="1.1">
      <defs></defs>
      <g id="Symbols" stroke="#000000" stroke-width="10" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <g id="CLOSE">
            <path d="M0.661764706,0.5 L44.3382353,44.5" id="Line"></path>
            <path d="M0.661764706,0.5 L44.3382353,44.5" id="Line" transform="translate(22.500000, 22.500000) scale(1, -1) translate(-22.500000, -22.500000) "></path>
        </g>
      </g>
  </svg>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
