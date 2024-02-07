<template>
  <div data-name="page-master-experience">
    <div class="mx-auto mt-10 px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-shield class="top-4" persistent experience theme="gold" />
      <ac-heading description="Ti conduciamo oltre i confini della formazione convenzionale per vivere un’esperienza trasformativa senza precedenti.">
        <template #title>
          <div class="leading-none ">
            <span class="gold">Master Experience</span>
          </div>
        </template>
      </ac-heading>

      <div class="mb-20 flex w-full items-center justify-center gap-2">
        <nuxt-link
          to="/calendario"
          title="Calendario"
          class="rounded-2xl border border-white/20 bg-white/10 p-1 transition-transform duration-300 ease-out hover:-translate-y-1 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white md:mt-0"
        >
          <div class="rounded-xl bg-gold px-6 py-4 text-xl font-medium text-black ">
            Calendario
          </div>
        </nuxt-link>
      </div>

      <div class="mx-auto max-w-5xl p-20 pt-0">
        <div class="mb-8 flex flex-col gap-4 text-2xl font-light text-white">
          <div>Il Master Experience di <span class="text-gold">AIGES Academy</span> è un format strutturato in percorsi di qualifica professionale di durata non inferiore a un anno, progettati per professionisti e laureati interessati ad acquisire conoscenze, abilità e competenze di livello accademico.</div>

          <div>L’iscrizione richiede requisiti di ammissione specifici, soggetti a valutazione. L’accesso è riservato a un massimo di trenta allievi, al fine di garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo.</div>
        </div>
      </div>

      <div class="mx-auto grid max-w-6xl grid-cols-2 gap-6">
        <div class="group relative mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 text-lg text-white " @mouseover="hover='box-1'" @mouseleave="hover=null">
          <div class="absolute right-2 top-2 scale-75">
            <ac-shield experience :persistent="hover==='box-1'" theme="gold" />
          </div>
          <div class="p-8 pr-32 ">
            <div class="mb-4 text-xl font-medium">
              Attestato e riconoscimenti
            </div>
            <div class="mb-8 flex flex-col gap-4 text-base font-light text-white/70">
              <p class="mb-8 text-base font-light text-white/70 ">
                Al termine del programma, vengono rilasciati uno o più attestati, a seconda degli obiettivi prefissati.
              </p>
            </div>
          </div>

          <div class="relative -bottom-20 left-4 -mt-32 size-full rounded-xl  p-8 text-sm text-neutral-800">
            <div class="absolute flex gap-2">
              <div class="h-[300px] w-[240px] rounded-xl bg-neutral-200 shadow-xl transition-all duration-300 ease-cubic-bezier group-hover:-translate-x-0" />
              <div class="h-[300px] w-[240px] -translate-x-20 rounded-xl bg-neutral-300 shadow-xl transition-all duration-300 ease-cubic-bezier group-hover:-translate-x-0" />
              <div class="h-[300px] w-[240px] -translate-x-40 rounded-xl bg-neutral-400 shadow-xl transition-all duration-300 ease-cubic-bezier group-hover:-translate-x-0" />
            </div>
            <!-- <img src="https://i.ytimg.com/vi_webp/EQUoimenMAg/maxresdefault.webp"> -->
          </div>
        </div>

        <div class="group relative mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-gold/80  to-gold/30 text-white " @mouseover="hover='box-2'" @mouseleave="hover=null">
          <div class="p-8">
            <div class="mb-4 text-xl font-medium">
              Online o in presenza
            </div>
            <p class="mb-8 text-base font-light text-white/70 ">
              I contenuti sono definiti dalla direzione scientifica. Le lezioni si svolgono online, in presenza e/o in modalità blended. Sono previsti esami.
            </p>
          </div>

          <div class="relative -bottom-24 -right-20 -mt-28 w-full rounded-xl bg-white p-8 text-sm text-neutral-800 transition-transform duration-500 ease-cubic-bezier group-hover:-translate-x-4 group-hover:-translate-y-4">
            <div class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequuntur nesciunt ea quia vel quod.
            </div>
            <img src="https://i.ytimg.com/vi_webp/EQUoimenMAg/maxresdefault.webp">
          </div>
        </div>
      </div>
    </div>

    <ac-separator class="mb-8 mt-20" />

    <ac-heading description="Grazie ai suoi tre plus, il Master Experience trasforma la formazione in una vera e propria esperienza.">
      <template #title>
        <div class="leading-none ">
          <span class="gold">SAPERE, SAPER FARE, SAPER ESSERE</span>
        </div>
      </template>
    </ac-heading>

    <div class="mx-auto grid max-w-6xl grid-cols-3 gap-4">
      <div>
        <div class="text-lg font-medium text-neutral-700/70">
          SAPERE
        </div>
        <div class="mb-2 text-lg font-semibold  text-gold">
          LA CONOSCENZA TEORICA
        </div>
        <div class="text-base font-light text-white">
          Gli allievi hanno accesso continuo a contenuti curriculari ricchi e aggiornati, che coprono una vasta gamma di argomenti pertinenti alla disciplina di interesse.
        </div>
      </div>

      <div>
        <div class="text-lg font-medium text-neutral-700/70">
          SAPER FARE
        </div>
        <div class="mb-2 text-lg font-semibold  text-gold">
          L’APPLICAZIONE PRATICA
        </div>
        <div class="text-base font-light text-white">
          Attraverso gli stage intensivi, gli allievi possono sperimentare ciò che hanno appreso, affinando le capacità di intervento essenziali per un esercizio efficace della professione.
        </div>
      </div>

      <div>
        <div class="text-lg font-medium text-neutral-700/70">
          SAPER ESSERE
        </div>
        <div class="mb-2 text-lg font-semibold  text-gold">
          LO SVILUPPO PERSONALE
        </div>
        <div class="text-base font-light text-white">
          Gli allievi vengono incoraggiati a sviluppare competenze personali, relazionali e sociali utili ad aumentare il loro livello di consapevolezza e responsabilità.
        </div>
      </div>
    </div>
    <!--
    <div class="mx-auto my-6 max-w-6xl rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 px-4 py-14 sm:px-6 md:px-12">
      <div class=" text-center text-4xl leading-tight text-white">
        <div class="font-semibold text-white">
          I PLUS
        </div>
        <div class="gold text-4xl font-semibold">
          SAPERE, SAPER FARE, SAPER ESSERE
        </div>
        <div class="mt-2 text-xl">
          Grazie ai suoi tre plus, il Master Experience trasforma la formazione in una vera e propria esperienza.
        </div>
      </div>
    </div> -->

    <!-- <ac-sticky-lists theme="gold" /> -->

    <ac-separator class="mb-28 mt-20" />

    <div class="mx-auto max-w-6xl  px-4">
      <div class="my-10 text-center text-4xl leading-tight text-white">
        La <span class="gold">Formula Experience</span> abbraccia un approccio olistico alla formazione, che integra alla perfezione conoscenza teorica, applicazione pratica e sviluppo personale.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-master-experience',
  data () {
    return {
      hover: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.gold{
  @apply text-[#e1b970];
}
</style>
