<template>
  <div class="content-container">
    <transition name="simple-fade">
      <img v-if="hoveringCard.imageURL" class="background-image" :src="hoveringCard.imageURL" alt="" />
    </transition>

    <ContentCard
      v-for="i in 5"
      :title="'ART #' + i"
      :style="cardStyle(i)"
      :isCardHovering="!!hoveringCard.imageURL"
      @hoverChange="cardHover"
    />
  </div>
</template>

<script>
import ContentCard from './ContentCard';

export default {
  components: {
    ContentCard,
  },
  data: () => ({
    hoveringCard: { imageURL: null },
  }),
  computed: {
  },
  methods: {
    cardStyle(i) {
      return {
        position: 'absolute',
        top: `${(i * 150)}px`,
        left: `${(i * 60)}px`,
      };
    },
    cardHover({ imageURL, hovering }) {
      this.hoveringCard.imageURL = hovering ? imageURL : null;
    },
  },
};
</script>

<style scoped>
.content-container {
  position: fixed;
  top: 0; left: 0; width: 100vw; height: calc(100vh - 200px);
  overflow: auto;
}

.background-image {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
}
</style>
