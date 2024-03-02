<template>
  <div data-name="page-aggiornamento-professionale" class="mt-24">
    <div class="mx-auto mt-10 px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <div class="update-shadow mx-auto w-min rounded-full">
        <ac-shield class="mx-auto mb-2" reflection persistent capsule theme="update" />
      </div>
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
          I <span class="text-violet-300">Corsi di aggiornamento professionale</span> di AIGES Academy sono <u>corsi di formazione continua</u>, destinati ad avvocati, praticanti abilitati, psichiatri, psicologi, assistenti sociali, mediatori familiari, coordinatori genitoriali, counselor, pedagogisti, educatori professionali, criminologi, sociologi e laureati in area umanistica, sanitaria e/o sociale.
        </div>
        <div>
          La modalità di svolgimento è <u>online</u>.
        </div>
        <div>
          Il numero di partecipanti varia da un <u>minimo di 50</u> a un <u>massimo di 500</u>.
        </div>
        <div>
          Non sono previsti esami.
        </div>
      </div>
    </div>

    <ac-separator class="mt-18 mb-12" />

    <!-- PUNTO DI FORZA -->
    <ac-heading description="Scopri un rapporto qualità-prezzo senza eguali e fanne il tuo mantra: massima-resa-minima-spesa-massima-resa-minima-spesa...">
      <template #title>
        <div class="leading-none ">
          Punto di forza
        </div>
      </template>
    </ac-heading>

    <div class="mx-auto max-w-5xl px-6 py-10 md:p-20 md:pt-0">
      <div class="mb-8 flex flex-col gap-4 text-lg font-light text-white md:text-2xl">
        <div>
          In un settore in cui aggiornarsi professionalmente può risultare oneroso e fuori portata, noi abbiamo scelto di andare controcorrente, mettendo a punto un format di insegnamento smart, capace di garantire a tutti l’opportunità di perfezionarsi con <u>relatori di altissima qualità</u> a un <u>prezzo incredibilmente basso</u>.
        </div>
        <div>
          L’obiettivo è semplice: <span class="font-semibold text-violet-300 lg:text-4xl">accessibilità al 100%</span>.
        </div>
      </div>
    </div>

    <ac-separator class="mb-28" />

    <div class="mx-auto max-w-7xl px-6 py-10 md:p-20 md:pt-0">
      <ac-faq :resources="faqs" title="Lorem ipsum, dolor sit amet">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id vel labore corrupti dignissimos dicta, voluptate assumenda delectus. Quas eos voluptate nesciunt asperiores, quod a porro iusto dolores quasi hic.
      </ac-faq>
    </div>
  </div>
</template>
<script>
export default {
  name: 'page-aggiornamento-professionale',
  data () {
    return {
      faqs: [
        {
          active: true,
          question: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id vel labore corrupti dignissimos dicta, voluptate assumenda delectus. Quas eos voluptate nesciunt asperiores, quod a porro iusto dolores quasi hic.'
        },
        {
          active: false,
          question: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id vel labore corrupti dignissimos dicta, voluptate assumenda delectus. Quas eos voluptate nesciunt asperiores, quod a porro iusto dolores quasi hic.'
        },
        {
          active: false,
          question: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id vel labore corrupti dignissimos dicta, voluptate assumenda delectus. Quas eos voluptate nesciunt asperiores, quod a porro iusto dolores quasi hic.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.update-shadow{
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.4), 0px 20px 48px 0px rgba(#b4a5ff, 0.4);
}
</style>
