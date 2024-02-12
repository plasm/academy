<template>
  <div data-name="ac-heading" class="mx-auto max-w-7xl p-4 text-center sm:px-6 md:p-6 md:px-8 lg:p-10">
    <div class="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-7xl ">
      <slot name="title">
        <div v-html="title" />
      </slot>
    </div>
    <div class="mt-4 text-base font-light tracking-tight text-neutral-300 md:text-xl">
      <slot name="description">
        <div v-html="description" />
      </slot>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ac-heading',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
