<template>
  <svg width="59px" height="59px" viewBox="1 1 59 59" version="1.1">
      <g id="CLOSE" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(8.000000, 8.000000)" stroke-linecap="square">
          <path d="M0.661764706,0.5 L44.3382353,44.5" id="Line" :stroke="color" stroke-width="10"></path>
          <path d="M0.661764706,0.5 L44.3382353,44.5" id="Line" :stroke="color" stroke-width="10" transform="translate(22.500000, 22.500000) scale(1, -1) translate(-22.500000, -22.500000) "></path>
      </g>
  </svg>
</template>

<script>
export default {
  props: {
    color: { type: String, default: '#000' },
  },
};
</script>
