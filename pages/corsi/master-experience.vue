<template>
  <div data-name="page-master-experience">
    <div class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <!--  -->
      <div class="group relative mx-auto size-28 rounded-full bg-black p-1 hover:p-2 transition-all duration-300 hover:scale-125">
        <div class="gradient-gold blend absolute left-0 top-0 z-10 flex size-full items-center justify-center rounded-full" />
        <div class="relative size-full rounded-full bg-gray-500 p-1">
          <div class="relative size-full rounded-full bg-black">
            <div class="relative   size-full overflow-hidden rounded-full opacity-50 invert">
              <div class="filigrana" />
            </div>
            <div class="absolute left-0 top-0 flex  size-full items-center justify-center text-neutral-500 transition-all duration-300 group-hover:scale-[80%] ">
              <ac-logo size="large" />
              <div class="absolute size-full animate-spin-slow">
                <ac-payoff class=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-0 transition-all delay-100 duration-200 group-hover:scale-[220%] group-hover:opacity-100 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <ac-heading description="Ti conduciamo oltre i confini della formazione convenzionale per un'esperienza trasformativa senza precedenti.">
        <template #title>
          <div class="leading-none ">
            Master <span class="text-primary">Experience</span>
          </div>
        </template>
      </ac-heading>
      <div class="text-white">
        I Master Experience di AIGES Academy sono percorsi accademici di qualifica, strutturati in primo e secondo livello, della durata minima di un anno, progettati per fornire… a professionisti e laureati. I requisiti di ammissione variano in base alla disciplina e sono soggetti a valutazione. Il numero di allievi è limitato per garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo. I programmi sono definiti dalla direzione scientifica. Le lezioni si svolgono online, in presenza e/o in modalità blended. È previsto un esame per ciascun livello. Il numero di attestati rilasciati varia a seconda degli obiettivi prefissati.
      </div>
    </div>

    <div class="mx-auto my-10 bg-neutral-800 px-4  py-10 sm:px-6 md:px-8 2xl:max-w-7xl">
      <div class=" text-center text-4xl leading-tight text-white">
        <div class="font-semibold text-primary">
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

    <ac-sticky-lists />

    <ac-separator />

    <div class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <div class="my-10 text-center text-4xl leading-tight text-white">
        La formula Experience abbraccia un <span class="text-primary">approccio olistico</span> alla formazione, che integra alla perfezione conoscenza teorica, applicazione pratica e sviluppo personale.
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
.filigrana{
  position: absolute;
  border-radius: inherit;
  inset: 0px;
  background-size: 25px;
  background-image: url(https://framerusercontent.com/images/L9gN6bRCSKWIBJkYc7iGxMOn07w.svg);
  border: 0px;
  background-repeat: repeat;
  background-position: center center;
}
.blend{
  mix-blend-mode: overlay;
  overflow: hidden;
}
.gradient-gold{
  @apply bg-primary;
  // background: conic-gradient(from 0deg at 50% 50%, rgb(254, 229, 163) 0deg, rgb(225, 185, 112) 90.8108deg, rgb(209, 161, 78) 115.217deg, rgb(255, 236, 162) 178.144deg, rgb(208, 140, 33) 217.297deg, rgb(255, 227, 164) 269.861deg, rgb(210, 159, 78) 308.425deg, rgb(254, 229, 163) 360deg);
}
</style>
