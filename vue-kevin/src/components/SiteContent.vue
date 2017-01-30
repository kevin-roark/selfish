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
        :weight="cardData[i].weight"
        :slug="item.slug"
        :style="cardStyles[i]"
        :class="cardData[i].classes"
        :isCardHovering="hoverState.hovering"
        @hoverChange="cardHover"
      />
    </div>
  </div>
</template>

<script>
import ContentCard from './ContentCard';
import Resizer from '../mixins/resizer';
import { getImageURL } from '../util/images';
import { contentWithTags } from '../util/content';

export default {
  components: {
    ContentCard,
  },
  mixins: [Resizer],
  props: {
    content: Array,
    tags: Array,
  },
  data: () => ({
    cardContainerWidth: 0,
    cardStyles: [],
    hoverState: { imageURL: null, hovering: false },
  }),
  mounted() {
    this.computeCardPositions();
  },
  watch: {
    tags(tags) {
      this.computeCardPositions({ tagged: tags.length > 0 });
    },
  },
  computed: {
    cardContainerStyle() {
      return { width: `${this.cardContainerWidth}px` };
    },
    cardData() {
      const hasTags = this.tags.length > 0;
      return this.content
        .map((item, index) => {
          const untagged = hasTags && this.taggedIndices.indexOf(index) < 0;
          return {
            classes: { untagged },
            weight: hasTags ? 1.5 : item.weight,
          };
        });
    },
    taggedIndices() {
      return this.tags.length === 0 ? [] : contentWithTags(this.tags);
    },
  },
  methods: {
    onResize() {
      this.computeCardPositions({ resize: true });
    },
    cardHover({ imageURL, hovering }) {
      this.hoverState.hovering = hovering;
      this.hoverState.imageURL = hovering ? imageURL : null;
      this.$emit('cardHover', hovering);
    },
    getImageURL(i) {
      return i.images && i.images.length > 0 ? getImageURL(i.images[0]) : null;
    },
    computeCardPositions({ resize = false, tagged = false } = {}) {
      // only need to calculate the card positions on mount or resize
      const cardStyles = [];
      const h = window.innerHeight;
      let left = 275;
      for (let i = 0; i < this.content.length; i += 1) {
        const untagged = tagged && this.taggedIndices.indexOf(i) < 0;
        if (untagged) {
          cardStyles.push(this.cardStyles[i]);
        } else {
          cardStyles.push({
            left: resize ? this.cardStyles[i].left : `${left}px`,
            top: `${Math.floor(Math.random() * (h - 140)) + 20}px`,
            position: 'absolute',
          });

          left = resize ? parseFloat(this.cardStyles[i].left) :
            left + (Math.random() * Math.random() * 200) + 75;
        }
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

.untagged {
  opacity: 0;
}
</style>
