<template>
  <div data-name="ac-testimonials" class="pointer-events-none select-none p-4">
    <div
      class="relative mx-auto w-full rounded-xl bg-neutral-800 bg-gradient-to-br from-neutral-800/50 to-neutral-900 px-6 transition-all lg:w-2/3"
      :style="{
        height: `${currentHeight}px`
      }"
    >
      <div
        v-for="(testimonial, index) in resources"
        :key="index"
        class="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2"
      >
        <div
          :ref="`t-${index}`"
          class="flex w-full items-center justify-center transition-all duration-500"
          :class="{
            'opacity-100': index === current,
            'opacity-0': index !== current,
          }"
        >
          <ac-testimonial :author="testimonial.author">
            <div class="leading-relaxed">
              {{ testimonial.text }}
            </div>
          </ac-testimonial>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ac-testimonials',
  props: {
    resources: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      current: 0,
      currentHeight: 0,
      timing: 6000,
      TIMING_ID: null
    }
  },
  mounted () {
    this.run()
  },
  methods: {
    run () {
      this.heightFix()
      this.TIMING_ID = setTimeout(() => {
        this.current = (1 + this.current) === this.resources.length ? 0 : this.current + 1
        this.run()
      }, this.timing)
    },
    heightFix () {
      const heights = []
      for (let index = 0; index < this.resources.length; index++) {
        const e = this.$refs[`t-${index}`][0]
        heights.push(e.clientHeight)
      }
      this.currentHeight = Math.max(...heights)
      console.log(this.currentHeight)
    }
  },
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
