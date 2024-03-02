<template>
  <div class="mt-20">
    <div data-name="page-organizzazione" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-heading description="Progettazione, didattica, ricerca, sviluppo, networking: scopri chi sono i leader che ogni giorno plasmano l’identità di AIGES Academy.">
        <template #title>
          <div class="leading-none ">
            Direzione
          </div>
        </template>
      </ac-heading>

      <section>
        <div class="mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16">
          <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8">
            <li>
              <ac-user-card title="Fabrizio Dell’Anna" role="Direttore commerciale" image="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            </li>
            <li>
              <ac-user-card title="Manuela Pagliaroli" role="Direttrice scientifica" image="https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80" />
            </li>
          </ul>
        </div>
      </section>
    <!-- // END Direzione -->
    </div>

    <ac-separator class="my-20" />

    <div data-name="page-organizzazione" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-heading description="Ridefinisci la tua idea di sapere, lasciandoti ispirare dalle straordinarie qualità della nostra squadra. Inizia col conoscerla.">
        <template #title>
          <div class="leading-none ">
            Docenti
          </div>
        </template>
      </ac-heading>

      <ul role="list" class="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-5 py-12 md:px-12 lg:grid-cols-3 lg:px-16">
        <li v-for="(teacher, index) in teachers" :key="index">
          <ac-team-card :title="teacher.title" :role="teacher.role">
            {{ teacher.description }}
          </ac-team-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import teachers from '@/json/teachers.json'
export default {
  name: 'page-organizzazione',
  data () {
    return {
      teachers
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
