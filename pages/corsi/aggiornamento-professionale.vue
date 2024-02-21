<template>
  <div data-name="page-aggiornamento-professionale">
    <div class="mx-auto mt-10 px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <!--  -->
      <div class="content-logo mx-auto size-32 rounded-full p-2">
        <div class="relative size-full animate-spin-slow">
          <svg class="transform-origin-center-center absolute inset-0 size-full origin-center text-xs font-semibold  tracking-widest" viewBox="0 0 100 100" overflow="visible"><path id="curve-wnxkz4" d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50" stroke-width="none" fill="transparent" /><text><textPath href="#curve-wnxkz4" startOffset="0" dominant-baseline="Hanging" style="fill: rgb(255, 255, 255);">AGGIORNAMENTO · PROFESSIONALE ·</textPath></text></svg>
        </div>

        <div class="logo-container pixelated absolute size-16 rounded-full">
          <div class="h-8 w-full">
            <svg class="size-full text-[#855aed]" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 21"><path d="M 3 10.5 L 10 17.5 L 25 3.5" fill="transparent" stroke-width="6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </div>
        </div>
      </div>
      <!--  -->
      <ac-heading description="Grazie ai nostri corsi di formazione continua, puoi costruire il puzzle del tuo profilo curricolare. Un pezzo alla volta, secondo le tue esigenze.">
        <template #title>
          <div class="leading-none ">
            Aggiornamento professionale
          </div>
        </template>
      </ac-heading>
    </div>

    <div class="mx-auto max-w-5xl px-6 py-10 md:p-20 md:pt-0">
      <div class="mb-8 flex flex-col gap-4 text-lg font-light text-white md:text-2xl">
        <div>
          I <span class="text-violet-400">Corsi di aggiornamento professionale</span> di AIGES Academy sono <u>corsi di formazione continua</u>, progettati per professionisti e laureati interessati a perfezionare le loro conoscenze, abilità e competenze.
        </div>
        <div>
          La modalità di svolgimento è <u>online</u>.
        </div>
        <div>
          L’accesso è consentito a un <u>minimo di 50 partecipanti</u> e a un <u>massimo di 500</u>.
        </div>
        <div>
          Non sono previsti esami.
        </div>
      </div>
    </div>
  </div>
</template>

    <!--
    <div>
      Punto di forza
    </div>
    <div>
      Scopri un rapporto qualità-prezzo senza eguali e fanne il tuo mantra: massima-resa-minima-spesa-massima-resa-minima-spesa...
    </div>
    <div>
      In un settore in cui aggiornarsi professionalmente può spesso risultare oneroso e fuori dalla portata di molti, noi abbiamo scelto di andare controcorrente, mettendo a sistema un format di insegnamento smart, capace di garantire a tutti l’opportunità di perfezionarsi con relatori di altissimo livello a un costo incredibilmente basso. L’obiettivo è semplice: rendere i corsi di formazione continua estremamente accessibili. E non si tratta di mercanteggiamento, ma di sostenibilità.
    </div>
    </div> -->

<script>
export default {
  name: 'page-aggiornamento-professionale'
}
</script>

<style lang="scss" scoped>
.content-logo{
  place-content: center;
    align-items: center;
    background: linear-gradient(180deg, #a300e8 0%,  #4800ff 100%);
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.4), 0px 20px 48px 0px rgba(81, 34, 221, 0.4), 0px 0px 0px 4px hsla(0, 0%, 100%, 0.25);
    display: flex;
    flex: 0 0 auto;
    flex-flow: row;
    overflow: hidden;
    transform: perspective(1200px);
    will-change: transform;
    position: relative;
}
.logo-container{
  place-content: center;
    align-items: center;
    background: linear-gradient(rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.9) 100%);
    box-shadow: rgba(0, 153, 153, 0.3) 0px 10px 20px 0px;
    display: flex;
    flex: 0 0 auto;
    flex-flow: row;
    overflow: hidden;
    will-change: transform;
    z-index: 1;
}
.pixelated{
  image-rendering: pixelated;
}
</style>
