<template>
  <router-link class="card-wrapper" :to="url">
    <div class="card" :style="cardStyle" @mouseenter="setHover(true)" @mouseleave="setHover(false)">
      <h2 class="card-title" :class="{ 'no-image': !imageURL, 'long': title.length >= 30 }">{{ title }}</h2>
      <img v-if="imageURL" class="card-image" :src="imageURL" :alt="`${title} Image`" />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    imageURL: String,
    isCardHovering: Boolean,
    weight: { type: Number, default: 1 },
    slug: String,
  },
  data: () => ({
    hovering: false,
  }),
  computed: {
    cardStyle() {
      let bgOpacity = 1;
      if (this.weight < 1) {
        bgOpacity = this.weight * 0.75;
      } else if (this.weight < 2) {
        bgOpacity = ((this.weight - 1) * 0.25) + 0.8;
      }
      const black = Math.round((1 - bgOpacity) * 255);

      const scale = this.weight > 1 ? Math.min(2, this.weight) : Math.max(1, 1.2 * this.weight);

      return {
        backgroundColor: `rgb(${black}, ${black}, ${black})`,
        mixBlendMode: (this.isCardHovering && !this.hovering) ? 'difference' : 'inherit',
        transform: `scale(${scale}, ${scale})`,
      };
    },
    url() {
      return `/detail/${this.slug}`;
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
.card-wrapper {
  display: block;
  color: inherit; text-decoration: none;
  transition: all 0.3s;
}

.card {
  box-sizing: border-box;
  min-width: 120px; max-width: 200px;
  padding: 8px 10px 10px 10px;
  cursor: pointer;
  text-align: center;
  background-color: #000;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
  transition: box-shadow 0.2s, transform 0.2s;
  transform-origin: 0% 50%;
}

  .no-touch .card-wrapper:hover {
    transform: scale(1.25);
    z-index: 10;
  }
  .no-touch .card-wrapper:hover .card {
    box-shadow: -5px 5px 1px 0 #232323, -10px 10px 1px 0 #444444, -15px 15px 1px 0 #636363, -20px 20px 1px 0 #959595;
  }

.card-title {
  margin: 0; padding: 0;
  font-family: 'Inconsolata', Menlo, Monaco, monospace;
  font-size: 14px;
  line-height: 1.4;
  font-weight: normal;
  color: #FFF;
  text-shadow: 0.25px 1px 1px rgba(0,0,0,0.30);
}
  .card-title.long {
    font-size: 12px;
  }
  .card-title.no-image, .card-title.long.no-image {
    font-size: 18px;
  }

.card-image {
  width: 98px;
  margin-top: 8px;
  /*border: 1px solid #FFFFFF;*/
  box-shadow: 0 0 3px 0.5px rgba(255,255,255,1);
  /*box-shadow: -2px 4px 0 0 #fff;*/
}

@media (max-width: 800px) {
  .card {
    width: 104px;
    padding: 8px;
  }

  .card-title.no-image {
    font-size: 15px;
  }

  .card-image {
    width: 72px;
  }
}
</style>
