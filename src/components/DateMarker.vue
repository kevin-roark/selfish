<template>
<div class="date-marker">
  {{ year }}
</div>
</template>

<script>
import { yearFromDate } from '../util/date';

export default {
  props: {
    date: { type: String, required: true },
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
  margin: 0 200px 100px 120px;
  align-self: center;
  font-family: 'Work Sans';
  font-size: 200px;
  transform: scale(1.5, 4);
  background: #000;
  color: #fff;
  mix-blend-mode: difference;
}

@media (max-width: 800px) {
  .date-marker {
    margin: 140px 20px;
    font-size: 100px;
    transform: scale(1.5, 3);
  }
}
</style>
