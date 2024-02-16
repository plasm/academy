<template>
  <div data-name="page-alta-formazione">
    <div class="mx-auto mt-10 px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-shield class="top-4" persistent theme="silver" />
      <ac-heading description="Immergerti totalmente nell’alta formazione ha un solo e unico obiettivo: farti emergere nella professione.">
        <template #title>
          <div class="leading-none ">
            <span class="text-blue-200">Alta formazione</span>
          </div>
        </template>
      </ac-heading>
    </div>

    <div class="mx-auto max-w-5xl px-6 py-10 md:p-20 md:pt-0">
      <div class="mb-8 flex flex-col gap-4 text-lg font-light text-white md:text-2xl">
        <div>
          Il <span class="text-violet-200">Corso di alta formazione in Coordinazione genitoriale</span> è un <u>corso di specializzazione</u>, progettato per professionisti e laureati interessati ad acquisire conoscenze, abilità e competenze di livello avanzato.
        </div>
        <div>
          La modalità di svolgimento è <u>online</u> al 100%.
        </div>
        <div>
          L’accesso è riservato a un <u>massimo di trenta allievi</u>, al fine di garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo.
        </div>
        <div>
          Non sono previsti esami.
        </div>
      </div>
    </div>

    <!-- ATTESTATI -->
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
      <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-tr  from-neutral-800 to-neutral-900 text-lg text-white " @mouseover="hover='box-1'" @mouseleave="hover=null">
        <div class="absolute -right-2 -top-4 scale-50 lg:right-2 lg:top-2">
          <ac-shield :persistent="hover==='box-1'" theme="silver" />
        </div>
        <div class="p-8 lg:pr-32 ">
          <div class="mb-4 text-xl font-medium">
            ATTESTATO
          </div>
          <div class="mb-8 flex flex-col gap-4 text-base font-light text-white/70">
            <p class="mb-1 text-base font-light text-white/70 ">
              Il corso rilascia il seguente attestato, con QR Code e certificazione digitale:
            </p>
            <div class="mb-4 flex flex-col gap-2 text-sm text-neutral-500">
              <div>Attestato di partecipazione in formato elettronico</div>
            </div>
          </div>
        </div>

        <div class="relative -bottom-20 left-4 -mt-32 size-full min-h-60 rounded-xl  px-8 text-sm text-neutral-800">
          <div class="absolute flex gap-2">
            <div class="relative h-[300px] w-[240px] rounded-xl border-t border-neutral-700 bg-gradient-to-tr from-neutral-900 to-neutral-800 shadow-xl transition-all duration-300 ease-cubic-bezier group-hover:-translate-x-0">
              <ac-shield class="relative -left-8 top-4 origin-top-left scale-50" capsule theme="silver" />
            </div>
            <div class="relative top-2 h-[300px] w-[240px] -translate-x-32 rounded-xl border-t border-neutral-700 bg-gradient-to-tr from-neutral-900 to-neutral-800 shadow-xl transition-all duration-300 ease-cubic-bezier group-hover:-translate-x-16 ">
              <ac-shield class="relative -left-8 top-4 origin-top-left scale-50" theme="silver" />
            </div>
          </div>
        </div>
      </div>

      <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-violet-200  to-blue-700/50 text-white " @mouseover="hover='box-2'" @mouseleave="hover=null">
        <div class="p-8">
          <div class="mb-4 text-xl font-medium">
            RICONOSCIMENTO E ACCREDITAMENTI
          </div>
          <p class="mb-8 text-base font-light text-white/70 ">
            Il corso è riconosciuto da <u>MediaCoor</u>, secondo gli standard previsti dalle linee guida per la coordinazione genitoriale AFCC 2017-2019.
          </p>
        </div>

        <div class="relative -bottom-16 -right-1/2 -mt-28 w-[90%] -translate-x-1/2 rounded-xl bg-white p-8 text-sm text-neutral-800 transition-transform duration-500 ease-cubic-bezier group-hover:-translate-x-4 group-hover:-translate-y-4 lg:-bottom-24 lg:-right-20 lg:translate-x-0">
          <div class="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <span class="text-violet-400/70">Doloribus consequuntur nesciunt ea quia vel quod.</span>
          </div>
          <img class="overflow-hidden rounded-xl" src="https://i.ytimg.com/vi_webp/EQUoimenMAg/maxresdefault.webp">
        </div>
      </div>
    </div>
    <!-- END ATTESTATI -->

    <ac-separator class="my-28 " />

    <!-- PROGRAMMA -->
    <ac-heading description="Dalla struttura ai moduli, abbiamo progettato ogni dettaglio con la cura necessaria per garantirti un’esperienza di altissima qualità.">
      <template #title>
        <div class="leading-none ">
          <span class="text-blue-200">Programma</span>
        </div>
      </template>
    </ac-heading>

    <div class="mx-auto max-w-5xl px-6 py-10 md:p-20 md:pt-0">
      <div class="mb-8 flex flex-col gap-4 text-lg font-light text-white md:text-2xl">
        <div>
          Il programma prevede <span class="font-semibold text-violet-200 lg:text-4xl">4</span> <u>giornate full immersion consecutive</u> di lezioni teoriche ed esercitazioni pratiche, per un totale di <span class="font-semibold text-violet-200 lg:text-4xl">32</span> <u>ore complessive</u>.
        </div>
      </div>
    </div>

    <ac-sticky-resources :resources="modules" :limit="4" :distibution-template="2">
      <template #title="{ resource }">
        <div class="relative mb-4 flex items-center gap-2 text-2xl font-semibold uppercase text-white lg:top-5 lg:mb-0 lg:justify-end">
          <div class="size-4 rounded-full border-2 border-neutral-600" />
          {{ resource.title }}
        </div>
      </template>
      <template #resource="{ resource }">
        <div class="rounded-xl border-t border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6">
          <div class="text-base font-medium text-blue-200">
            {{ resource.subtitle }}
          </div>
          <div class="mt-2 text-sm leading-relaxed  text-white">
            {{ resource.description }}
          </div>
          <div v-if="resource.notes" class="mt-5 text-xs leading-normal text-neutral-400" v-html="resource.notes" />
        </div>
      </template>
    </ac-sticky-resources>
    <!-- END PROGRAMMA -->

    <ac-separator class="my-28 " />

    <!-- TESTIMONIAL -->
    <ac-heading description="Trai ispirazione dalle testimonianze dei nostri ex allievi e aggiungi una tappa perfetta al tuo percorso di specializzazione.">
      <template #title>
        <div class="leading-none ">
          <span class="text-blue-200">Testimonianze</span>
        </div>
      </template>
    </ac-heading>
    <div class="relative overflow-auto rounded-xl px-8 ">
      <div class="hide-h-scrollbar relative flex w-full snap-x snap-mandatory items-center gap-6 overflow-x-auto">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="relative w-1/2 shrink-0 snap-center">
          <ac-testimonial :author="testimonial.author">
            {{ testimonial.text }}
          </ac-testimonial>
        </div>
      </div>
    </div>
    <!-- END TESTIMONIAL -->

    <ac-separator class="my-28 " />

    <!--
      PRICING -->
    <ac-heading description="Noi abbiamo pensato a tante soluzioni, a te basta sceglierne una: quella che si adatta meglio alle tue esigenze finanziarie.">
      <template #title>
        <div class="leading-none ">
          <span class="text-blue-200">Iscrizione</span>
        </div>
      </template>
    </ac-heading>

    <ac-pricing-alta-formazione class="mt-8" />

    <!--
      // END PRICING -->

    <!--
    <div class="mx-auto max-w-6xl  px-4">
      <div class="mb-2 text-lg font-semibold  text-blue-200">
        A chi è destinato
      </div>
      <br>
      <div class="text-white">
        I destinatari sono avvocati, praticanti abilitati, psichiatri, psicologi, assistenti sociali, mediatori familiari, counselor, pedagogisti, educatori professionali, criminologi, sociologi e laureati in area umanistica, sanitaria e/o sociale.
      </div>
      <br>

      <br>
      <div class="mb-2 text-lg font-semibold  text-blue-200">
        I docenti
      </div>
      <br>
      <div class="text-white">
        Arturo Maniaci, avvocato civilista, professore associato di Istituzioni di diritto privato presso l’Università Statale di Milano.
      </div>
      <br>
      <div class="text-white">
        Romolo Donzelli, avvocato civilista e cassazionista, professore ordinario di Diritto processuale civile presso l’Università di Macerata, docente presso la Scuola di specializzazione per le professioni legali delle Università di Camerino e Macerata.
      </div>
      <br>
      <div class="text-white">
        Manuela Pagliaroli, avvocata civilista, mediatrice familiare, scolastica, interculturale, civile e commerciale, coordinatrice genitoriale, formatrice e supervisora in mediazione familiare e coordinazione genitoriale, cofondatrice e direttrice scientifica di AIGES Academy, socia fondatrice e coordinatrice del Comitato scientifico di MediaCoor.
      </div>
      <br>

      <br>
      <div class="mb-2 text-lg font-semibold  text-blue-200">
        L’iscrizione
      </div>
      <br>
      <div class="text-white">
        L’iscrizione può essere perfezionata alle seguenti condizioni, compilando l’apposito modulo, reperibile al link https://rebrand.ly/5b6018:
        <br>
        <br>
        ● iscrizione ridotta: € 585,00, mediante pagamento in un’unica soluzione;
        <br>
        ● iscrizione standard: € 650,00, mediante pagamento in un’unica soluzione o con dilazione da tre a cinque rate mensili senza interessi.
        <br>
        <br>
        La riduzione è riservata agli ex allievi di AIGES Academy e ai soci di MediaCoor.
        <br>
        <br>
        All’iscrizione perfezionata mediante pagamento in un’unica soluzione sono applicabili i seguenti sconti condizionati:
        <br>
        <br>
        ● 5% per i soci di AIAF Campania;
        <br>
        ● 3% per gli iscritti agli ordini professionali.
        <br>
        <br>
        Gli sconti condizionati non sono cumulabili.
        <br>
        <br>
        L'iscrizione comprende i seguenti benefit:
        <br>
        <br>
        ● tre incontri gratuiti di supervisione individuale sul primo caso di coordinazione genitoriale;
        <br>
        ● un anno di iscrizione a MediaCoor alla metà del costo.
        <br>
        <br>
        Il termine ultimo per perfezionare l'iscrizione è il 10 maggio 2024, salvo in caso di esaurimento dei posti.
      </div>
      <br>

      <br>
      <div class="mb-2 text-lg font-semibold  text-blue-200">
        Riconoscimento e accreditamento
      </div>
      <br>
      <div class="text-white">
        Il riconoscimento è stato concesso da MediaCoor, secondo gli standard previsti dalle linee guida per la coordinazione genitoriale AFCC 2017-2019.
        <br>
        <br>
        L’accreditamento è stato richiesto al CNF per gli avvocati e i praticanti abilitati e a MediaCoor per i mediatori familiari.
      </div>

    </div> -->

    <ac-separator class="mb-10 mt-20" />

    <div class="relative mt-20 flex h-40 items-center  text-white  lg:h-48">
      <ac-marquee :duration="60" :repeat="4">
        <div class="relative mx-4 flex items-center justify-start gap-10 lg:mx-6">
          <div class="relative scale-75 lg:scale-100">
            <ac-shield persistent capsule theme="silver" />
          </div>
          <div
            class="whitespace-nowrap text-4xl font-semibold transition-colors lg:text-9xl"
          >
            Formula Full Immersion
          </div>
        </div>
      </ac-marquee>
    </div>
  </div>
