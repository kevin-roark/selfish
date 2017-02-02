<template>
  <div class="content-container" ref="contentContainer">
    <img v-if="hoverState.imageURL" class="background-image" :src="hoverState.imageURL" alt="" />
    <div v-else-if="hoverState.hovering" class="background-image" />

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
    viewStyle: 'large',
  }),
  mounted() {
    this.setViewStyle();
    this.computeCardPositions();
  },
  watch: {
    tags(tags, oldTags) {
      if (tags.length !== oldTags.length) {
        this.computeCardPositions({ tagged: tags.length > 0 });
        this.$refs.cardContainer.scrollLeft = 0;
      }
    },
    viewStyle() {
      this.computeCardPositions();
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
    setViewStyle() {
      if (window.innerWidth > 800) {
        this.viewStyle = 'large';
      } else {
        this.viewStyle = window.innerWidth > 420 ? 'medium' : 'small';
      }
    },
    onResize() {
      this.setViewStyle();
    },
    cardHover({ imageURL, hovering }) {
      this.hoverState.hovering = hovering;
      this.hoverState.imageURL = hovering ? imageURL : null;
      this.$emit('cardHover', { hovering, imageURL });
    },
    getImageURL(i) {
      return i.images && i.images.length > 0 ? getImageURL(i.images[0]) : null;
    },
    computeCardPositions({ tagged = false } = {}) {
      const { content, viewStyle, untaggedCards } = this;
      const cardStyles = [];
      for (let i = 0; i < content.length; i += 1) {
        const untagged = tagged && untaggedCards[i];
        if (untagged) {
          cardStyles.push(this.cardStyles[i]);
        } else {
          let top;
          let left;
          if (viewStyle === 'large') {
            top = Math.floor(Math.random() * 75);
            left = Math.floor((Math.random() - 0.5) * 120) + 40;
          } else {
            top = Math.floor(Math.random() * 120) + 40;

            const space = viewStyle === 'medium' ? 50 : 20;
            left = Math.floor(Math.random() * space);
          }
          cardStyles.push({
            marginTop: `${top}${viewStyle === 'large' ? 'vh' : 'px'}`,
            marginLeft: `${left}${viewStyle === 'large' ? 'px' : 'vw'}`,
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
  min-height: 150px;
}

.background-image {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background-color: #ccc;
  mix-blend-mode: multiply;
}

.untagged {
  width: 0;
  overflow: hidden;
  margin-left: 0 !important;
}

@media (max-width: 800px) {
  .card-container {
    padding: 100px 0;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    height: auto;
  }
}
</style>
