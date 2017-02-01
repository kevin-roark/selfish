<template>
  <div class="card-wrapper" @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <router-link v-if="url" :to="url" class="card" :style="cardStyle">
      <h2 class="card-title" :class="cardTitleStyle">{{ title }}</h2>
      <img v-if="imageURL" class="card-image" :src="imageURL" :alt="`${title} Image`" />
    </router-link>
    <div v-else class="card" :style="cardStyle">
      <h2 class="card-title" :class="cardTitleStyle">{{ title }}</h2>
      <img v-if="imageURL" class="card-image" :src="imageURL" :alt="`${title} Image`" />
    </div>
  </div>
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

      const scale = Math.min(1, Math.max(0.4, (this.weight / 1.75) * 1.333));

      return {
        backgroundColor: `rgb(${black}, ${black}, ${black})`,
        mixBlendMode: (this.isCardHovering && !this.hovering) ? 'difference' : 'inherit',
        transform: `scale(${scale}, ${scale})`,
      };
    },
    cardTitleStyle() {
      return {
        'no-image': !this.imageURL,
        long: this.title.length >= 30,
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
::selection {
  color: #f00;
  background: #000;
}

.card-wrapper {
  transition: all 0.25s;
  transform-origin: 0% 50%;
}

.card {
  display: block;
  color: inherit; text-decoration: none;
  box-sizing: border-box;
  min-width: 240px; max-width: 400px;
  padding: 8px 10px 10px 10px;
  cursor: pointer;
  text-align: center;
  background-color: #000;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
  transition: all 0.25s;
  transform-origin: 0% 50%;
}

  .no-touch .card-wrapper:hover {
    transform: scale(1.5);
    z-index: 10;
  }
  .no-touch .card-wrapper:hover .card {
    box-shadow: -5px 5px 1px 0 #232323, -10px 10px 1px 0 #444444, -15px 15px 1px 0 #636363, -20px 20px 1px 0 #959595;
  }

.card-title {
  margin: 0; padding: 0;
  font-family: 'Inconsolata', Menlo, Monaco, monospace;
  font-size: 24px;
  line-height: 1.4;
  font-weight: normal;
  color: #FFF;
  text-shadow: 0.25px 1px 1px rgba(0,0,0,0.30);
  letter-spacing: 0.5px;
}
  .card-title.long {
    font-size: 24px;
  }
  .card-title.no-image, .card-title.long.no-image {
    font-size: 48px;
  }

.card-image {
  display: block;
  width: calc(100% - 20px);
  margin: 14px 10px 8px 10px;
  border: 2px solid #ff0;
  /*border: 1px solid #FFFFFF;*/
  /*box-shadow: 0 0 3px 0.5px rgba(255,255,255,1);*/
  /*box-shadow: -2px 4px 0 0 #fff;*/
}

@media (max-width: 800px) {
  .card {
    min-width: none; max-width: none;
    width: 50vw;
    padding: 8px;
  }

  .card-title.no-image, .card-title.long.no-image  {
    font-size: 40px;
  }

  .card-image {
    margin: 10px 10px 8px 10px;
  }
}

@media (max-width: 420px) {
  .card {
    width: 80vw;
  }
}
</style>
