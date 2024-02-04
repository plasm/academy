<template>
  <div data-name="page-corsi" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
    <div class="gradient border-b border-neutral-800 py-10">
      <ac-heading description="Eleva il tuo potenziale con noi: scopri corsi di formazione su misura per il successo professionale e personale. Formazione intelligente, risultati straordinari.">
        <template #title>
          <div class="leading-none ">
            Dove <span class="text-primary">formazione</span><br>e successo<br>si fondono.
          </div>
        </template>

        <div class="mt-10 flex w-full items-center justify-center gap-2">
          <nuxt-link
            to="/sessioni"
            title="Sessioni"
            class="rounded-2xl border border-white/20 bg-white/10 p-1 transition-transform duration-300 ease-out hover:-translate-y-1 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white md:mt-0"
          >
            <div class="rounded-xl bg-primary px-6 py-4 text-xl font-medium text-black">
              Prossime date
            </div>
          </nuxt-link>
        </div>
      </ac-heading>
    </div>
    <div class="mt-10">
      <div class="text-4xl text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, harum ullam, velit, minima nam <span class="text-primary">accusantium</span> voluptas ducimus non quam distinctio sint nihil voluptatibus adipisci aut facilis minus natus nostrum quo?
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-corsi'
}
</script>

<style lang="scss" scoped>
.gradient{
  background: radial-gradient(50.9% 35.5% at 50% 78%, rgba(200, 200, 255, .16) 0%, #17171700 100%);
}
</style>
