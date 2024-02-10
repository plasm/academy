<template>
  <div class="mt-20">
    <div data-name="page-organizzazione" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-heading description="Progettazione, didattica, ricerca, sviluppo, networking: il nostro team è costruito per eccellere in ogni ambito.">
        <template #title>
          <div class="leading-none ">
            In classe e fuori,<br> solo fuoriclasse
          </div>
        </template>
      </ac-heading>

      <!-- Direzione -->
      <section>
        <div class="mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16">
          <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-2 lg:gap-x-8">
            <li>
              <ac-user-card title="Fabrizio Dell'Anna" role="Fondatore e direttore commerciale" image="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            </li>
            <li>
              <ac-user-card title="Manuela Pagliaroli" role="Fondatrice e direttrice scientifica" image="https://images.unsplash.com/photo-1602434228300-a645bce6891b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1639&amp;q=80" />
            </li>
          </ul>
        </div>
      </section>
    <!-- // END Direzione -->
    </div>

    <ac-separator class="my-20" />

    <div data-name="page-organizzazione" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-heading description="Lorem ipsum dolor sit amet consectetur adipisicing elit.">
        <template #title>
          <div class="leading-none ">
            I docenti
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
export default {
  name: 'page-organizzazione',
  data () {
    return {
      teachers: [
        {
          title: 'Romolo Donzelli',
          description: 'Avvocato civilista e cassazionista, professore ordinario di Diritto processuale civile presso l’Università di Macerata, docente presso la Scuola di specializzazione per le professioni legali delle Università di Camerino e Macerata.',
          role: 'Avvocato civilista e cassazionista'
        },
        {
          title: 'Tiziana Fragomeni',
          description: 'Avvocata negoziatrice, mediatrice, formatrice in tecniche di negoziazione, mediazione e trasformazione dei conflitti, ideatrice del metodo OASI (Osservare, Ascoltare, Sentire, Integrare).',
          role: 'Avvocata negoziatrice'
        },
        {
          title: 'Arturo Maniaci',
          description: 'Avvocato civilista, professore associato di Istituzioni di diritto privato presso l\'Università Statale di Milano.',
          role: 'Avvocata civilista'
        },
        {
          title: 'Manuela Pagliaroli',
          description: 'Avvocata civilista, mediatrice familiare, scolastica, interculturale, civile e commerciale, coordinatrice genitoriale, formatrice e supervisora in mediazione familiare e coordinazione genitoriale, cofondatrice e direttrice scientifica di AIGES Academy, socia fondatrice e coordinatrice del Comitato scientifico di MediaCoor.',
          role: 'Avvocata civilista'
        },
        {
          title: 'Paolo Palumbo',
          description: 'Avvocato canonista, professore straordinario di Diritto canonico ed ecclesiastico e di Psicologia forense canonica presso l\'Università Giustino Fortunato, docente di Diritto di famiglia presso la Pontificia Facoltà Teologica dell\'Italia Meridionale di Napoli, giudice uditore presso il Tribunale Ecclesiastico Interdiocesano e di Appello di Benevento, presidente di sezione dell\'Unione Giuristi Cattolici Italiani.',
          role: 'Avvocato canonista'
        },
        {
          title: 'Isabella Salmeri',
          description: 'Mediatrice familiare, coordinatrice genitoriale, formatrice in leadership, intelligenza emotiva, comunicazione strategica e problem-solving.',
          role: 'Mediatrice familiare'
        },
        {
          title: 'Alessandra Simonelli',
          description: 'Psicologa, psicoterapeuta, professoressa di prima fascia di Psicologia dinamica e Psicopatologia dello sviluppo e direttrice del Dipartimento di Psicologia dello sviluppo e della Socializzazione presso l\'Università di Padova.',
          role: 'Psicologa'
        },
        {
          title: 'Sara Trabucchi',
          description: 'Avvocata civilista, già consigliera e componente della Commissione famiglia e minori presso il Consiglio dell\'Ordine degli Avvocati di Verona.',
          role: 'Avvocata civilista'
        },
        {
          title: 'Clara Veneto',
          description: 'Avvocata penalista, responsabile dell\'Osservatorio Scuole territoriali e Specializzazione presso l\'Unione Camere Penali Italiane, componente della Commissione Reati in ambito familiare della Camera Penale di Roma.',
          role: 'Avvocata penalista'
        },
        {
          title: 'Cinzia Vitale',
          description: 'Sociologa, criminologa, mediatrice familiare, membro del Consiglio direttivo e del Comitato di esperti del Centro per l\'UNESCO di Firenze.',
          role: 'Sociologa'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
