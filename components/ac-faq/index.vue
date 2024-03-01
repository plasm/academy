<template>
  <div data-name="ac-faq">
    <section>
      <div class="mx-auto size-full">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-12">
          <div class="text-center lg:text-left">
            <div>
              <p class="text-4xl font-semibold leading-tight text-neutral-100">
                {{ title }}
              </p>
              <p class="mt-4 text-base text-neutral-500">
                <slot />
              </p>
            </div>
          </div>
          <div class="relative mx-auto w-full font-normal lg:col-span-2">
            <div
              v-for="(item, index) in innerResources"
              :key="index"
              class="group cursor-pointer text-neutral-300 hover:text-neutral-300"
              :class="{ 'text-neutral-900': item.active, 'text-neutral-300 hover:text-neutral-300': !item.active }"
            >
              <button
                class="flex w-full select-none items-center justify-between p-4 pb-1 text-left text-sm lg:text-base"
                @click="setActiveAccordion(index)"
              >
                <span class="text-xl font-semibold text-white">{{ item.question }}</span><svg
                  class="size-6 shrink-0 text-neutral-500 duration-300 ease-out"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                  stroke-width="1.5"
                  :class="{ 'rotate-[-45deg]': item.active }"
                >
                  <path d="M12 6v12m6-6H6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <div
                :class="{
                  'block': item.active,
                  'hidden': !item.active
                }"
              >
                <div class="p-4 pt-2 text-lg text-neutral-300">
                  {{ item.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ac-faq',
  props: {
    title: {
      type: String,
      default: ''
    },
    resources: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      innerResources: this.resources
    }
  },
  methods: {
    setActiveAccordion (index) {
      this.innerResources[index].active = !this.innerResources[index].active
    }
  }
}
</script>

<style lang="scss" scoped></style>
