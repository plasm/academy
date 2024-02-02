<template>
  <div data-name="ac-mosaic" class="mx-auto grid max-w-6xl grid-cols-4 gap-2">
    <div class="col-span-2  rounded-lg bg-neutral-800 " />
    <div class="aspect-square rounded-lg bg-neutral-800" />
    <div class="gradient-primary flex aspect-square flex-col items-center justify-center gap-2 rounded-lg p-2 text-center text-neutral-900/90">
      <span class="text-9xl font-bold">4</span>
      <span class="text-lg">Proposte formative <b>imperdibili</b></span>
    </div>
    <div class="aspect-square rounded-lg bg-primary" />
    <div class="col-span-2 rounded-lg bg-neutral-800" />
    <div class="aspect-square rounded-lg bg-neutral-800" />
  </div>
</template>

<script>
export default {
  name: 'ac-mosaic'
}
</script>

<style lang="scss" scoped>
.gradient-primary{
  background: rgb(242,254,113);
  background: -moz-linear-gradient(52deg, rgba(242,254,113,1) 49%, rgba(255,255,181,1) 100%);
  background: -webkit-linear-gradient(52deg, rgba(242,254,113,1) 49%, rgba(255,255,181,1) 100%);
  background: linear-gradient(52deg, rgba(242,254,113,1) 49%, rgba(255,255,181,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#f2fe71",endColorstr="#ffffb5",GradientType=1);
}
</style>
