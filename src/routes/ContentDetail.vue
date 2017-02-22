<template>
  <div>
    <div class="detail-modal">
      <h2 class="detail-title" :class="{ long: content.title.length >= 30 }">
        <a v-if="content.link" :href="content.link" target="_blank">{{ content.title }}</a>
        <span v-else>{{ content.title }}</span>
      </h2>

      <detail-tags class="detail-tags" :tags="content.tags" :date="content.date" />

      <div class="detail-description" v-html="content.text"></div>

      <div
        v-if="imageURLs.length > 0"
        :class="{ 'detail-images': true, 'single-image': imageURLs.length === 1 }"
      >
        <img v-for="(src, i) in imageURLs" :src="src" :alt="`Image ${i}`" @click="imageClick(src)" />
      </div>

      <a
        v-if="content.link"
        class="detail-link"
        :href="content.link"
        target="_blank"
        @mouseenter="setLinkHovering(true)"
        @mouseleave="setLinkHovering(false)"
      >
        <span class="link-text">LINK</span>
        <span class="link-mirror" :class="{ active: linkHovering }">LINK</span>
      </a>
    </div>
    <NavigationArrows v-if="arrows" class="detail-navigation" @navigate="navigate" />
  </div>
</template>

<script>
import DetailTags from '../components/DetailTags';
import NavigationArrows from '../components/NavigationArrows';
import KeyUp from '../mixins/keyup';
import { getImageURL } from '../util/images';
import { contentFromSlug, navigateFromContent, contentWithTags } from '../util/content';
import { tagsFromString } from '../util/tags-route';

export default {
  components: {
    DetailTags,
    NavigationArrows,
  },
  props: {
    slug: { type: String, required: true },
    tags: { type: String },
  },
  mixins: [KeyUp],
  data: () => ({
    linkHovering: false,
  }),
  computed: {
    content() {
      return contentFromSlug(this.slug);
    },
    tagsList() {
      return tagsFromString(this.tags);
    },
    arrows() {
      return contentWithTags(this.tagsList).length > 1;
    },
    imageURLs() {
      if (!this.content.images || this.content.images.length === 0) return [];
      return this.content.images.map(i => getImageURL(i));
    },
  },
  methods: {
    setLinkHovering(hovering) {
      this.linkHovering = hovering;
    },
    navigate(delta) {
      const nextContent = navigateFromContent(this.content, { tags: this.tagsList, delta });
      if (nextContent) {
        this.$router.replace(`/detail/${nextContent.slug}`);
      }
    },
    keyup(ev) {
      if (this.$route.path.indexOf('detail') < 0) return; // not on screen
      if (ev.keyCode === 37) {
        this.navigate(-1);
        ev.preventDefault();
      } else if (ev.keyCode === 39) {
        this.navigate(1);
        ev.preventDefault();
      }
    },
    imageClick(src) {
      window.open(src);
    },
  },
};
</script>

<style scoped>
.detail-modal {
  position: fixed;
  box-sizing: border-box;
  width: 800px;
  left: calc(50% - 400px);
  top: 40px;
  max-height: calc(100% - 120px);
  overflow-y: auto;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.95);
  color: #fff;
  box-shadow: 0 6px 10px 5px rgba(0,0,0,0.50);
}

.detail-title {
  padding: 0;
  margin: -8px 80px 30px 60px;
  text-align: center;
  font-family: 'Crimson Text', TimesNewRomanPSMT, 'Times New Roman', serif;
  font-size: 54px;
  font-weight: 600;
  letter-spacing: 1.14px;
  text-shadow: 0.25px 1px 1px rgba(0,0,0,0.30);
}
  .detail-title.long {
    font-size: 48px;
  }
  .detail-title a {
    color: inherit; text-decoration: none;
  }

.detail-tags {
  position: absolute;
  top: 8px; right: 8px;
  max-width: 110px;
}

.detail-description {
  margin: 30px auto;
  font-family: 'Crimson Text', TimesNewRomanPSMT, 'Times New Roman', serif;
  font-family: 'Work Sans', 'SF UI', 'Helvetica', sans-serif;
  font-size: 22px;
  line-height: 1.4;
  max-width: 650px;
}

.detail-images {
  box-sizing: border-box;
  margin: 25px 0 40px 0;
  white-space: nowrap;
  overflow-x: auto;
}

.detail-images img {
  margin: 10px 0 10px 20px;
  width: 600px;
  cursor: pointer;

  box-sizing: border-box;
  border: 5px solid #ccc;
  border-image: linear-gradient(to bottom, #f00 0%, #00f 100%);
  border-image-slice: 1;
  transition: opacity 0.15s;
}
  .detail-images img:first-child {
    margin-left: 0;
  }
  .detail-images.single-image img {
    margin: 10px 30px;
    max-width: none;
    width: 700px;
  }

  .no-touch .detail-images img:hover {
    filter: brightness(150%) saturate(150%);
  }

.detail-link {
  display: block;
  margin: 70px 0 0 0;
  color: #fff;
  text-decoration: none;
  font-family: 'Work Sans', 'SF UI', 'Helvetica', sans-serif;
  font-weight: 400;
  font-size: 52px;
  transform-origin: 0% 100%;
  transform: scale(3.3, 2);
  text-shadow: 4px 4px 2px rgba(255,0,0,0.50), 7px 7px 2px rgba(0,0,255,0.50);
  width: 0;
}

.link-mirror {
  display: inline-block;
  position: absolute;
  top: 0; left: 116px;
  opacity: 0;
  transform: scaleX(-1);
  transition: opacity 0.3s;
}
  .link-mirror.active {
    opacity: 1;
  }

.detail-navigation {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15px;
}

@media (max-width: 800px) {
  .detail-modal {
    top: 10px; left: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 90px);
    max-height: none;
  }

  .detail-tags {
    position: static;
    max-width: none;
  }

  .detail-title {
    margin: -8px 0 20px 0;
    text-align: left;
    font-size: 48px;
    letter-spacing: 0.86px;
  }
    .detail-title.long {
      font-size: 40px;
    }

  .detail-description {
    margin-top: 40px;
    font-size: 20px;
  }

  .detail-images {
    white-space: normal;
    margin-bottom: 100px;
  }

  .detail-images img, .detail-images.single-image img {
    margin: 10px 0;
    width: 100%;
  }

  .detail-link {
    position: fixed;
    margin: 0;
    bottom: 80px; right: 25px;
    font-size: 36px;
    transform-origin: 100% 100%;
    transform: scale(3.4, 2.5);
    width: auto;
  }

  .link-mirror {
    left: 0;
    transform: scaleX(-1) translateX(90%);
  }

  .detail-navigation {
    bottom: 12px;
  }
}
</style>
