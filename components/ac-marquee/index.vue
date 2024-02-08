<template>
  <div data-name="ac-marquee" class="marquee">
    <div class="marquee__inner-wrap">
      <div class="marquee__inner" :class="{ 'paused':paused }" aria-hidden="true" :style="animDuration">
        <slot v-for="content in repeat" :content="content" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ac-marquee',
  props: {
    duration: {
      type: Number,
      default: 15
    },
    repeat: {
      type: Number,
      default: 2,
      validator: function (val) {
        return val >= 2
      }
    },
    direction: {
      type: String,
      default: 'normal'
    },
    paused: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    animDuration () {
      return {
        'animation-duration': `${this.duration}s`,
        'animation-direction': `${this.direction}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.marquee{
  @apply select-none absolute z-[1] top-0 left-0 overflow-hidden w-full h-full;
  transform: translate3d(0,0,0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.marquee__inner-wrap{
  height: 100%;
  width: 100%;
  width: fit-content;
  transform: translate3d(0,0,0);
}
.marquee__inner{
  height: 100%;
  width: fit-content;
  will-change: transform;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 1;
  animation-name: marquee;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  &.paused {
    animation-play-state: paused;
    -webkit-animation-play-state: paused;
    -moz-animation-play-state: paused;
    -o-animation-play-state: paused;
  }
}
@keyframes marquee {
  0% {
    transform: translate3d(0%, 0, 0);
  }
  100%{
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
