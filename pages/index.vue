<template>
  <div class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
    <div class="gradient py-10">
      <ac-heading description="In AIGES Academy, il tuo obiettivo diventa la nostra sfida: ti accompagniamo dall’idea alla realizzazione, verso una carriera professionale nelle ADR per la famiglia.">
        <template #title>
          <div class="leading-none ">
            <span class="text-primary">Trasforma</span><br> la tua passione<br> in un lavoro
          </div>
        </template>
      </ac-heading>
      <!-- MOSAIC -->
      <ac-mosaic />
    </div>
  </div>
</template>
<script>
export default {
  name: 'index-page',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.gradient{
  background: radial-gradient(50.9% 35.5% at 50% 38%, rgba(200, 200, 255, .16) 0%, #17171700 100%);
}</style>
