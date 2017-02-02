<template>
  <svg viewBox="2541 166 161 39">
      <g id="Group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(2545.000000, 166.000000)">
          <path d="M0.5,20 L131.5,20" id="Line" :stroke="color" stroke-width="8" stroke-linecap="square"></path>
          <polygon id="Star" :fill="color" points="137 25.75 120.892729 38.4075202 132.244717 22.1223392 116.65949 10.4910226 134.061074 16.2526608 137 0 139.938926 16.2526608 156.508039 6.67606313 141.755283 22.1223392 156.508039 38.4075202"></polygon>
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
