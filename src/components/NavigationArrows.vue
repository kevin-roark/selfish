<template>
<div class="navigation-container">
  <div v-if="hasPast" class="nav-arrow nav-arrow-left" @click="navigate(-1)">
    <span class="nav-arrow-text">PAST</span>
  </div>
  <div v-if="hasFuture" class="nav-arrow nav-arrow-right" @click="navigate(1)">
    <span class="nav-arrow-text">FUTURE</span>
  </div>
</div>
</template>

<script>
import { getContentIndex, getContentCount } from '../util/content';

export default {
  props: ['content'],
  computed: {
    contentIndex() {
      return getContentIndex(this.content);
    },
    hasPast() {
      return this.contentIndex > 0;
    },
    hasFuture() {
      return this.contentIndex < getContentCount() - 1;
    },
  },
  methods: {
    navigate(delta) {
      this.$emit('navigate', delta);
    },
  },
};
</script>

<style scoped>
.navigation-container {
  user-select: none;
  width: 800px;
  text-align: center;
}

.nav-arrow {
  display: inline-block;
  cursor: pointer;
  margin: 0 20px;
  padding: 5px 80px;
  font-family: 'Crimson Text';
  font-size: 32px;
  text-align: center;
  letter-spacing: 1px;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 2px 0 rgba(0, 0, 0, 0.5);
  transition: background 0.25s;
}

.nav-arrow-left {
  transform: scaleX(-1);
  text-shadow: -1px 1px 2px #00f, -2px 2px 6px #00f;
  background: url('../assets/site-images/blue_waterfall.jpg') 100%;
}

.nav-arrow-right {
  text-shadow: -1px 1px 2px #f00, -2px 2px 6px #f00;
  background: url('../assets/site-images/red_fire.jpg') 100%;
}

.nav-arrow-text {
  display: inline-block;
  transform: scale(1.5, 1);
  transition: transform 0.25s;
}

  .no-touch .nav-arrow:hover {
    transform: scaleX(-1);
  }

  .no-touch .nav-arrow:hover .nav-arrow-text {
    transform: scale(-1.5, 1);
  }

  .no-touch .nav-arrow-left:hover {
    background: url('../assets/site-images/red_fire.jpg') 100%;
  }

  .no-touch .nav-arrow-right:hover {
    background: url('../assets/site-images/blue_waterfall.jpg') 100%;
  }

@media (max-width: 800px) {
  .navigation-container {
    width: auto;
  }

  .nav-arrow {
    margin: 0 5px;
    padding: 0 10px;
    font-size: 12px;
    box-shadow: 0 5px 2px 0 rgba(0, 0, 0, 0.5);
  }

  .nav-arrow-left {
    margin-bottom: 10px;
  }

  .nav-arrow-text {
    transform: scale(1.2, 1);
  }
}
</style>
