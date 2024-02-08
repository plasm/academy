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
              <p class="mb-8 text-base font-light text-white/70 ">
                Al termine del programma, vengono rilasciati uno o più attestati, a seconda degli obiettivi prefissati.
              </p>
            </div>
          </div>

          <div class="relative -bottom-20 left-4 -mt-32 size-full rounded-xl p-8 text-sm text-neutral-800">
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

    <ac-separator class="mb-8 mt-10" />

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
        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 text-lg text-white">
          <div class="text-lg font-medium text-neutral-700/70">
            SAPERE
          </div>
          <div class="mb-2 text-lg font-semibold  text-gold">
            LA CONOSCENZA TEORICA
          </div>
          <div class="text-base font-light text-white">
            Gli allievi hanno accesso continuo a contenuti curricolari completi e aggiornati, che coprono una vasta gamma di argomenti pertinenti alla disciplina di interesse.
          </div>
        </div>

        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 text-lg text-white">
          <div class="text-lg font-medium text-neutral-700/70">
            SAPER FARE
          </div>
          <div class="mb-2 text-lg font-semibold  text-gold">
            L’APPLICAZIONE PRATICA
          </div>
          <div class="text-base font-light text-white">
            Gli allievi possono sperimentarsi durante gli stage intensivi, mettendo in pratica ciò che hanno appreso in teoria e verificando concretamente la loro capacità di intervento.
          </div>
        </div>

        <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 text-lg text-white">
          <div class="text-lg font-medium text-neutral-700/70">
            SAPER ESSERE
          </div>
          <div class="mb-2 text-lg font-semibold  text-gold">
            LO SVILUPPO PERSONALE
          </div>
          <div class="text-base font-light text-white">
            Gli allievi vengono incoraggiati a sviluppare competenze personali, relazionali e sociali utili ad aumentare il loro livello di consapevolezza e responsabilità.
          </div>
        </div>
      </div>
    </div>

    <ac-separator class="mb-20" />

    <div class="mx-auto max-w-6xl  px-4">
      <div class="my-10 text-center text-4xl leading-tight text-white">
        Il <span class="text-gold">Master Experience</span> adotta un approccio olistico alla formazione, armonizzando perfettamente la conoscenza teorica, l’applicazione pratica e lo sviluppo personale.
      </div>

      <div class="mb-2 text-lg font-semibold  text-gold">
        Cos’è la mediazione familiare
      </div>
      <br>
      <div class="text-white">
        La mediazione familiare è uno strumento di risoluzione alternativa delle controversie, focalizzato sulla famiglia, riservato e non valutativo, rivolto alla coppia che ha la necessità di riorganizzare le relazioni familiari, in vista o a seguito di una separazione, di un divorzio o della cessazione di un rapporto a qualsiasi titolo costituito. L'intervento prevede che, attraverso un percorso volontario della durata media di dieci incontri, un professionista terzo, imparziale e neutrale, qualificato con una specifica formazione teorico-pratica, aiuti la coppia a raggiungere un accordo direttamente negoziato, rispondente ai bisogni e agli interessi di tutti i soggetti coinvolti, con particolare attenzione alla tutela dei figli (se presenti) e al mantenimento della comune responsabilità genitoriale.
      </div>
      <br>
      <div class="mb-2 text-lg font-semibold  text-gold">
        A chi è destinato
      </div>
      <br>
      <div class="text-white">
        I destinatari sono avvocati, praticanti abilitati, psichiatri, psicologi, assistenti sociali, coordinatori genitoriali, counselor, pedagogisti, educatori professionali, criminologi, sociologi e laureati in area umanistica, sanitaria e/o sociale.
      </div>
      <br>
      <div class="mb-2 text-lg font-semibold  text-gold">
        Programma
      </div>
      <br>
      <div class="text-white">
        Modulo 1 - Tecniche e pratica di mediazione familiare
        <br>
        Modulo 2 - Diritto sostanziale della famiglia
        <br>
        Modulo 3 - Diritto processuale della famiglia
        <br>
        Modulo 4 - Diritto penale della famiglia
        <br>
        Modulo 5 - Diritto matrimoniale e processuale canonico
        <br>
        Modulo 6 - Psicologia del conflitto
        <br>
        Modulo 7 - Sociologia della devianza e della famiglia
        <br>
        Modulo 8 - Tecniche di negoziazione e di gestione del conflitto
        <br>
        Modulo 9 - Leadership
        <br>
        Modulo 10 - Supervisione didattica e professionale di gruppo e individuale
        <br>
      </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-master-experience',
  data () {
    return {
      hover: ''
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
