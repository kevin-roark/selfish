<template>
  <div :class="containerClass">
    <page-background v-if="bgImageURL" :src="bgImageURL" />
    <div v-else-if="hoverState.hovering" class="background-image" />

    <div
      class="card-container"
      ref="cardContainer"
    >
      <template v-for="(item, i) in content">
        <DateMarker v-if="dateMarkerIndices[i]" :date="item.date" :explosion="explosion" />
        <ContentCard
          :key="item.title"
          :title="item.title"
          :imageURL="getImageURL(item)"
          :weight="cardData[i].weight"
          :date="item.date"
          :slug="item.slug"
          :class="cardData[i].classes"
          :style="cardStyles[i]"
          :isCardHovering="hoverState.hovering"
          :explosion="explosion"
          @hoverChange="cardHover"
        />
      </template>

      <div class="space-adder"></div>
    </div>
  </div>
</template>

<script>
import PageBackground from './PageBackground';
import ContentCard from './ContentCard';
import DateMarker from './DateMarker';
import Resizer from '../mixins/resizer';
import Keyup from '../mixins/keyup';
import { getThumbnailURL } from '../util/images';
import { contentWithTags } from '../util/content';
import { yearFromDate } from '../util/date';

export default {
  components: {
    PageBackground,
    ContentCard,
    DateMarker,
  },
  mixins: [Resizer, Keyup],
  props: {
    content: Array,
    tags: Array,
    bgImage: String,
  },
  data: () => ({
    cardStyles: [],
    hoverState: { imageURL: null, hovering: false },
    viewStyle: 'large',
    explosion: false,
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
    containerClass() {
      return {
        'content-container': true,
        explosion: this.explosion,
      };
    },
    bgImageURL() {
      return this.hoverState.imageURL || this.bgImage;
    },
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
    dateMarkerIndices() {
      const idxs = {};
      let currentYear = 10000000000;
      this.content.forEach((item, idx) => {
        if (this.untaggedCards[idx]) return;

        const y = yearFromDate(item.date);
        if (y < currentYear) {
          currentYear = y;
          idxs[idx] = true;
        }
      });

      return idxs;
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
    keyup(ev) {
      const path = this.$route.path;
      if (path !== '/' && path.substring(0, 7) !== '/tagged') return; // not on screen
      if (ev.keyCode === 32) { // space
        this.explosion = !this.explosion;
        this.$refs.cardContainer.scrollLeft = 0;
      }
    },
    cardHover({ imageURL, hovering }) {
      this.hoverState.hovering = hovering;
      this.hoverState.imageURL = hovering ? imageURL : null;
      this.$emit('cardHover', { hovering, imageURL });
    },
    getImageURL(i) {
      return i.images && i.images.length > 0 ? getThumbnailURL(i.images[0]) : null;
    },
    computeCardPositions({ tagged = false } = {}) {
      const { content, viewStyle, untaggedCards } = this;
      const isVertical = true;
      const styleMap = {
        topSpace: { large: 160, medium: 120, small: 120 },
        top: { large: 140, medium: 100, small: 40 },
        leftSpace: { large: 10, medium: 35, small: 18 },
        left: { large: 5, medium: 5, small: 2 },
      };

      const cardStyles = [];

      for (let i = 0; i < content.length; i += 1) {
        const untagged = tagged && untaggedCards[i];
        if (untagged) {
          cardStyles.push(this.cardStyles[i]);
        } else if (!isVertical) {
          const style = {};
          style.marginLeft = `${Math.floor((Math.random() - 0.5) * 120) + 40}px`;
          if (Math.random() < 0.55) {
            style.marginTop = `${Math.floor(Math.random() * 65)}vh`;
          } else {
            style.alignSelf = 'flex-end';
            style.marginBottom = `${Math.floor(Math.random() * 32) + 8}vh`;
          }
          cardStyles.push(style);
        } else {
          const topSpace = styleMap.topSpace[viewStyle];
          const top = Math.floor(Math.random() * topSpace) + styleMap.top[viewStyle];
          const leftSpace = styleMap.leftSpace[viewStyle];
          const left = Math.floor(Math.random() * leftSpace) + styleMap.left[viewStyle];
          cardStyles.push({
            marginTop: `${top}px`,
            marginLeft: `${left}vw`,
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
  padding: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: auto;
}

.explosion .card-container {
  flex-wrap: nowrap;
  overflow-x: auto;
  height: 100%;
}

.space-adder {
  min-width: 150px;
  min-height: 150px;
}

.untagged {
  display: none;
}

@media (max-width: 800px) {
  .card-container {
    padding: 100px 0;
  }
}
</style>
