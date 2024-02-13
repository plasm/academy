<template>
  <div data-name="page-scuola" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
    <div class="mt-20" />

    <ac-heading description="Insegniamo le conoscenze, le abilità e le competenze necessarie per padroneggiare la gestione del conflitto familiare.">
      <template #title>
        <div class="leading-none ">
          Formiamo persone,<br> creiamo specialisti
        </div>
      </template>
    </ac-heading>

    <ac-separator class="my-20" />

    <ac-sticky-resources :resources="w" :distibution-template="1">
      <template #title="{ resource }">
        <div class="text-4xl font-semibold text-primary">
          {{ resource.step }}
        </div>
      </template>
      <template #resource="{ resource }">
        <div class="mb-4 text-4xl font-semibold uppercase text-white">
          {{ resource.title }}
        </div>
        <div class="flex flex-col items-start justify-start gap-2">
          <div class="flex flex-col gap-4  text-xl font-light text-neutral-500" v-html="resource.content" />
        </div>
      </template>
    </ac-sticky-resources>
  </div>
</template>

<script>
export default {
  name: 'page-scuola',
  data () {
    return {
      w: [
        {
          title: 'Chi siamo',
          step: '1W',
          content: `<div>
            Siamo la scuola per specialisti del conflitto familiare.
          </div>
          <div>
            La nostra attività è interamente dedicata alla specializzazione nell’ambito delle ADR per la famiglia.
          </div>
          <div>
            Con noi, lavorano ogni giorno docenti e relatori di altissimo profilo, che hanno alle spalle anni di studio, ricerca ed esperienza, oltre a una forte vocazione per l’insegnamento di nuova generazione.
          </div>`,
        },
        {
          title: 'Cosa facciamo',
          step: '2W',
          content: `<div>
            Promuoviamo Master Experience, alta formazione, aggiornamento professionale e supervisione in mediazione familiare e coordinazione genitoriale, ponendoci come trendsetter nello sviluppo e nel potenziamento delle conoscenze, delle abilità e delle competenze necessarie per eccellere nella gestione delle dinamiche familiari complesse.
          </div>`,
        },
        {
          title: 'Dove insegniamo',
          step: '3W',
          content: `<div>
            Insegniamo nell’ambiente più moderno, dinamico e accessibile di tutti: nel World Wide Web. E, di tanto in tanto, anche nel mondo reale.
          </div>`,
        },
        {
          title: 'Quando possiamo aiutarti',
          step: '4W',
          content: `<div>
            Possiamo aiutarti sempre, ma in particolare quando avverti il desiderio di arricchire il tuo bagaglio tecnico, hai la necessità di migliorare il tuo modo di lavorare o senti il bisogno di cambiare la tua forma mentis.
          </div>`,
        },
        {
          title: 'Perché sceglierci',
          step: '5W',
          content: `<div>
            Immagina che, in un triangolo, ciascun vertice rappresenti un elemento fondamentale per il successo professionale: la formazione, la tutela di categoria e il lavoro.
          </div>

          <div>
            Il primo vertice rappresenta <u>AIGES Academy</u>, il punto di partenza per una formazione di eccellenza, con un’ampia gamma di corsi progettati per diventare specialisti del settore.
          </div>

          <div>
            Il secondo vertice rappresenta <u>MediaCoor</u>, il partner ideale per un’efficace tutela di categoria, con servizi pensati per proteggere gli interessi dei mediatori familiari e dei coordinatori genitoriali.
          </div>

          <div>
            Il terzo vertice rappresenta l’<u>Agenzia Italiana Genitori Separati</u>, la potenziale porta di accesso al lavoro, con il supporto indispensabile per individuare opportunità in linea con le aspirazioni professionali.
          </div>

          <div>
            Insieme, questi tre vertici formano il paradigma del successo, offrendoti un ambiente arricchente, sicuro e collaborativo per perseguire con serenità tutti i tuoi obiettivi.
          </div>`,
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
