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
            Siamo l’academy per specialisti del conflitto familiare.
          </div>
          <div>
            La nostra attività è interamente focalizzata sulla formazione specialistica nell'ambito delle ADR per la famiglia.
          </div>
          <div>
            Con noi, lavorano ogni giorno docenti e relatori di altissimo profilo, che hanno alle spalle anni di studio, ricerca ed esperienza, oltre a una naturale propensione per l’insegnamento di nuova generazione.
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
          title: 'Dove ci troviamo',
          step: '3W',
          content: `<div>
            Ci troviamo in un luogo moderno, accogliente e di facile accesso per i professionisti desiderosi di arricchire le proprie conoscenze, abilità e competenze: siamo online, nel cuore del World Wide Web. E, di tanto in tanto, anche in presenza.
          </div>`,
        },
        {
          title: 'Quando possiamo aiutarti',
          step: '4W',
          content: `<div>
            Possiamo aiutarti sia nell’acquisizione di nuove competenze, sia nel perfezionamento di quelle già acquisite.
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
