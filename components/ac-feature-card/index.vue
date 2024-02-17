<template>
  <div
    data-name="ac-feature-card"
    class="transition-color group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 p-6 text-lg text-white "
    :class="{
      'hover:border-gold/80': theme === 'gold',
      'hover:border-blue-200/80': theme === 'silver',
    }"
  >
    <div class="relative z-[3]">
      <div class="text-lg font-medium text-neutral-700/70 transition-colors group-hover:text-neutral-200">
        {{ overtitle }}
      </div>
      <div
        class="mb-2 text-lg font-semibold"
        :class="{
          'text-gold': theme === 'gold',
          'text-blue-200': theme === 'silver',
        }"
      >
        {{ title }}
      </div>
      <div class="text-base font-light text-white">
        <slot />
      </div>
    </div>
    <div
      class="absolute inset-0 z-[2] bg-gradient-to-br to-neutral-900 opacity-0 transition-opacity group-hover:opacity-100"
      :class="{
        ' from-gold/20': theme === 'gold',
        ' from-blue-200/20': theme === 'silver',
      }"
    />
    <div class="absolute inset-0 z-[1] bg-gradient-to-br from-neutral-800 to-neutral-900" />
  </div>
</template>

<script>
export default {
  name: 'ac-feature-card',
  props: {
    theme: {
      type: String,
      default: 'default'
    },
    overtitle: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'gold'
    }
  },
  emits: ['over', 'leave']
}
</script>

<style lang="scss" scoped>
.theme-default{
  @apply text-white;
}
.theme-gold{
  @apply text-gold;
}
.theme-silver{
  @apply text-violet-300;
}
</style>
