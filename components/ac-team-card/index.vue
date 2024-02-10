<template>
  <figure data-name="ac-team-card" class="group relative flex h-full flex-col items-start justify-start rounded-xl border border-neutral-800 bg-neutral-900 transition-colors duration-500 hover:border-black hover:bg-primary">
    <blockquote class="relative p-6">
      <div class="text-base font-light text-neutral-300 transition-colors duration-500 group-hover:text-black">
        <slot />
      </div>
    </blockquote>
    <figcaption class="relative mt-auto flex w-full items-center justify-between border-t border-neutral-800 p-6 py-4 transition-colors duration-500 group-hover:border-black/10">
      <div>
        <div class="text-xl font-semibold text-white transition-colors duration-500 group-hover:text-black">
          {{ title }}
        </div>
        <div class="mt-1 text-sm text-neutral-500 transition-colors duration-500 group-hover:text-neutral-700">
          {{ role }}
        </div>
      </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'ac-team-card',
  props: {
    title: {
      type: String,
      default: null
    },
    role: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
