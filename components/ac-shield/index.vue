<template>
  <div
    data-name="ac-shield"
    class="group relative mx-auto size-28 rounded-full bg-black outline outline-black transition-all duration-300"
    :class="{
      'p-1 ':!hover,
      'scale-125 p-1':hover,
    }"
    @mouseover="hover = true"
    @mouseleave="hover = persistent"
  >
    <div :class="`gradient-${theme}`" class="blend absolute left-0 top-0 z-10 flex size-full items-center justify-center rounded-full" />
    <div class="relative size-full rounded-full bg-gray-500 p-1">
      <div class="relative size-full rounded-full bg-black">
        <div class="relative size-full overflow-hidden rounded-full opacity-50" :class="{ 'invert':!capsule }">
          <div class="filigrana" />
        </div>
        <div
          class="absolute left-0 top-0 flex  size-full items-center justify-center text-neutral-400 transition-all duration-300"
          :class="{
            'scale-[80%]': hover
          }"
        >
          <ac-logo size="large" :class="{ 'z-10 text-black': capsule }" />
          <div class="absolute  size-full  animate-spin-slow">
            <div
              :class="{
                'scale-100 opacity-0':!hover,
                'scale-[220%] opacity-100':hover
              }"
              class="absolute  size-full origin-center  transition-all delay-100 duration-200"
            >
              <component
                :is="component"
                :class="{ 'z-10 text-black': capsule }"
                class="absolute left-0 top-0 size-[48px] translate-x-1/2 translate-y-1/2 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ac-shield',
  props: {
    persistent: {
      type: Boolean,
      default: false
    },
    experience: {
      type: Boolean,
      default: false
    },
    capsule: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'academy',
      validator: (v) => {
        return ['academy', 'gold', 'silver'].includes(v)
      }
    }
  },
  data () {
    return {
      hover: this.persistent
    }
  },
  computed: {
    component () {
      return this.experience ? 'ac-formula-experience' : 'ac-formula-full-immersion'
    }
  },
  watch: {
    persistent (v) {
      this.hover = v
    }
  }
}
</script>
<style lang="scss" scoped>
.filigrana{
  position: absolute;
  border-radius: inherit;
  inset: 0px;
  background-size: 25px;
  background-image: url('/filigrana.svg');
  border: 0px;
  background-repeat: repeat;
  background-position: center center;
}
.blend{
  mix-blend-mode: overlay;
  overflow: hidden;
}
.gradient-gold{
  background: conic-gradient(from 0deg at 50% 50%, rgb(254, 229, 163) 0deg, #e1b970 90.8108deg, rgb(209, 161, 78) 115.217deg, rgb(255, 236, 162) 178.144deg, rgb(208, 140, 33) 217.297deg, rgb(255, 227, 164) 269.861deg, rgb(210, 159, 78) 308.425deg, rgb(254, 229, 163) 360deg);
}
.gradient-silver{
  background: conic-gradient(from 0deg at 50% 50%, rgb(255, 255, 255) 0deg, rgb(235, 189, 215) 90.8108deg, rgb(196, 189, 228) 115.217deg, rgb(183, 230, 247) 178.144deg, rgb(233, 224, 185) 217.297deg, rgb(235, 195, 188) 284.202deg, rgb(255, 255, 255) 360deg);
}
.gradient-academy{
  // @apply bg-primary;
  background: conic-gradient(from 0deg at 50% 50%, #e3fa99 0deg, #fbfe25 90.8108deg, #F2FE71 115.217deg, #e3fa99 178.144deg, #F2FE71 217.297deg, #e3fa99 269.861deg, #d1ff2b 308.425deg, #e3fa99 360deg);
}
</style>
