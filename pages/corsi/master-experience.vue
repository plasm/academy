<template>
  <div data-name="page-master-experience" class="mt-20">
    <ac-shield class="mx-auto mb-2" persistent experience theme="gold" />
    <ac-heading description="Ti conduciamo oltre i confini della formazione convenzionale per vivere un’esperienza trasformativa senza precedenti.">
      <template #title>
        <div class="leading-none ">
          <span class="text-gold">Master Experience</span>
        </div>
      </template>
    </ac-heading>

    <div class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <div class="mb-20 flex w-full items-center justify-center gap-2">
        <nuxt-link
          to="/calendario"
          title="Calendario"
          class="rounded-2xl border border-white/20 bg-white/10 p-1 transition-transform duration-300 ease-out hover:-translate-y-1 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white md:mt-0"
        >
          <div class="rounded-xl bg-gradient-to-tr from-blue-200 to-white px-6 py-2 text-xl font-medium text-black ">
            Calendario
          </div>
        </nuxt-link>
      </div>

      <div class="mx-auto max-w-5xl px-6 py-10 md:p-20 md:pt-0">
        <div class="mb-8 flex flex-col gap-4 text-lg font-light text-white md:text-2xl">
          <div>
            Il <span class="text-gold">Master Experience in Mediazione familiare</span> è un <u>corso di qualifica professionale</u>, progettato per professionisti e laureati interessati ad acquisire conoscenze, abilità e competenze di livello accademico.
          </div>
          <div>
            L’iscrizione richiede il superamento di un <u>colloquio motivazionale</u> con la direttrice scientifica.
          </div>
          <div>
            La modalità di svolgimento è <u>blended</u>: online per il 70% e in presenza per il 30%.
          </div>
          <div>
            L’accesso è riservato a un <u>massimo di trenta allievi</u>, al fine di garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo.
          </div>
          <div>
            Sono previsti <u>due esami</u>: uno di primo livello e uno di secondo livello.
          </div>
        </div>
      </div>

      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-tr  from-neutral-800 to-neutral-900 text-lg text-white " @mouseover="hover='box-1'" @mouseleave="hover=null">
          <div class="absolute -right-2 -top-4 scale-50 lg:right-2 lg:top-2">
            <ac-shield experience :persistent="hover==='box-1'" theme="gold" />
          </div>
          <div class="p-8 lg:pr-32 ">
            <div class="mb-4 text-xl font-medium">
              ATTESTATI
            </div>
            <div class="mb-8 flex flex-col gap-4 text-base font-light text-white/70">
              <p class="mb-1 text-base font-light text-white/70 ">
                Il corso rilascia i seguenti attestati, con QR Code e certificazione digitale:
              </p>
              <div class="mb-4 flex flex-col gap-2 text-sm text-neutral-500">
                <div>Attestato di idoneità alla pratica guidata e alla supervisione didattica e professionale in formato elettronico</div>
                <div>Attestato di professionista negoziatore dei conflitti in formato elettronico</div>
                <div>Attestato di qualifica professionale in formato cartaceo</div>
              </div>
            </div>
          </div>
          <!-- CERTIFICATES -->
          <div class="relative -bottom-20 mx-auto -mt-32 ml-6 min-h-60 rounded-xl px-8 text-sm text-neutral-800 transition-all duration-300 ease-cubic-bezier lg:ml-16 lg:group-hover:ml-8 ">
            <div class="absolute flex gap-2">
              <div class="relative transition-all duration-300 ease-cubic-bezier lg:group-hover:-translate-x-0">
                <ac-certificate-card>
                  <ac-shield capsule theme="gold" />
                </ac-certificate-card>
              </div>
              <div class="relative top-2 -translate-x-32 transition-all duration-300 ease-cubic-bezier lg:group-hover:-translate-x-16 ">
                <ac-certificate-card>
                  <ac-shield theme="gold" />
                </ac-certificate-card>
              </div>
            </div>
          </div>
          <!-- END CERTIFICATES -->
        </div>

        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-gold/80  to-gold/30 text-white " @mouseover="hover='box-2'" @mouseleave="hover=null">
          <div class="p-8">
            <div class="mb-4 text-xl font-medium">
              RICONOSCIMENTO E ACCREDITAMENTI
            </div>
            <p class="mb-8 text-base font-light text-white/70 ">
              Il corso è riconosciuto da <u>MediaCoor</u>, secondo gli standard previsti dalla norma UNI 11644 del 30/08/2016.
            </p>
          </div>

          <div class="relative -bottom-16 -right-1/2 -mt-28 w-[90%] -translate-x-1/2 rounded-xl bg-white p-8 text-sm text-neutral-800 transition-transform duration-500 ease-cubic-bezier group-hover:-translate-x-4 group-hover:-translate-y-4 lg:-bottom-24 lg:-right-20 lg:translate-x-0">
            <div class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <span class="text-gold">Doloribus consequuntur nesciunt ea quia vel quod.</span>
            </div>
            <img class="overflow-hidden rounded-xl" src="https://i.ytimg.com/vi_webp/EQUoimenMAg/maxresdefault.webp">
          </div>
        </div>
      </div>
    </div>

    <ac-separator class="my-28 " />

    <ac-heading description="Sapere, saper fare, saper essere: tre semplici azioni che trasformano la formazione in una vera e propria esperienza.">
      <template #title>
        <div class="leading-none ">
          <span class="text-gold">Filosofia</span>
        </div>
      </template>
    </ac-heading>

    <div class="gradient pb-20">
      <div class="lg-p-0 mx-auto grid max-w-6xl grid-cols-1 gap-4 p-4 lg:grid-cols-3">
        <ac-feature-card
          overtitle="SAPERE"
          title="LA CONOSCENZA TEORICA"
        >
          Gli allievi possono accedere a contenuti curricolari completi e aggiornati, che coprono tutti gli argomenti pertinenti alle discipline.
        </ac-feature-card>
        <ac-feature-card
          overtitle="SAPER FARE"
          title="L’APPLICAZIONE PRATICA"
        >
          Gli allievi possono verificare la loro capacità di intervento durante gli stage intensivi, mettendo in pratica ciò che hanno appreso in teoria.
        </ac-feature-card>
        <ac-feature-card
          overtitle="SAPER ESSERE"
          title="LO SVILUPPO PERSONALE"
        >
          Gli allievi possono sviluppare competenze personali, relazionali e sociali utili ad aumentare il loro livello di consapevolezza e responsabilità.
        </ac-feature-card>
      </div>
    </div>

    <ac-separator class="mb-20" />

    <ac-heading description="Dalla struttura ai moduli, abbiamo progettato ogni dettaglio con la cura necessaria per garantirti un’esperienza di altissima qualità.">
      <template #title>
        <div class="leading-none ">
          <span class="text-gold">Programma</span>
        </div>
      </template>
    </ac-heading>

    <div class="mx-auto max-w-5xl px-6 py-10 md:p-20 md:pt-0">
      <div class="mb-8 flex flex-col gap-4 text-lg font-light text-white md:text-2xl">
        <div>
          Il programma prevede <span class="font-semibold text-gold lg:text-4xl">51</span> <u>mezze giornate</u> di lezioni teoriche, <span class="font-semibold text-gold lg:text-4xl">4</span> <u>stage intensivi</u> di esercitazioni pratiche, <span class="font-semibold text-gold lg:text-4xl">8</span> <u>mezze giornate</u> di supervisione didattica e professionale di gruppo e fino a un massimo di <span class="font-semibold text-gold lg:text-4xl">10</span> <u>sessioni</u> di supervisione didattica e professionale individuale sul primo caso di mediazione familiare personalmente condotto, per un totale di <span class="font-semibold text-gold lg:text-4xl">413</span> <u>ore complessive</u> distribuite nell'arco del biennio 2024-2026.
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
          <div class="text-base font-medium text-gold">
            {{ resource.subtitle }}
          </div>
          <div class="mt-2 text-sm leading-relaxed  text-white">
            {{ resource.description }}
          </div>
          <div v-if="resource.notes" class="mt-5 text-xs leading-normal text-neutral-400" v-html="resource.notes" />
        </div>
      </template>
    </ac-sticky-resources>

    <ac-separator class="my-20" />

    <ac-heading description="Scopri le tappe del viaggio che ti condurranno alla tua destinazione finale: la qualifica professionale di mediatore familiare.">
      <template #title>
        <div class="leading-none ">
          <span class="text-gold">Agenda</span>
        </div>
      </template>
    </ac-heading>

    <!--
      Dates -->
    <ac-sticky-resources :resources="dates" :limit="4" :distibution-template="2">
      <template #title="{ resource }">
        <div class="text-4xl font-medium uppercase text-white">
          {{ resource.month }}
        </div>
        <div class="text-xl font-semibold text-gold">
          {{ resource.year }}
        </div>
      </template>
      <template #resource="{ resource }">
        <div class="flex flex-col items-start justify-start gap-2">
          <div v-for="(item, index) in resource.dates" :key="index" class="mb-3 text-2xl">
            <div class=" text-base font-medium uppercase text-gold">
              {{ item.teacher }}
            </div>
            <div class="text-sm text-neutral-400">
              {{ item.subject }}
            </div>
            <div class="mt-2 text-sm uppercase text-white">
              {{ item.day }} <span class="ml-2 text-neutral-400">{{ item.time }}</span>
            </div>
            <div class="mt-2 flex items-center justify-start gap-2 uppercase">
              <ac-badge size="xs">
                {{ item.hours }}
              </ac-badge>
              <ac-badge size="xs">
                {{ item.mode }}
              </ac-badge>
            </div>
          </div>
        </div>
      </template>
    </ac-sticky-resources>
    <!--
      // END Dates -->

    <ac-separator class="mb-20" />
    <!--
      PRICING -->
    <ac-heading description="Noi abbiamo pensato a tante soluzioni, a te basta sceglierne una: quella che si adatta meglio alle tue esigenze economiche.">
      <template #title>
        <div class="leading-none ">
          <span class="text-gold">Iscrizione</span>
        </div>
      </template>
    </ac-heading>

    <ac-pricing-master class="mt-8" />

    <!--
      // END PRICING -->

    <!--
    <div class="mx-auto max-w-6xl  px-4">

      <div class="mb-2 text-lg font-semibold  text-gold">
        A chi è destinato
      </div>
      <br>
      <div class="text-white">
        I destinatari sono avvocati, praticanti abilitati, psichiatri, psicologi, assistenti sociali, coordinatori genitoriali, counselor, pedagogisti, educatori professionali, criminologi, sociologi e laureati in area umanistica, sanitaria e/o sociale.
      </div>
      <br>

      <div class="mb-2 text-lg font-semibold  text-gold">
        L'iscrizione
      </div>
      <br>
      <div class="text-white">
        L'iscrizione può essere perfezionata alle seguenti condizioni, compilando l'apposito modulo, reperibile al link https://rebrand.ly/dff6g2m.
        <br>
        <br>
        ● iscrizione ridotta: € 3.150,00, mediante pagamento in un'unica soluzione;
        <br>
        ● iscrizione standard: € 3.500,00, mediante pagamento in un'unica soluzione o con dilazione da tre a dieci rate mensili senza interessi.
        <br>
        <br>
        La riduzione è riservata agli ex allievi di AIGES Academy e ai soci di MediaCoor.
        <br>
        <br>
        L'iscrizione può essere opzionata mediante il pagamento di € 200,00. L'opzione dà all'allievo il diritto di seguire le prime due lezioni in calendario, senza alcun obbligo di proseguimento. Se l'allievo decide di proseguire, l'opzione viene considerata come acconto sull'importo totale e viene richiesto il saldo dell'importo residuo, con pagamento alle condizioni precedentemente indicate. Se l'allievo decide di non proseguire, l'opzione non viene rimborsata, salvo in caso di annullamento dell'evento da parte di AIGES Academy.
        <br>
        <br>
        All'iscrizione perfezionata con pagamento in un'unica soluzione sono applicabili i seguenti sconti condizionati:
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
        ● fino a un massimo di dieci sessioni di supervisione didattica e professionale individuale sul primo caso di mediazione familiare personalmente condotto;
        <br>
        ● un anno di iscrizione a MediaCoor alla metà del costo.
        <br>
        <br>
        Il termine ultimo per perfezionare l'iscrizione è il 30 agosto 2024, salvo in caso di esaurimento dei posti.
      </div>
      <br>
      <div class="mb-2 text-lg font-semibold  text-gold">
        Riconoscimento e accreditamento
      </div>
      <br>
      <div class="text-white">
        Il riconoscimento è stato concesso da MediaCoor, secondo gli standard previsti dalla norma UNI 11644 del 30 agosto 2016.
        <br>
        <br>
        L'accreditamento è stato richiesto al CNF per gli avvocati e i praticanti abilitati e a MediaCoor per i coordinatori genitoriali.
      </div>
    </div> -->
    <ac-separator class="mb-10 mt-20" />

    <div class="relative mt-20 flex h-40 items-center  text-white  lg:h-48">
      <ac-marquee :duration="60" :repeat="4">
        <div class="relative mx-4 flex items-center justify-start gap-10 lg:mx-6">
          <div class="relative scale-75 lg:scale-100">
            <ac-shield persistent experience capsule theme="gold" />
          </div>
          <div
            class="whitespace-nowrap text-4xl font-semibold transition-colors lg:text-9xl"
          >
            Formula Experience
          </div>
        </div>
      </ac-marquee>
    </div>
  </div>
</template>

<script>
import dates from '@/json/courses/dates.json'
import modules from '@/json/courses/modules-master.json'
export default {
  name: 'page-master-experience',
  data () {
    return {
      hover: '',
      dates: dates['master-experience'],
      modules,
    }
  }
}
</script>
<style lang="scss" scoped>
.gradient-top{
  background: radial-gradient(50% 50% at 50% 0%, rgb(63, 52, 30) 0%, #17171700 100%);
}
.gradient{
  background: radial-gradient(50.9% 35.5% at 50% 78%, rgba(200, 200, 255, .16) 0%, #17171700 100%);
}
</style>
