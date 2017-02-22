<template>
<div class="navigation-container">
  <div class="nav-arrow nav-arrow-left" @click="navigate(-1)">
    <span class="nav-arrow-text">PAST</span>
  </div>
  <div class="nav-arrow nav-arrow-right" @click="navigate(1)">
    <span class="nav-arrow-text">FUTURE</span>
  </div>
</div>
</template>

<script>
export default {
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
  background: url('../assets/site-images/blue_waterfall.jpg') 100%;
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
}

.nav-arrow-right {
  text-shadow: -1px 1px 2px #f00, -2px 2px 6px #f00;
}

.nav-arrow-text {
  display: inline-block;
  transform: scale(1.5, 1);
  transition: transform 0.25s;
}

  .no-touch .nav-arrow:hover {
    background: url('../assets/site-images/red_fire.jpg') 100%;
    transform: scaleX(-1);
  }

  .no-touch .nav-arrow:hover .nav-arrow-text {
    transform: scale(-1.5, 1);
  }

@media (max-width: 800px) {
  .navigation-container {
    width: auto;
  }

  .nav-arrow {
    margin: 0 5px;
    padding: 0 30px;
    font-size: 18px;
    box-shadow: 0 5px 2px 0 rgba(0, 0, 0, 0.5);
  }

  .nav-arrow-left {
    margin-bottom: 10px;
  }
}
</style>
