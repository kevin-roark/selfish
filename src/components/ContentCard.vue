<template>
  <div class="card-wrapper" :class="wrapperClass" :style="wrapperStyle" @mouseenter="setHover(true)" @mouseleave="setHover(false)">
    <router-link v-if="url" :to="url" class="card" :style="cardStyle">
      <h2 class="card-title" :class="cardTitleClass">{{ title }}</h2>
      <img v-if="imageURL" class="card-image" :src="imageURL" :alt="`${title} Image`" />
      <div class="card-date">{{ date }}</div>
    </router-link>
    <div v-else class="card" :style="cardStyle">
      <h2 class="card-title" :class="cardTitleClass">{{ title }}</h2>
      <img v-if="imageURL" class="card-image" :src="imageURL" :alt="`${title} Image`" />
      <div class="card-date">{{ date }}</div>
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
    date: String,
    slug: String,
  },
  data: () => ({
    hovering: false,
  }),
  computed: {
    wrapperStyle() {
      const scale = Math.min(1, Math.max(0.4, (this.weight / 1.75) * 1.333));
      return {
        transform: `scale(${scale}, ${scale})`,
      };
    },
    wrapperClass() {
      return {
        'other-hover': this.isCardHovering && !this.hovering,
        'no-image': !this.imageURL,
      };
    },
    cardStyle() {
      let bgOpacity = 1;
      if (this.weight < 1) {
        bgOpacity = Math.max(0.5, this.weight * 0.8);
      } else if (this.weight < 2) {
        bgOpacity = ((this.weight - 1) * 0.15) + 0.85;
      }
      const white = Math.round((1 - bgOpacity) * 255);

      return {
        backgroundColor: `rgb(${white}, ${white}, ${white})`,
      };
    },
    cardTitleClass() {
      return {
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
  transition: all 0.15s;
  transform-origin: 0% 50%;
}

  .card-wrapper.other-hover {
    mix-blend-mode: difference;
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
  transition: all 0.15s;
  transform-origin: 0% 50%;
}

  .no-touch .card-wrapper:hover {
    /*transform: scale(1.5);*/
    z-index: 10;
  }
  .no-touch .card-wrapper:hover .card {
    background-color: #000 !important;
    box-shadow: -5px 5px 1px 0 #232323, -10px 10px 1px 0 #444444, -15px 15px 1px 0 #797979, -20px 20px 1px 0 #ccc, -25px 25px 1px 0 #fff;
  }

.card-title {
  margin: 0; padding: 0;
  font-family: 'Work Sans', 'SF UI', 'Inconsolata', Menlo, Monaco, monospace;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.4;
  color: #fff;
  text-shadow: 0.25px 1px 1px rgba(0,0,0,0.30);
  transition: color 0.15s;
}
  .card-title.long {
    font-size: 22px;
  }
  .no-image .card-title, .no-image .card-title.long {
    font-size: 72px;
  }
  .no-touch .card-wrapper:hover .card-title {
    color: #f00;
  }

.card-image {
  display: block;
  width: calc(100% - 12px);
  margin: 8px 4px;
  border: 2px solid #ccc;
  border-image: linear-gradient(to bottom, #f00 0%, #00f 100%);
  border-image-slice: 1;
}

.card-date {
  position: absolute;
  bottom: 22px; right: 20px;
  text-align: center;
  font-family: 'Inconsolata', Menlo, Monaco, monospace;
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 10px #000;
}

  .no-image .card-date {
    position: static;
    display: inline-block;
  }

  .no-touch .card-wrapper:hover .card-date {
    background: #00f;
  }

  .other-hover .card-date {
    mix-blend-mode: exclusion;
  }

@media (max-width: 800px) {
  .card {
    min-width: none; max-width: none;
    width: 50vw;
    padding: 8px;
  }

  .no-image .card-title, .no-image .card-title.long {
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
