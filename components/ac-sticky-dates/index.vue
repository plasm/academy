<template>
  <div data-name="ac-sticky-dates">
    <section id="feature-five" aria-labelledby="feature-five" class="relative">
      <div class="mx-auto max-w-7xl px-8 py-12 md:px-12 lg:px-16 xl:px-36 ">
        <div class="flex w-full flex-col gap-12">
          <div v-for="(section, index) in resources" :key="index" class="w-full gap-4 md:gap-12 lg:flex">
            <div class="lg:w-2/5 ">
              <div
                class="pt-30 pb-30 relative lg:sticky lg:top-36"
              >
                <div>
                  <div class="mb-4 text-right lg:mb-0">
                    <div class="text-5xl font-semibold uppercase text-white" v-html="section.title" />
                  </div>
                </div>
              </div>
            </div>
            <div class="border lg:w-3/5">
              <slot
                name="dates"
                :resource="section"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ac-sticky-dates',
  props: {
    resources: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
