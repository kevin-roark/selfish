
<template>
  <div class="tags-button" :class="{ reset: tagsShowing && tagged }">
    <span class="tags-button-text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tagsShowing: { type: Boolean, default: false },
    tagged: { type: Boolean, default: false },
  },
  computed: {
    text() {
      if (!this.tagsShowing) {
        return 'TAGS';
      }

      return this.tagged ? 'RESET' : 'HIDE';
    },
  },
};
</script>

<style scoped>
.tags-button {
  position: fixed;
  bottom: 0; left: 0;
  width: 320px;
  padding: 20px 0 25px 0;
  cursor: pointer;
  background: #FFFFB3;
  color: #0000ff;
  box-sizing: border-box;
  border: 4px solid #0000FF;
  text-align: center;
  user-select: none;
  z-index: 1;
  transition: all 0.25s;
  pointer-events: auto;
}
  .tags-button.reset {
    border-color: #ff0000;
    color: #ff0000;
  }
  .tagsShowing .tags-button {
    background: rgba(255, 255, 179, 0.95);
  }
  .no-touch .tags-button:hover .tags-button-text {
    transform: scale(5, 4) rotate(180deg) translateY(-2px);
  }

.tags-button-text {
  display: inline-block;
  font-family: 'Work Sans', 'SF UI', 'Helvetica', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-shadow: 1px 2px 2px #000088, 0 1.2px 0 #000000;
  transform: scale(5, 3);
  transition: transform 0.1s;
}
  .reset .tags-button-text {
    text-shadow: 1px 2px 2px #880000, 0 1.2px 0 #000000;
  }

@media (max-width: 800px) {
  .tags-button {
    left: calc(50% - 160px);
    padding: 10px 0 15px 0;
  }

  .tags-button-text {
    transform: scale(2.5, 1.5);
  }
}
</style>
