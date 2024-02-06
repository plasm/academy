<template>
  <div data-name="page-master-experience">
    <div class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-shield class="top-4" />
      <ac-heading description="Ti conduciamo oltre i confini della formazione convenzionale per un'esperienza trasformativa senza precedenti.">
        <template #title>
          <div class="leading-none ">
            Master <span class="gold">Experience</span>
          </div>
        </template>
      </ac-heading>
      <div class="text-white">
        I Master Experience di AIGES Academy sono percorsi accademici di qualifica, strutturati in primo e secondo livello, della durata minima di un anno, progettati per fornire… a professionisti e laureati. I requisiti di ammissione variano in base alla disciplina e sono soggetti a valutazione. Il numero di allievi è limitato per garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo. I programmi sono definiti dalla direzione scientifica. Le lezioni si svolgono online, in presenza e/o in modalità blended. È previsto un esame per ciascun livello. Il numero di attestati rilasciati varia a seconda degli obiettivi prefissati.
      </div>
    </div>

    <div class="mx-auto my-10 bg-neutral-800 px-4  py-10 sm:px-6 md:px-8 2xl:max-w-7xl">
      <div class=" text-center text-4xl leading-tight text-white">
        <div class="gold font-semibold">
          IL VALORE AGGIUNTO
        </div>
        <div class="text-4xl font-semibold">
          SAPERE, SAPER FARE, SAPER ESSERE
        </div>
        <div class="mt-2 text-xl">
          grazie ai suoi tre elementi chiave, la formula Experience trasforma la formazione in una vera e propria esperienza.
        </div>
      </div>
    </div>

    <ac-sticky-lists theme="gold" />

    <ac-separator />

    <div class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <div class="my-10 text-center text-4xl leading-tight text-white">
        La formula Experience abbraccia un <span class="gold">approccio olistico</span> alla formazione, che integra alla perfezione conoscenza teorica, applicazione pratica e sviluppo personale.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-master-experience'
}
</script>
<style lang="scss" scoped>
.gold{
  @apply text-[#e1b970];
}
</style>
