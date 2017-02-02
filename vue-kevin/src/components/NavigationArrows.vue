<template>
<div class="navigation-container">
  <nav-arrow class="nav-arrow nav-arrow-left" color="#fff" @click.native="navigate(-1)" />
  <nav-arrow class="nav-arrow nav-arrow-right" color="#fff" @click.native="navigate(1)" />
</div>
</template>

<script>
import NavArrow from './nav-arrow';

export default {
  components: { NavArrow },
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
}

.nav-arrow {
  width: 200px;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  margin: 0 20px;
  transition: all 0.25s;
}

.nav-arrow-left {
  transform: scaleX(-1);
}

  .no-touch .nav-arrow:hover {
    background: #000;
    box-shadow: 10px 0 1px 0 #232323, 20px 0 1px 0 #444444, 30px 0 1px 0 #636363, 40px 0 1px 0 #959595, 50px 0 1px 0 #cccccc, 60px 0 1px 0 #fff;
  }

@media (max-width: 800px) {
  .nav-arrow {
    display: block;
    width: 80px;
    margin: 0;
  }

  .nav-arrow-left {
    margin-bottom: 10px;
  }
}
</style>
