<template>
<div class="date-marker" :class="{ explosion }">
  {{ year }}
</div>
</template>

<script>
import { yearFromDate } from '../util/date';

export default {
  props: {
    date: { type: String, required: true },
    explosion: Boolean,
  },
  computed: {
    year() {
      return yearFromDate(this.date);
    },
  },
};
</script>

<style scoped>
.date-marker {
  margin: 200px 120px 140px 120px;
  align-self: center;
  font-family: 'Work Sans';
  font-size: 200px;
  transform: scale(1.5, 4);
  transform-origin: 0 50%;
  background: #000;
  color: #fff;
  mix-blend-mode: difference;
  user-select: none;
  width: 100vw;
}

.date-marker.explosion {
  width: 100px;
}

@media (max-width: 800px) {
  .date-marker {
    margin: 140px 20px;
    font-size: 100px;
    transform: scale(1.5, 3);
  }
}
</style>
