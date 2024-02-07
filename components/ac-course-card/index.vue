<template>
  <div data-name="ac-course-card" class="relative flex h-full flex-col items-stretch justify-stretch gap-4 rounded-xl border border-neutral-700 p-8 text-white transition-colors duration-500 ease-cubic-bezier hover:border-neutral-800 hover:bg-neutral-800" @mouseover="$emit('over')" @mouseleave="$emit('leave')">
    <div
      class="absolute z-10 -translate-y-1/2 translate-x-1/2 transition-all duration-200 ease-cubic-bezier"
      :class="{
        'right-6 top-6 scale-[65%]':modelValue===type,
        'right-2 top-2 scale-[40%]':modelValue!==type,
      }"
    >
      <slot name="logo" />
    </div>
    <slot />

    <div class="mt-auto flex items-start justify-start gap-3 text-sm font-medium  uppercase">
      <div class="rounded-md px-3 py-2 text-black" :class="`theme-${theme}`">
        Durata
      </div>
      <div class="rounded-md px-3 py-2 text-black" :class="`theme-${theme}`">
        Crediti
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ac-course-card',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'default'
    }
  },
  emits: ['over', 'leave']
}
</script>

<style lang="scss" scoped>
.theme-default{
  @apply bg-white text-black;
}
.theme-gold{
  @apply bg-gold text-black;
}

.theme-silver{
  @apply text-black bg-gradient-to-tr from-[#ffeaf7] to-[#d3f2ff];
}
</style>
