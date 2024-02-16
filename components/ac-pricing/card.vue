<template>
  <div data-name="ac-pricing-card">
    <section
      class="mb-10 flex flex-col px-6 py-8 sm:px-8 lg:mb-0"
      :class="{
        'rounded-3xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900':highlight
      }"
    >
      <h3 class="mt-5 text-lg uppercase" :class="[`price-text-${theme}`]">
        {{ title }}
      </h3>
      <p class="mt-2 text-sm text-white">
        {{ subtitle }}
      </p>
      <div class="mt-2 text-sm text-neutral-400">
        <slot name="description" />
      </div>
      <p class="order-first text-5xl font-light tracking-tight text-white">
        € {{ price }}
      </p>

      <a v-if="highlight" class="mt-8 inline-flex w-full items-center  justify-center rounded-full border-2 px-6 py-2.5 text-center text-sm duration-200 focus:outline-none focus-visible:outline-white focus-visible:ring-white" :href="link" :class="[`price-button-${theme}`]" target="_blank">
        {{ callToAction }}
      </a>
      <a v-else class="mt-8 inline-flex w-full items-center justify-center rounded-full border-2 border-white bg-white px-6 py-2.5 text-center text-sm text-black duration-200 hover:border-white hover:bg-transparent hover:text-white focus:outline-none focus-visible:outline-white focus-visible:ring-white" :href="link" target="_blank">
        {{ callToAction }}
      </a>

      <h3 class="mt-10 text-sm text-white">
        <u>{{ footerTitle }}</u>
      </h3>
      <div class="mt-10 flex flex-col gap-y-3 text-sm text-neutral-400">
        <slot name="footer" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ac-pricing-card',
  props: {
    highlight: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    footerTitle: {
      type: String,
      default: 'Benefit inclusi'
    },
    callToAction: {
      type: String,
      default: 'Iscriviti'
    },
    link: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'gold',
      validator: (v) => {
        return ['gold', 'silver'].includes(v)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.price-text-gold{
  @apply text-gold;
}
.price-text-silver{
  @apply text-blue-200;
}
.price-button-gold{
  @apply border-gold bg-gold text-black hover:border-gold hover:bg-transparent hover:text-gold;
}
.price-button-silver{
  @apply border-blue-200 bg-blue-200 text-black hover:border-blue-200 hover:bg-transparent hover:text-blue-200;
}
</style>
