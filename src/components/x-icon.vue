<template>
  <svg width="48px" height="59px" viewBox="6 0 48 59" version="1.1">
      <g id="THICK-X" stroke="none" fill="none" transform="translate(13.000000, 7.000000)" stroke-linecap="square" stroke-width="1" fill-rule="evenodd">
          <g id="CLOSE" :stroke="color">
              <path d="M0.5,0.5 L33.5,44.5" id="Line" stroke-width="10"></path>
              <path d="M0.5,0.5 L33.5,44.5" id="Line" stroke-width="10" transform="translate(17.000000, 22.500000) scale(1, -1) translate(-17.000000, -22.500000) "></path>
          </g>
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
