<template>
  <div class="space-y-4" data-name="ac-user-card">
    <div class="aspect-[3/2] overflow-hidden rounded-xl">
      <img class="size-full object-cover" :src="image" alt="">
    </div>
    <div class="inline-flex w-full items-start justify-between">
      <div class="space-y-1">
        <h3 class="text-lg font-semibold leading-6 text-white">
          {{ title }}
        </h3>
        <p class="text-base text-neutral-500">
          {{ role }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ac-user-card',
  props: {
    image: {
      type: String,
      default: null
    },
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

<style lang="sass" scoped>

</style>
