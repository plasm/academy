<template>
  <div data-name="ac-sticky-lists">
    <section id="feature-five" aria-labelledby="feature-five" class="relative">
      <div class="mx-auto max-w-7xl px-8 py-12 md:px-12 lg:px-16 xl:px-36 ">
        <div class="flex w-full flex-col gap-12">
          <div v-for="(section, index) in resources" :key="index" class="w-full gap-4 md:gap-12 lg:flex">
            <div class="lg:w-2/5 ">
              <div
                class="pt-30 pb-30 relative lg:sticky lg:top-36"
              >
                <div>
                  <div class="mb-4 lg:mb-0">
                    <div class="text-6xl font-semibold uppercase text-white" v-html="section.title" />
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-3/5">
              <div class="shrink-0 text-2xl leading-relaxed text-white" v-html="section.description" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ac-sticky-lists',
  props: {
    align: {
      type: String,
      default: 'left'
    },
    resources: {
      type: Array,
      default: () => [
        {
          title: 'SAPERE',
          description: '– rappresenta la base della conoscenza teorica. Gli allievi hanno accesso a contenuti curriculari ricchi e aggiornati, creati da specialisti del settore, che coprono una vasta gamma di argomenti pertinenti alla disciplina di interesse.'
        },
        {
          title: 'SAPER<br>FARE',
          description: '– si concentra sull’applicazione pratica delle conoscenze acquisite. Gli stage intensivi permettono agli allievi di mettere in pratica ciò che hanno imparato, acquisendo capacità operative essenziali per il successo nella loro carriera professionale.'
        },
        {
          title: 'SAPER<br>ESSERE',
          description: '– è un elemento distintivo dei Master Experience. Gli allievi vengono incoraggiati a sviluppare competenze personali, relazionali e sociali utili non solo ad affrontare le sfide professionali, ma anche a diventare individui consapevoli e responsabili nella società.'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.beforeBorder{
  &:before{
    content: '';
    @apply lg:border-t lg:w-full lg:bottom-6 lg:relative lg:block lg:border-neutral-200;
  }
}
</style>
