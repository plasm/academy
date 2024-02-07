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

      <div class="mx-auto grid max-w-6xl grid-cols-2 gap-6">
        <div class="mx-auto rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 px-4 py-14 text-lg text-white sm:px-6 md:px-12">
          <div class="mb-4 text-xl font-medium">
            Il Master Experience
          </div>
          <div class="mb-8 flex flex-col gap-4 text-base font-light text-white/70">
            <div>Il Master Experience di <span class="text-gold">AIGES Academy</span> è un format strutturato in percorsi di qualifica professionale di durata non inferiore a un anno, progettati per professionisti e laureati interessati ad acquisire conoscenze, abilità e competenze di livello accademico.</div>

            <div>L’iscrizione richiede requisiti di ammissione specifici, soggetti a valutazione. L’accesso è riservato a un massimo di trenta allievi, al fine di garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo.</div>

            <div class="text-sm text-white/50">
              Al termine del programma, vengono rilasciati uno o più attestati, a seconda degli obiettivi prefissati.
            </div>
          </div>
        </div>
        <div class="relative mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-gold/80  to-gold/30 px-4 py-14 text-white sm:px-6 md:px-12">
          <div class="mb-4 text-xl font-medium">
            Online o in presenza
          </div>
          <p class="mb-8 text-base font-light text-white/70 ">
            I contenuti sono definiti dalla direzione scientifica. Le lezioni si svolgono online, in presenza e/o in modalità blended. Sono previsti esami.
          </p>
          <div class="absolute w-full rounded-xl bg-white p-8 text-sm text-neutral-800">
            <div class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus consequuntur nesciunt ea quia vel quod.
            </div>
            <img src="https://i.ytimg.com/vi_webp/EQUoimenMAg/maxresdefault.webp">
          </div>
        </div>
      </div>
    </div>

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
