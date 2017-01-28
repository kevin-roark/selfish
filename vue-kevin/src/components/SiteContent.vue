<template>
  <div class="content-container">
    <transition name="simple-fade">
      <img v-if="hoveringImageURL" class="background-image" :src="hoveringImageURL" alt="" />
    </transition>

    <div class="card-container" :style="cardContainerStyle">
      <ContentCard
        v-for="i in 50"
        :title="'ART #' + i"
        :style="cardStyles[i - 1]"
        :isCardHovering="!!hoveringImageURL"
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
  data: () => ({
    cardContainerWidth: 0,
    cardStyles: [],
    hoveringImageURL: null,
  }),
  mounted() {
    this.computeCardPositions();
  },
  computed: {
    containerStyle() {
      return { width: `${this.width}px` };
    },
    cardContainerStyle() {
      return { width: `${this.cardContainerWidth}px` };
    },
  },
  methods: {
    onResize() {
      this.computeCardPositions(true);
    },
    cardHover({ imageURL, hovering }) {
      this.hoveringImageURL = hovering ? imageURL : null;
    },
    computeCardPositions(resize = false) {
      // only need to calculate the card positions on mount or resize
      const cardStyles = [];
      const h = window.innerHeight;
      let left = 50;
      for (let i = 0; i < 50; i += 1) {
        cardStyles.push({
          left: resize ? this.cardStyles[i].left : `${left}px`,
          top: `${Math.floor(Math.random() * (h - 120))}px`,
          position: 'absolute',
        });
        left = resize ? Number(this.cardStyles[i].left) :
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
}
</style>
