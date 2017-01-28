<template>
  <div class="content-container">
    <transition name="simple-fade">
      <img v-if="hoverState.imageURL" class="background-image" :src="hoverState.imageURL" alt="" />
      <div v-else-if="hoverState.hovering" class="background-image" />
    </transition>

    <div class="card-container" :style="cardContainerStyle">
      <ContentCard
        v-for="(item, i) in content"
        :key="item.title"
        :title="item.title"
        :imageURL="getImageURL(item)"
        :style="cardStyles[i]"
        :isCardHovering="hoverState.hovering"
        @hoverChange="cardHover"
      />
    </div>
  </div>
</template>

<script>
import ContentCard from './ContentCard';
import Resizer from '../mixins/resizer';

export default {
  components: {
    ContentCard,
  },
  mixins: [Resizer],
  props: {
    content: Array,
  },
  data: () => ({
    cardContainerWidth: 0,
    cardStyles: [],
    hoverState: { imageURL: null, hovering: false },
  }),
  mounted() {
    this.computeCardPositions();
  },
  computed: {
    cardContainerStyle() {
      return { width: `${this.cardContainerWidth}px` };
    },
  },
  methods: {
    onResize() {
      this.computeCardPositions(true);
    },
    cardHover({ imageURL, hovering }) {
      this.hoverState.hovering = hovering;
      this.hoverState.imageURL = hovering ? imageURL : null;
    },
    getImageURL(i) {
      return i.images && i.images.length > 0 ? require(`../assets/${i.images[0]}`) : null; // eslint-disable-line
    },
    computeCardPositions(resize = false) {
      // only need to calculate the card positions on mount or resize
      const cardStyles = [];
      const h = window.innerHeight;
      let left = 50;
      for (let i = 0; i < this.content.length; i += 1) {
        cardStyles.push({
          left: resize ? this.cardStyles[i].left : `${left}px`,
          top: `${Math.floor(Math.random() * (h - 120))}px`,
          position: 'absolute',
        });
        left = resize ? parseFloat(this.cardStyles[i].left) :
          left + (Math.random() * Math.random() * 200) + 40;
      }

      this.cardStyles = cardStyles;
      this.cardContainerWidth = left + 170;
    },
  },
};
</script>

<style scoped>
.content-container {
  position: absolute;
  top: 0; left: 0; width: 100vw; height: 100vh;
  overflow: auto;
}

.card-container {
  height: 100vh;
}

.background-image {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-color: #dedede;
}
</style>
