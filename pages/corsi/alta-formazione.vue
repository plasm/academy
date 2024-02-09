<template>
  <div data-name="page-alta-formazione">
    <div class="mx-auto mt-10 px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-shield class="top-4" persistent theme="silver" />
      <ac-heading description="Immergerti totalmente nell’alta formazione ha un solo e unico obiettivo: farti emergere nella professione.">
        <template #title>
          <div class="leading-none ">
            Alta formazione
          </div>
        </template>
      </ac-heading>
    </div>

    <div class="mx-auto max-w-5xl p-20 pt-0">
      <div class="mb-8 flex flex-col gap-4 text-2xl font-light text-white">
        <div>L’<span class="text-blue-200">alta formazione</span> di AIGES Academy è un format strutturato in corsi di specializzazione di durata non superiore a sessanta ore, progettati per professionisti e laureati interessati ad acquisire conoscenze, abilità e competenze di livello avanzato.</div>
        <div>
          L’iscrizione non richiede requisiti di ammissione specifici. L’accesso è riservato a un <u>massimo di trenta allievi</u>, al fine di garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo. I contenuti sono definiti dalla direzione scientifica. Le lezioni si svolgono online, in presenza e/o in modalità blended.
        </div>
        <div>
          <span class="text-violet-200">Non sono previsti esami</span>.<br>
          <u>Al termine del programma, viene rilasciato un attestato</u>.
        </div>
      </div>
    </div>

    <div class="relative mt-20 h-48  border-neutral-800  text-white">
      <ac-marquee :duration="60" :repeat="4">
        <div class="relative mx-4 flex justify-start gap-10 lg:mx-6">
          <ac-shield class="top-4" persistent capsule theme="silver" />
          <div
            class="whitespace-nowrap text-lg font-semibold transition-colors lg:text-9xl"
          >
            Formula Full Immersion
          </div>
        </div>
      </ac-marquee>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-alta-formazione'
}
</script>

<style lang="scss" scoped>

</style>
