<template>
  <div data-name="ac-heading" class="mx-auto max-w-3xl p-6 text-center lg:p-10">
    <div class="text-5xl font-semibold tracking-tight text-white lg:text-7xl ">
      <slot name="title">
        <div v-html="title" />
      </slot>
    </div>
    <div class="mt-4 text-xl font-light tracking-tight text-neutral-300">
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