</template>

<script>
import modules from '@/json/courses/modules-alta-formazione.json'

export default {
  name: 'page-alta-formazione',
  data () {
    return {
      modules,
      hover: '',
      testimonials: [
        {
          author: 'Alessandra Moscato',
          text: 'Completo e altamente formativo. Nonostante il grande impegno richiesto dalla formula full immersion, avrei voluto continuare a godere della coinvolgente esperienza offerta da Manuela Pagliaroli.'
        },
        {
          author: 'Mariarita Ruccia',
          text: 'Un’esperienza che può riassumersi nella frase di J Rice: «Fai oggi quello che gli altri non faranno e ottieni domani quello che gli altri non otterranno». Forte innovazione nei contenuti, grande preparazione dei docenti e una continua interazione capace di generare un proficuo scambio professionale. Lieta di avervi partecipato.'
        },
        {
          author: 'Raffaella Troiano',
          text: 'Emozionante e arricchente, tenuto da docenti di grande spessore umano e professionale. Bellissimo!'
        },
        {
          author: 'Mara Mazzara',
          text: 'Molto ben organizzato e diretto, con una buona combinazione tra teoria e pratica. Il post-vendita è particolarmente utile, garantendo un prezioso affiancamento in supervisione gratuita nella fase iniziale dell’incarico (preparazione all’incontro informativo, verifica dell’incontro informativo e preparazione al primo incontro, verifica del primo incontro e preparazione allo svolgimento del processo). Il tutto, potendo usufruire di strumenti di lavoro condivisi, valido e insostituibile aiuto per chi si cimenta per la prima volta in questo ruolo.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
