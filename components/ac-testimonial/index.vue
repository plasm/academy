<template>
  <section data-name="ac-testimonial">
    <div class="mx-auto max-w-7xl p-8 md:px-12">
      <div class="mx-auto max-w-2xl text-center">
        <div class="pb-4 text-base text-neutral-500">
          <slot />
        </div>
        <div class="mt-4 justify-center space-y-4">
          <div class="text-2xl font-light text-violet-200">
            {{ author }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ac-temstimonial',
  props: {
    author: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
