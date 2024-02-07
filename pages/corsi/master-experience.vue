<template>
  <div data-name="page-master-experience">
    <div class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-shield class="top-4" persistent experience theme="gold" />
      <ac-heading description="Ti conduciamo oltre i confini della formazione convenzionale per vivere un’esperienza trasformativa senza precedenti.">
        <template #title>
          <div class="leading-none ">
            <span class="gold">Master Experience</span>
          </div>
        </template>
      </ac-heading>
      <div class="text-white">
        Il Master Experience di AIGES Academy è un format strutturato in percorsi di qualifica professionale di durata non inferiore a un anno, progettati per professionisti e laureati interessati ad acquisire conoscenze, abilità e competenze di livello accademico. L’iscrizione richiede requisiti di ammissione specifici, soggetti a valutazione. L’accesso è riservato a un massimo di trenta allievi, al fine di garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo. I contenuti sono definiti dalla direzione scientifica. Le lezioni si svolgono online, in presenza e/o in modalità blended. Sono previsti esami. Al termine del programma, vengono rilasciati uno o più attestati, a seconda degli obiettivi prefissati.
      </div>
    </div>

    <div class="mx-auto my-10 bg-neutral-800 px-4  py-10 sm:px-6 md:px-8 2xl:max-w-7xl">
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
    </div>

    <ac-sticky-lists theme="gold" />

    <ac-separator />

    <div class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <div class="my-10 text-center text-4xl leading-tight text-white">
        La <span class="gold">Formula Experience</span> abbraccia un approccio olistico alla formazione, che integra alla perfezione conoscenza teorica, applicazione pratica e sviluppo personale.
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
