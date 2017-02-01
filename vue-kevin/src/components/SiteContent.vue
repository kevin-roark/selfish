<template>
  <div class="content-container" ref="contentContainer">
    <transition name="simple-fade">
      <img v-if="hoverState.imageURL" class="background-image" :src="hoverState.imageURL" alt="" />
      <div v-else-if="hoverState.hovering" class="background-image" />
    </transition>

    <div class="card-container" ref="cardContainer">
      <ContentCard v-for="(item, i) in content"
        :key="item.title"
        :title="item.title"
        :imageURL="getImageURL(item)"
        :weight="cardData[i].weight"
        :slug="item.slug"
        :class="cardData[i].classes"
        :style="cardStyles[i]"
        :isCardHovering="hoverState.hovering"
        @hoverChange="cardHover"
      />
      <div class="space-adder"></div>
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
    cardStyles: [],
    hoverState: { imageURL: null, hovering: false },
  }),
  mounted() {
    this.computeCardPositions();
  },
  watch: {
    tags(tags) {
      this.computeCardPositions({ tagged: tags.length > 0 });
      this.$refs.cardContainer.scrollLeft = 0;
    },
  },
  computed: {
    hasTags() {
      return this.tags.length > 0;
    },
    untaggedCards() {
      if (!this.hasTags) return {};

      const untagged = {};
      this.content.forEach((item, index) => {
        if (this.taggedIndices.indexOf(index) < 0) {
          untagged[index] = true;
        }
      });
      return untagged;
    },
    cardData() {
      return this.content
        .map((item, index) => ({
          classes: { untagged: this.untaggedCards[index] },
          weight: this.hasTags ? 1.5 : item.weight,
        }));
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
      this.$emit('cardHover', { hovering, imageURL });
    },
    getImageURL(i) {
      return i.images && i.images.length > 0 ? getImageURL(i.images[0]) : null;
    },
    computeCardPositions({ resize = false, tagged = false } = {}) {
      // only need to calculate the card positions on mount or resize
      const cardStyles = [];
      const h = window.innerHeight;
      for (let i = 0; i < this.content.length; i += 1) {
        const untagged = tagged && this.taggedIndices.indexOf(i) < 0;
        if (untagged) {
          cardStyles.push(this.cardStyles[i]);
        } else {
          let left = this.cardStyles.length > i ? this.cardStyles[i].left : 0;
          if (!resize) {
            left = Math.floor((Math.random() - 0.5) * 120) + 40;
          }
          cardStyles.push({
            marginTop: `${Math.floor(Math.random() * (h - 250))}px`,
            marginLeft: `${left}px`,
          });
        }
      }

      this.cardStyles = cardStyles;
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
  box-sizing: border-box;
  padding: 5px 100px 80px 100px;
  display: flex;
  align-items: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100%;
}

.space-adder {
  min-width: 150px;
  height: 100px;
}

.background-image {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-color: #dedede;
  mix-blend-mode: multiply;
}

.untagged {
  width: 0;
  overflow: hidden;
  margin-left: 0 !important;
}
</style>
