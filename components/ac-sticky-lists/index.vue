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
                    <div class="text-5xl font-semibold uppercase text-white" v-html="section.title" />
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-3/5">
              <div :class="`theme-${theme}`" class="shrink-0 text-2xl font-semibold uppercase leading-relaxed" v-html="section.subtitle" />
              <div class="shrink-0 text-xl leading-relaxed text-white" v-html="section.description" />
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
    theme: {
      type: String,
      default: 'default'
    },
    resources: {
      type: Array,
      default: () => [
        {
          title: 'SAPERE',
          subtitle: 'La conoscenza teorica',
          description: 'Gli allievi hanno accesso continuo a contenuti curriculari ricchi e aggiornati, che coprono una vasta gamma di argomenti pertinenti alla disciplina di interesse.'
        },
        {
          title: 'SAPER<br>FARE',
          subtitle: 'L’applicazione pratica',
          description: 'Attraverso gli stage intensivi, gli allievi possono sperimentare ciò che hanno appreso, affinando le capacità di intervento essenziali per un esercizio efficace della professione.'
        },
        {
          title: 'SAPER<br>ESSERE',
          subtitle: 'Lo sviluppo personale',
          description: 'Gli allievi vengono incoraggiati a sviluppare competenze personali, relazionali e sociali utili ad aumentare il loro livello di consapevolezza e responsabilità.'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.theme-default{
  @apply text-primary;
}
.theme-gold{
  @apply text-[#e1b970];
}
.beforeBorder{
  &:before{
    content: '';
    @apply lg:border-t lg:w-full lg:bottom-6 lg:relative lg:block lg:border-neutral-200;
  }
}
</style>
