<template>
  <div data-name="ac-mosaic" class="mx-auto grid max-w-6xl grid-cols-4 gap-2">
    <div class="col-span-2  rounded-lg bg-neutral-950 " />
    <div class="aspect-square rounded-lg bg-neutral-950 flex items-center justify-center">
      <ac-shield class="scale-150 " experience theme="gold" persistent />
    </div>
    <div class="flex aspect-square flex-col items-center justify-center gap-2 rounded-lg bg-primary p-2 text-center text-neutral-900/90">
      <span class="text-9xl font-bold">4</span>
      <span class="text-lg">Proposte formative <b>imperdibili</b></span>
    </div>
    <div class="aspect-square rounded-lg bg-primary" />
    <div class="col-span-2 rounded-lg bg-neutral-950" />
    <div class="aspect-square rounded-lg bg-neutral-950" />
  </div>
</template>

<script>
export default {
  name: 'ac-mosaic'
}
</script>

<style lang="scss" scoped>
</style>
