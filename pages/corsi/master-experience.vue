<template>
  <div data-name="page-master-experience">
    <div class=" mx-auto px-4 pt-10 sm:px-6 md:px-8 2xl:max-w-7xl">
      <ac-shield class="top-4" persistent experience theme="gold" />
      <ac-heading description="Ti conduciamo oltre i confini della formazione convenzionale per vivere un’esperienza trasformativa senza precedenti.">
        <template #title>
          <div class="leading-none ">
            <span class="text-gold">Master Experience</span>
          </div>
        </template>
      </ac-heading>

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

      <div class="mx-auto max-w-5xl p-20 pt-0">
        <div class="mb-8 flex flex-col gap-4 text-2xl font-light text-white">
          <div>Il <span class="text-gold">Master Experience</span> di AIGES Academy è un format strutturato in percorsi di qualifica professionale di durata non inferiore a un anno, progettati per professionisti e laureati interessati ad acquisire conoscenze, abilità e competenze di livello accademico.</div>

          <div>L’iscrizione richiede requisiti di ammissione specifici, che sono soggetti a valutazione.</div>

          <div>L’accesso è riservato a un massimo di trenta allievi, al fine di garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo.</div>

          <div>
            Sono previsti uno o più esami.
          </div>
        </div>
      </div>

      <div class="mx-auto grid max-w-6xl grid-cols-2 gap-6">
        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-tr  from-neutral-800 to-neutral-900 text-lg text-white " @mouseover="hover='box-1'" @mouseleave="hover=null">
          <div class="absolute right-2 top-2 scale-75">
            <ac-shield experience :persistent="hover==='box-1'" theme="gold" />
          </div>
          <div class="p-8 pr-32 ">
            <div class="mb-4 text-xl font-medium">
              GLI ATTESTATI
            </div>
            <div class="mb-8 flex flex-col gap-4 text-base font-light text-white/70">
              <p class="mb-1 text-base font-light text-white/70 ">
                Al termine del programma, vengono rilasciati uno o più attestati, a seconda degli obiettivi prefissati.
              </p>
              <div class="mb-4 flex flex-col gap-2 text-sm text-neutral-500">
                <div>Attestato di idoneità alla pratica guidata e alla supervisione didattica e professionale in formato PDF, con QR Code</div>
                <div>Attestato di professionista negoziatore dei conflitti in formato PDF, con QR Code e certificazione digitale</div>
                <div>Attestato di qualifica professionale in formato cartaceo, con QR Code e certificazione digitale</div>
              </div>
            </div>
          </div>

          <div class="relative -bottom-20 left-4 -mt-32 size-full min-h-60 rounded-xl  px-8 text-sm text-neutral-800">
            <div class="absolute flex gap-2">
              <div class="relative h-[300px] w-[240px] rounded-xl border-t border-neutral-700 bg-gradient-to-tr from-neutral-900 to-neutral-800 shadow-xl transition-all duration-300 ease-cubic-bezier group-hover:-translate-x-0">
                <ac-shield class="relative -left-8 top-4 origin-top-left scale-50" experience theme="gold" />
              </div>
              <div class="relative top-2 h-[300px] w-[240px] -translate-x-32 rounded-xl border-t border-neutral-700 bg-gradient-to-tr from-neutral-900 to-neutral-800 shadow-xl transition-all duration-300 ease-cubic-bezier group-hover:-translate-x-16 ">
                <ac-shield class="relative -left-8 top-4 origin-top-left scale-50" theme="silver" />
              </div>
            </div>
          </div>
        </div>

        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-gold/80  to-gold/30 text-white " @mouseover="hover='box-2'" @mouseleave="hover=null">
          <div class="p-8">
            <div class="mb-4 text-xl font-medium">
              LA MODALITÀ DI SVOLGIMENTO
            </div>
            <p class="mb-8 text-base font-light text-white/70 ">
              Le lezioni si svolgono online, in presenza e/o in modalità blended.
            </p>
          </div>

          <div class="relative -bottom-24 -right-20 -mt-28 w-[90%] rounded-xl bg-white p-8 text-sm text-neutral-800 transition-transform duration-500 ease-cubic-bezier group-hover:-translate-x-4 group-hover:-translate-y-4">
            <div class="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <span class="text-gold">Doloribus consequuntur nesciunt ea quia vel quod.</span>
            </div>
            <img class="overflow-hidden rounded-xl" src="https://i.ytimg.com/vi_webp/EQUoimenMAg/maxresdefault.webp">
          </div>
        </div>
      </div>
    </div>

    <ac-separator class="mb-8 mt-28 " />

    <div class="gradient  pb-20">
      <ac-heading description="Tre semplici azioni che trasformano la formazione in una vera e propria esperienza.">
        <template #title>
          <div class="leading-none ">
            <span class="text-gold">SAPERE, SAPER FARE, SAPER ESSERE</span>
          </div>
        </template>
      </ac-heading>

      <div class="mx-auto grid max-w-6xl grid-cols-3 gap-4">
        <ac-feature-card
          overtitle="SAPERE"
          title="LA CONOSCENZA TEORICA"
        >
          Gli allievi hanno accesso continuo a contenuti curricolari completi e aggiornati, che coprono una vasta gamma di argomenti pertinenti alla disciplina di interesse.
        </ac-feature-card>
        <ac-feature-card
          overtitle="SAPER FARE"
          title="L’APPLICAZIONE PRATICA"
        >
          Gli allievi possono sperimentarsi durante gli stage intensivi, mettendo in pratica ciò che hanno appreso in teoria e verificando concretamente la loro capacità di intervento.
        </ac-feature-card>
        <ac-feature-card
          overtitle="SAPER ESSERE"
          title="LO SVILUPPO PERSONALE"
        >
          Gli allievi vengono incoraggiati a sviluppare competenze personali, relazionali e sociali utili ad aumentare il loro livello di consapevolezza e responsabilità.
        </ac-feature-card>
      </div>
    </div>

    <ac-separator class="mb-20" />

    <ac-heading description="Dalla struttura ai moduli, abbiamo progettato ogni dettaglio con la cura necessaria per garantirti un’esperienza di altissima qualità.">
      <template #title>
        <div class="leading-none ">
          <span class="text-gold">Il programma</span>
        </div>
      </template>
    </ac-heading>

    <div class="mx-auto max-w-5xl p-20 pt-0">
      <div class="text-2xl font-light text-white">
        La struttura prevede <span class="text-4xl font-semibold text-gold">51</span> <u>mezze giornate</u> di lezioni teoriche, <span class="text-4xl font-semibold text-gold">4</span> <u>stage intensivi</u> di esercitazioni pratiche, <span class="text-4xl font-semibold text-gold">8</span> <u>mezze giornate</u> di supervisione didattica e professionale di gruppo e fino a un massimo di <span class="text-4xl font-semibold text-gold">10</span> <u>sessioni</u> di supervisione didattica e professionale individuale sul primo caso di mediazione familiare personalmente condotto, per un totale di <span class="text-4xl font-semibold text-gold">413</span> <u>ore complessive</u> distribuite nell'arco del biennio 2024-2026.
      </div>
    </div>

    <ac-sticky-resources :resources="modules" :limit="4">
      <template #title="{ resource }">
        <div class="relative top-5 flex items-center justify-end gap-2 text-2xl font-semibold uppercase text-white">
          <div class="size-4 rounded-full border-2 border-neutral-600" />
          {{ resource.title }}
        </div>
      </template>
      <template #resource="{ resource }">
        <div class="rounded-xl border-t border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6">
          <div class="text-base font-medium text-gold">
            {{ resource.subtitle }}
          </div>
          <div class="mt-2 text-sm leading-relaxed  text-neutral-200 ">
            {{ resource.description }}
          </div>
          <div v-if="resource.notes" class="mt-5 text-xs leading-normal text-neutral-500" v-html="resource.notes" />
        </div>
      </template>
    </ac-sticky-resources>

    <ac-separator class="my-20" />

    <ac-heading description="Scopri le tappe del viaggio che ti condurranno alla tua destinazione finale: la qualifica professionale di mediatore familiare.">
      <template #title>
        <div class="leading-none ">
          <span class="text-gold">L’agenda</span>
        </div>
      </template>
    </ac-heading>

    <ac-sticky-resources :resources="dates">
      <template #resource="{ resource }">
        <div class="flex flex-col items-start justify-start gap-2">
          <div v-for="(item, index) in resource.dates" :key="index" class="text-2xl text-white">
            {{ item.day }}
          </div>
        </div>
      </template>
    </ac-sticky-resources>

    <ac-separator class="mb-20" />
    <!--
      PRICING -->
    <ac-heading description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, animi possimus? Dignissimos eligendi.">
      <template #title>
        <div class="leading-none ">
          <span class="text-gold">La nostra offerta</span>
        </div>
      </template>
    </ac-heading>

    <ac-pricing class="mt-8" />

    <!--
      PRICING -->

    <ac-separator class="my-20" />

    <div class="mx-auto max-w-6xl  px-4">
      <div class="my-10 text-center text-4xl leading-tight text-white">
        Il <span class="text-gold">Master Experience</span> adotta un approccio olistico alla formazione, armonizzando perfettamente la conoscenza teorica, l’applicazione pratica e lo sviluppo personale.
      </div>
    </div>
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

      <br>
      <div class="mb-2 text-lg font-semibold  text-gold">
        I docenti
      </div>
      <br>
      <div class="text-white">
        Manuela Pagliaroli, avvocata civilista, mediatrice familiare, scolastica, interculturale, civile e commerciale, coordinatrice genitoriale, formatrice e supervisora in mediazione familiare e coordinazione genitoriale, cofondatrice e direttrice scientifica di AIGES Academy, socia fondatrice e coordinatrice del Comitato scientifico di MediaCoor.
      </div>
      <br>
      <div class="text-white">
        Arturo Maniaci, avvocato civilista, professore associato di Istituzioni di diritto privato presso l'Università Statale di Milano.
      </div>
      <br>
      <div class="text-white">
        Sara Trabucchi, avvocata civilista, già consigliera e componente della Commissione famiglia e minori presso il Consiglio dell'Ordine degli Avvocati di Verona.
      </div>
      <br>
      <div class="text-white">
        Clara Veneto, avvocata penalista, responsabile dell'Osservatorio Scuole territoriali e Specializzazione presso l'Unione Camere Penali Italiane, componente della Commissione Reati in ambito familiare della Camera Penale di Roma.
      </div>
      <br>
      <div class="text-white">
        Paolo Palumbo, avvocato canonista, professore straordinario di Diritto canonico ed ecclesiastico e di Psicologia forense canonica presso l'Università Giustino Fortunato, docente di Diritto di famiglia presso la Pontificia Facoltà Teologica dell'Italia Meridionale di Napoli, giudice uditore presso il Tribunale Ecclesiastico Interdiocesano e di Appello di Benevento, presidente di sezione dell'Unione Giuristi Cattolici Italiani.
      </div>
      <br>
      <div class="text-white">
        Alessandra Simonelli, psicologa, psicoterapeuta, professoressa di prima fascia di Psicologia dinamica e Psicopatologia dello sviluppo e direttrice del Dipartimento di Psicologia dello sviluppo e della Socializzazione presso l'Università di Padova.
      </div>
      <br>
      <div class="text-white">
        Cinzia Vitale, sociologa, criminologa, mediatrice familiare, membro del Consiglio direttivo e del Comitato di esperti del Centro per l'UNESCO di Firenze.
      </div>
      <br>
      <div class="text-white">
        Tiziana Fragomeni, avvocata negoziatrice, mediatrice, formatrice in tecniche di negoziazione, mediazione e trasformazione dei conflitti, ideatrice del metodo OASI (Osservare, Ascoltare, Sentire, Integrare).
      </div>
      <br>
      <div class="text-white">
        Isabella Salmeri, mediatrice familiare, coordinatrice genitoriale, formatrice in leadership, intelligenza emotiva, comunicazione strategica e problem-solving.
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

    <div class="relative mt-20 h-48  border-neutral-800  text-white">
      <ac-marquee :duration="60" :repeat="4">
        <div class="relative mx-4 flex justify-start gap-10 lg:mx-6">
          <ac-shield class="top-4" persistent experience capsule theme="gold" />
          <div
            class="whitespace-nowrap text-lg font-semibold transition-colors lg:text-9xl"
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
  background: radial-gradient(50.9% 35.5% at 50% 8%, rgba(200, 200, 255, .16) 0%, #17171700 100%);
}
.gradient{
  background: radial-gradient(50.9% 35.5% at 50% 78%, rgba(200, 200, 255, .16) 0%, #17171700 100%);
}
</style>
