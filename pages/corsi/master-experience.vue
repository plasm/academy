<template>
  <div data-name="page-master-experience">
    <div class=" mx-auto px-4 pt-10 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-shield class="top-4" persistent experience theme="gold" />
      <ac-heading description="Ti conduciamo oltre i confini della formazione convenzionale per vivere un’esperienza trasformativa senza precedenti.">
        <template #title>
          <div class="leading-none ">
            <span class="text-gold">Master Experience</span>
          </div>
        </template>
      </ac-heading>

      <div class="mb-20 flex w-full items-center justify-center gap-2">
        <nuxt-link
          to="/calendario"
          title="Calendario"
          class="rounded-2xl border border-white/20 bg-white/10 p-1 transition-transform duration-300 ease-out hover:-translate-y-1 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white md:mt-0"
        >
          <div class="rounded-xl bg-gradient-to-tr from-blue-200 to-white px-6 py-2 text-xl font-medium text-black ">
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
        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-tr  from-neutral-800 to-neutral-900 text-lg text-white " @mouseover="hover='box-1'" @mouseleave="hover=null">
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

        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-gold/80  to-gold/30 text-white " @mouseover="hover='box-2'" @mouseleave="hover=null">
          <div class="p-8">
            <div class="mb-4 text-xl font-medium">
              Online o in presenza
            </div>
            <p class="mb-8 text-base font-light text-white/70 ">
              I contenuti sono definiti dalla direzione scientifica. Le lezioni si svolgono online, in presenza e/o in modalità blended. Sono previsti esami.
            </p>
          </div>

          <div class="relative -bottom-24 -right-20 -mt-28 w-[90%] rounded-xl bg-white p-8 text-sm text-neutral-800 transition-transform duration-500 ease-cubic-bezier group-hover:-translate-x-4 group-hover:-translate-y-4">
            <div class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <span class="text-gold">Doloribus consequuntur nesciunt ea quia vel quod.</span>
            </div>
            <img class="overflow-hidden rounded-xl" src="https://i.ytimg.com/vi_webp/EQUoimenMAg/maxresdefault.webp">
          </div>
        </div>
      </div>
    </div>

    <ac-separator class="mb-8 mt-20" />

    <div class="gradient  pb-20">
      <ac-heading description="Tre semplici azioni che trasformano la formazione in una vera e propria esperienza.">
        <template #title>
          <div class="leading-none ">
            <span class="text-gold">SAPERE, SAPER FARE, SAPER ESSERE</span>
          </div>
        </template>
      </ac-heading>

      <div class="mx-auto grid max-w-6xl grid-cols-3 gap-4">
        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 text-lg text-white">
          <div class="text-lg font-medium text-neutral-700/70">
            SAPERE
          </div>
          <div class="mb-2 text-lg font-semibold  text-gold">
            LA CONOSCENZA TEORICA
          </div>
          <div class="text-base font-light text-white">
            Gli allievi hanno accesso continuo a contenuti curricolari completi e aggiornati, che coprono una vasta gamma di argomenti pertinenti alla disciplina di interesse.
          </div>
        </div>

        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 text-lg text-white">
          <div class="text-lg font-medium text-neutral-700/70">
            SAPER FARE
          </div>
          <div class="mb-2 text-lg font-semibold  text-gold">
            L’APPLICAZIONE PRATICA
          </div>
          <div class="text-base font-light text-white">
            Gli allievi possono sviluppare capacità di intervento essenziali per un esercizio efficace della professione, mettendo in pratica ciò che hanno appreso durante gli stage intensivi.
          </div>
        </div>

        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 text-lg text-white">
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
    </div>

    <ac-separator class="mb-20" />

    <div class="mx-auto max-w-6xl  px-4">
      <div class="my-10 text-center text-4xl leading-tight text-white">
        Il <span class="text-gold">Master Experience</span> adotta un approccio olistico alla formazione, armonizzando perfettamente la conoscenza teorica, l’applicazione pratica e lo sviluppo personale.
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
.gradient-top{
  background: radial-gradient(50.9% 35.5% at 50% 8%, rgba(200, 200, 255, .16) 0%, #17171700 100%);
}
.gradient{
  background: radial-gradient(50.9% 35.5% at 50% 78%, rgba(200, 200, 255, .16) 0%, #17171700 100%);
}
</style>
