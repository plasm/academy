<template>
  <section data-name="ac-pricing">
    <div
      class="relative mx-auto w-full items-center px-4 md:px-12 lg:px-16"
      :class="{
        'max-w-7xl': !!$slots.default,
        'max-w-5xl': !$slots.default
      }"
    >
      <div
        class="mx-auto grid grid-cols-1 items-start gap-6"
        :class="{
          'lg:grid-cols-3': !!$slots.default,
          'lg:grid-cols-2': !$slots.default
        }"
      >
        <div v-if="!!$slots.default" class="lg:pr-12">
          <slot />
        </div>
        <slot name="cards" />
        <!-- <section class="mb-10 flex flex-col px-6 sm:px-8 lg:mb-0 lg:py-8">
          <h3 class="mt-5 text-lg uppercase" :class="[`price-text-${theme}`]">
            iscrizione ridotta
          </h3>
          <p class="mt-2 text-sm text-white">
            Pagamento in un'unica soluzione
          </p>
          <div class="mt-2 text-sm text-neutral-400">
            Agevolazione riservata agli ex allievi di AIGES Academy e ai soci di MediaCoor
          </div>
          <p class="order-first text-5xl font-light tracking-tight text-white">
            € 3.150,00
          </p>
          <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm text-white">
            <li class="flex items-center">
              <span class="ml-4 text-sm"><u>Benefit inclusi</u></span>
            </li>
            <li class="flex items-center">
              <div class="ml-4 text-sm text-neutral-400">
                <div>Fino a un massimo di dieci sessioni di supervisione didattica e professionale individuale sul primo caso di mediazione familiare personalmente condotto</div>
              </div>
            </li>
            <li class="flex items-center">
              <div class="ml-4 text-sm text-neutral-400">
                <div>Un anno di iscrizione a MediaCoor alla metà del costo</div>
              </div>
            </li>
          </ul>
          <a class="inline-flex mt-8 w-full items-center justify-center rounded-full border-2 border-white bg-white px-6 py-2.5 text-center text-sm text-black duration-200 hover:border-white hover:bg-transparent hover:text-white focus:outline-none focus-visible:outline-white focus-visible:ring-white" href="https://rebrand.ly/dff6g2m">
            Iscriviti
          </a>
        </section>
        <section class="flex flex-col rounded-3xl border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 px-6 py-8 sm:px-8">
          <h3 class="mt-5 text-lg uppercase" :class="[`price-text-${theme}`]">
            iscrizione standard
          </h3>
          <p class="mt-2 text-sm text-neutral-100">
            Pagamento in un'unica soluzione o con dilazione da tre a dieci rate mensili senza interessi
          </p>
          <div class="mt-2 text-sm text-neutral-400">
            Sconto del 5% per i soci di AIAF Campania<br>
            Sconto del 3% per gli iscritti agli ordini professionali
          </div>
          <p class="order-first text-5xl font-light tracking-tight text-white">
            € 3.500,00
          </p>
          <ul role="list" class="order-last mt-10 flex flex-col gap-y-3 text-sm text-white">
            <li class="flex items-center">
              <span class="ml-4 text-sm"><u>Benefit inclusi</u></span>
            </li>
            <li class="flex items-center">
              <div class="ml-4 text-sm text-neutral-400">
                <div>Fino a un massimo di dieci sessioni di supervisione didattica e professionale individuale sul primo caso di mediazione familiare personalmente condotto</div>
              </div>
            </li>
            <li class="flex items-center">
              <div class="ml-4 text-sm text-neutral-400">
                <div>Un anno di iscrizione a MediaCoor alla metà del costo</div>
              </div>
            </li>
          </ul>
          <a class="mt-8 inline-flex w-full items-center  justify-center rounded-full border-2 px-6 py-2.5 text-center text-sm duration-200 focus:outline-none focus-visible:outline-white focus-visible:ring-white" href="https://rebrand.ly/dff6g2m" :class="[`price-button-${theme}`]">
            Iscriviti
          </a>
        </section> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ac-pricing',
}
</script>

<style lang="scss" scoped>
</style>
