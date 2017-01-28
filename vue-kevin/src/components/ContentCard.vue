<template>
  <div class="card" :style="cardStyle" @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <h2 class="card-title" :class="{ 'no-image': !imageURL }">{{ title }}</h2>
    <img v-if="imageURL" class="card-image" :src="imageURL" :alt="`${title} Image`" />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imageURL: String,
    isCardHovering: Boolean,
  },
  data: () => ({
    hovering: false,
  }),
  computed: {
    cardStyle() {
      let opacity = 1;
      if (this.weight < 1) {
        opacity = this.weight * 0.8;
      } else if (this.weight < 2) {
        opacity = ((2 - this.weight) * 0.2) + 0.8;
      }
      return {
        opacity,
        mixBlendMode: (this.isCardHovering && !this.hovering) ? 'difference' : 'normal',
      };
    },
  },
  methods: {
    setHover(hovering) {
      this.hovering = hovering;
      this.$emit('hoverChange', { imageURL: this.imageURL, hovering });
    },
  },
};
</script>

<style scoped>
.card {
  box-sizing: border-box;
  width: 120px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  background-color: #000;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
  transition: box-shadow 0.2s, transform 0.2s;
}

  .no-touch .card:hover {
    box-shadow: -5px 5px 1px 0 #232323, -10px 10px 1px 0 #444444, -15px 15px 1px 0 #636363, -20px 20px 1px 0 #959595;
    transform: scale(1.5);
  }

.card-title {
  margin: 0; padding: 0;
  font-family: Menlo, Monaco, monospace;
  font-size: 11px;
  line-height: 1.4;
  font-weight: normal;
  color: #FFF;
  text-shadow: 0.25px 1px 1px rgba(0,0,0,0.30);
}
  .card-title.no-image {
    font-size: 16px;
  }

.card-image {
  width: 98px;
  margin-top: 8px;
  border: 1px solid #FFFFFF;
  box-shadow: 0 0 3px 0 rgba(255,255,255,0.50);
}

@media (max-width: 800px) {
  .card {
    width: 104px;
    padding: 8px;
  }

  .card-title {
    font-size: 9px;
  }

  .card-image {
    width: 72px;
  }
}
</style>
