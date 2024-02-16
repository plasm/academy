<template>
  <div data-name="ac-certificate-card" class="relative h-[300px] w-[240px] rounded-xl border-t border-neutral-700 bg-gradient-to-tr from-neutral-900 to-neutral-800 shadow-xl">
    <div class="relative left-4 top-4 flex origin-top-left scale-50 justify-start">
      <slot />
    </div>
    <div class="absolute top-4 right-4 text-white/50 w-10 h-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3,11H5V13H3V11M11,5H13V9H11V5M9,11H13V15H11V13H9V11M15,11H17V13H19V11H21V13H19V15H21V19H19V21H17V19H13V21H11V17H15V15H17V13H15V11M19,19V15H17V19H19M15,3H21V9H15V3M17,5V7H19V5H17M3,3H9V9H3V3M5,5V7H7V5H5M3,15H9V21H3V15M5,17V19H7V17H5Z" /></svg>
    </div>
    <div class="relative left-6 flex h-full w-3/4 flex-col items-start justify-start gap-2">
      <div class="relative h-1 w-1/6 rounded-full bg-white/30" />
      <div class="relative h-1 w-full rounded-full bg-white/30" />
      <div class="relative h-1 w-full rounded-full bg-white/30" />
      <div class="relative h-1 w-full rounded-full bg-white/30" />
      <div class="relative h-1 w-3/4 rounded-full bg-white/30" />
      <div class="relative h-1 w-3/4 rounded-full bg-white/30" />
      <div class="relative h-1 mt-4 w-2/6 rounded-full bg-white/30 right-0" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ac-certificate-card'
}
</script>

<style lang="scss" scoped>
</style>
