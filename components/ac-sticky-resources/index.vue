<template>
  <div data-name="ac-sticky-resources">
    <section id="feature-five" aria-labelledby="feature-five" class="relative">
      <div class="mx-auto max-w-7xl px-8 py-12 md:px-12 lg:px-16 xl:px-36 ">
        <div class="flex w-full flex-col gap-12">
          <div
            v-for="(item, index) in innerResources"
            :id="`${id}-${index}`"
            :key="index"
            class="w-full gap-4 md:gap-12 lg:flex"
            :class="{
              'opacity-40': isLast(index)
            }"
          >
            <div
              :class="{
                'lg:w-1/6': distibutionTemplate === 1,
                'lg:w-2/6': distibutionTemplate === 2,
                'lg:w-3/6': distibutionTemplate === 3,
                'lg:w-4/6': distibutionTemplate === 4,
                'lg:w-5/6': distibutionTemplate === 5,
              }"
            >
              <div
                class="pt-30 pb-30 relative lg:sticky lg:top-36"
              >
                <div>
                  <div class="mb-4 lg:mb-0 lg:text-right">
                    <slot
                      name="title"
                      :resource="item"
                    >
                      <div class="text-5xl font-semibold uppercase text-white" v-html="item.title" />
                    </slot>
                  </div>
                </div>
              </div>
            </div>
            <div
              :class="{
                'lg:w-5/6': distibutionTemplate === 1,
                'lg:w-4/6': distibutionTemplate === 2,
                'lg:w-3/6': distibutionTemplate === 3,
                'lg:w-2/6': distibutionTemplate === 4,
                'lg:w-1/6': distibutionTemplate === 5,
              }"
            >
              <slot
                name="resource"
                :resource="item"
              />
            </div>
          </div>
        </div>

        <div
          v-if="limit!==-1 && limit < resources.length"
          :class="{
            'mt-8': all
          }"
          class="border-top flex cursor-pointer justify-center pt-8 text-white transition-all"
          @click="toggleAll"
        >
          <div
            :title="callToAction"
            class="rounded-2xl border border-white p-1 transition-transform duration-300 ease-out hover:-translate-y-1 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white md:mt-0"
          >
            <div class="rounded-xl px-6 py-1 text-lg font-medium text-white ">
              {{ callToAction }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { scrollToElement } from '#imports'
export default {
  name: 'ac-sticky-resources',
  props: {
    resources: {
      type: Array,
      default: () => []
    },
    distibutionTemplate: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: -1
    },
    callToActionOpen: {
      type: String,
      default: 'Mostra tutti'
    },
    callToActionClose: {
      type: String,
      default: 'Mostra meno'
    },
    id: {
      type: String,
      default: 'resource'
    },

  },
  data () {
    return {
      all: false
    }
  },
  computed: {
    callToAction () {
      return this.all ? this.callToActionClose : this.callToActionOpen
    },
    innerResources () {
      if (this.limit === -1 || this.all) { return this.resources }
      return this.resources.filter((e, i) => i < this.limit)
    }
  },
  methods: {
    isLast (index) {
      return !this.all && this.limit !== -1 && this.limit < this.resources.length ? index === this.innerResources.length - 1 : false
    },
    toggleAll () {
      this.all = !this.all
      setTimeout(() => {
        scrollToElement(`${this.id}-${this.limit - 2}`)
      }, 200)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
