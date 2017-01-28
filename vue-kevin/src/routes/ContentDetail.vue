<template>
  <div class="detail-container">
    <div class="detail-modal">
      <x-icon class="detail-close-button" color="#fff" @click.native="close" />

      <h2 class="detail-title">
        <a v-if="content.link" :href="content.link" target="_blank">{{ content.title }}</a>
        <span v-else>{{ content.title }}</span>
      </h2>

      <detail-tags class="detail-tags" :tags="content.tags" :date="content.date" />

      <div class="detail-description">{{ content.text }}</div>

      <div v-if="imageURLs.length > 0" class="detail-images">
        <img v-for="(src, i) in imageURLs" :src="src" :alt="`Image ${i}`" />
      </div>

      <a v-if="content.link" class="detail-link" :href="content.link" target="_blank">LINK</a>

      <div v-if="navigationHandler" class="detail-navigation">
        <span class="detail-navigation-arrow" @click="navigationHandler(-1)">→</span>
        <span class="detail-navigation-arrow" @click="navigationHandler(1)">←</span>
      </div>
    </div>
  </div>
</template>

<script>
import XIcon from '../components/x-icon';
import DetailTags from '../components/DetailTags';
import { getImageURL } from '../util/images';
import { contentFromSlug } from '../util/content';

export default {
  components: {
    XIcon,
    DetailTags,
  },
  props: {
    slug: { type: String, required: true },
    navigationHandler: Function,
  },
  computed: {
    content() {
      return contentFromSlug(this.slug);
    },
    imageURLs() {
      if (!this.content.images || this.content.images.length === 0) return [];
      return this.content.images.map(i => getImageURL(i));
    },
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.detail-container {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
}

.detail-close-button {
  position: absolute;
  top: 10px; left: 10px;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
  .no-touch .detail-close-button:hover {
    box-shadow: 5px 5px 1px 0 #232323, 10px 10px 1px 0 #444444, 15px 15px 1px 0 #636363, 20px 20px 1px 0 #959595;
  }

.detail-modal {
  position: absolute;
  top: 100px; left: calc(50% - 400px);
  width: 800px;
  background-color: #000;
  color: #fff;
}

.detail-title {
  text-align: center;
  font-family: TimesNewRomanPSMT, 'Times New Roman', sans-serif;
  font-size: 64px;
  font-weight: normal;
  letter-spacing: 1.14px;
  text-shadow: 0.25px 1px 1px rgba(0,0,0,0.30);
}
  .detail-title a {
    color: inherit; text-decoration: none;
  }

.detail-tags {
  position: absolute;
  top: 10px; right: 10px;
}

.detail-description {
  margin: 15px;
  font-family: TimesNewRomanPSMT, 'Times New Roman', sans-serif;
  font-size: 18px;
  letter-spacing: 1.14px;
  line-height: 24px;
}

.detail-images {
  box-sizing: border-box;
  margin: 10px 10px 40px 10px;
  white-space: nowrap;
  overflow-x: auto;
}

.detail-images img {
  margin: 10px;
  max-width: 600px;

  box-sizing: border-box;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom, #f00 0%, #00f 100%);
  border-image-slice: 1;
}

.detail-link {
  display: block;
  color: #fff;
  text-decoration: none;
  font-family: sans-serif;
  font-size: 48px;
  transform-origin: 0% 100%;
  transform: scale(4, 2);
  text-shadow: 4px 4px 2px rgba(255,0,0,0.50), 7px 7px 2px rgba(0,0,255,0.50);
}

@media (max-width: 800px) {
  .detail-modal {
    top: 10px; left: 10px;
    width: calc(100% - 20px);
  }

  .detail-title {
    font-size: 48px;
    letter-spacing: 0.86px;
  }

  .detail-description {

  }
}
</style>
