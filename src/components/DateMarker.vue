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
  font-size: 200px;
  margin-top: 100px;
}
</style>
