<template>
  <div class="content-container">
    <img v-if="hoverState.imageURL" class="background-image" :src="hoverState.imageURL" alt="" />
    <div v-else-if="hoverState.hovering" class="background-image" />

    <div class="card-container" ref="cardContainer">
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
import ContentCard from './ContentCard';
import DateMarker from './DateMarker';
import Resizer from '../mixins/resizer';
import Keyup from '../mixins/keyup';
import { getImageURL } from '../util/images';
import { contentWithTags } from '../util/content';
import { yearFromDate } from '../util/date';

export default {
  components: {
    ContentCard,
    DateMarker,
  },
  mixins: [Resizer, Keyup],
  props: {
    content: Array,
    tags: Array,
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
      return i.images && i.images.length > 0 ? getImageURL(i.images[0]) : null;
    },
    computeCardPositions({ tagged = false } = {}) {
      const { content, viewStyle, untaggedCards } = this;
      const cardStyles = [];
      const medium = viewStyle === 'medium';
      for (let i = 0; i < content.length; i += 1) {
        const untagged = tagged && untaggedCards[i];
        if (untagged) {
          cardStyles.push(this.cardStyles[i]);
        } else if (viewStyle === 'large') {
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
          const top = Math.floor(Math.random() * 120) + medium ? 100 : 40;
          const space = medium ? 50 : 18;
          const left = Math.floor(Math.random() * space) + medium ? 25 : 0;
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
