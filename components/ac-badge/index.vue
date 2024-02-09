<template>
  <div data-name="ac-badge" class="rounded bg-neutral-800" :class="`ac-badge-${size}`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ac-badge',
  props: {
    size: {
      type: String,
      default: 'base',
      validator: (v) => {
        return ['xs', 'sm', 'base', 'lg', 'xl']
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ac-badge-xs{
  @apply text-[11px] px-2 py-1.5 leading-none text-neutral-400;
}
.ac-badge-sm{
  @apply text-sm px-2 py-1 leading-none text-neutral-400;
}
.ac-badge-base{
  @apply text-base px-2 py-1 leading-none text-neutral-400;
}
.ac-badge-lg{
  @apply text-lg px-3 py-1.5 leading-none text-neutral-400;
}
.ac-badge-xl{
  @apply text-xl px-3 py-1.5 leading-none text-neutral-400;
}
</style>
