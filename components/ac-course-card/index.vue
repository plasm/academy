<template>
  <div data-name="ac-course-card" class="relative rounded-xl border border-neutral-700 p-8 text-white transition-colors duration-500 hover:border-neutral-800 ease-cubic-bezier  hover:bg-neutral-800" @mouseover="$emit('over')" @mouseleave="$emit('leave')">
    <div
      class="absolute z-10 -translate-y-1/2 translate-x-1/2 transition-all duration-200 ease-cubic-bezier"
      :class="{
        'right-6 top-6 scale-[65%]':modelValue===type,
        'right-2 top-2 scale-[40%]':modelValue!==type,
      }"
    >
      <slot name="logo" :active="modelValue" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ac-course-card',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: ''
    }
  },
  emits: ['over', 'leave']
}
</script>

<style lang="scss" scoped>
</style>
