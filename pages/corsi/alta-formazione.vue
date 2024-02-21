<template>
  <div data-name="page-alta-formazione" class="mt-24">
    <!-- HEADER -->
    <div class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
      <div class="silver-shadow mx-auto w-min rounded-full">
        <ac-shield class="mx-auto mb-2" persistent theme="silver" />
      </div>
      <ac-heading description="Immergerti totalmente nell’alta formazione ha un solo e unico obiettivo: farti emergere nella professione.">
        <template #title>
          <div class="leading-none ">
            <span class="text-blue-200">Alta formazione</span>
          </div>
        </template>
      </ac-heading>
    </div>
    <!-- END HEADER -->

    <!-- INTRO -->
    <div class="mx-auto max-w-5xl px-6 py-10 md:p-20 md:pt-0">
      <div class="mb-8 flex flex-col gap-4 text-lg font-light text-white md:text-2xl">
        <div>
          Il <span class="text-violet-200">Corso di alta formazione in Coordinazione genitoriale</span> di AIGES Academy è un <u>corso di specializzazione</u>, progettato per professionisti e laureati interessati ad acquisire conoscenze, abilità e competenze di livello avanzato.
        </div>
        <div>
          La modalità di svolgimento è <u>online</u>.
        </div>
        <div>
          L’accesso è consentito a un <u>massimo di 30 allievi</u>, al fine di garantire un’attenzione personalizzata e favorire un ambiente di apprendimento interattivo.
        </div>
        <div>
          Non sono previsti esami.
        </div>
      </div>
    </div>
    <!-- END INTRO -->

    <!-- ATTESTATI -->
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:px-0">
      <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-tr  from-neutral-800 to-neutral-900 text-lg text-white " @mouseover="hover='box-1'" @mouseleave="hover=null">
        <div class="absolute -right-2 -top-4 scale-50 lg:right-2 lg:top-2">
          <ac-shield :persistent="hover==='box-1'" theme="silver" />
        </div>
        <div class="p-8 lg:pr-32 ">
          <div class="mb-4 text-xl font-medium">
            ATTESTATO
          </div>
          <div class="mb-8 flex flex-col gap-4 text-base font-light text-white/70 transition-colors duration-300 group-hover:text-white">
            <p class="mb-1 text-base font-light text-white/70 ">
              Il corso rilascia il seguente attestato, con QR Code e certificazione digitale:
            </p>
            <div class="mb-4 flex flex-col gap-2 text-sm text-neutral-400 transition-colors duration-300 group-hover:text-white">
              <div>Attestato di partecipazione in formato elettronico</div>
            </div>
          </div>
        </div>

        <!-- CERTIFICATES -->
        <div class="gradient-highlighs absolute bottom-0 left-0 h-3/4 w-full opacity-0 duration-500 group-hover:opacity-100" />
        <div class="relative -bottom-20 mx-auto -mt-32 ml-6 min-h-60 rounded-xl px-8 text-sm text-neutral-800 transition-all duration-300 ease-cubic-bezier lg:ml-16 lg:group-hover:ml-8 ">
          <div class="absolute flex gap-2">
            <div class="relative transition-all duration-300 ease-cubic-bezier lg:group-hover:-translate-x-0">
              <ac-certificate-card>
                <ac-shield capsule :persistent="hover==='box-1'" theme="silver" />
              </ac-certificate-card>
            </div>
            <div class="relative top-2 -translate-x-32 transition-all duration-300 ease-cubic-bezier lg:group-hover:-translate-x-16 ">
              <ac-certificate-card>
                <ac-shield theme="silver" />
              </ac-certificate-card>
            </div>
          </div>
        </div>
        <!-- END CERTIFICATES -->
      </div>

      <div class="group relative mx-auto overflow-hidden rounded-xl border-t border-neutral-700 bg-gradient-to-br from-blue-200  to-blue-600/50 text-white " @mouseover="hover='box-2'" @mouseleave="hover=null">
        <div class="p-8">
          <div class="mb-4 text-xl font-medium">
            RICONOSCIMENTO E ACCREDITAMENTI
          </div>
          <p class="mb-8 text-base font-light text-white">
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

    <ac-separator class="mb-12 mt-28" />

    <!-- FILOSOFIA -->
    <ac-heading description="Imparare a fondo, metterci poco, lavorare subito: tre semplici azioni che fungono da potente acceleratore per la professione.">
      <template #title>
        <div class="leading-none ">
          <span class="text-blue-200">Filosofia</span>
        </div>
      </template>
    </ac-heading>

    <div class="gradient pb-20">
      <div class="lg-p-0 mx-auto grid max-w-6xl grid-cols-1 gap-4 p-4 lg:grid-cols-3">
        <ac-feature-card
          overtitle="IMPARARE A FONDO"
          title="LA FULL IMMERSION"
          theme="silver"
        >
          Gli allievi possono immergersi totalmente nella didattica, sicuri di emergere con una padronanza assoluta del metodo.
        </ac-feature-card>
        <ac-feature-card
          overtitle="METTERCI POCO"
          title="IL PROGRAMMA BREVE"
          theme="silver"
        >
          Gli allievi possono ottenere il massimo risultato con il minimo sforzo attraverso un processo di apprendimento focalizzato ed efficiente.
        </ac-feature-card>
        <ac-feature-card
          overtitle="LAVORARE SUBITO"
          title="L’APPROCCIO OPERATIVO"
          theme="silver"
        >
          Gli allievi possono immediatamente convertire il know-how in lavoro, sfruttando tutti gli strumenti teorico-pratici a loro disposizione.
        </ac-feature-card>
      </div>
    </div>
    <!-- END FILOSOFIA -->

    <ac-separator class="mt-18 mb-12" />

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

    <ac-testimonals :resources="testimonials" />

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
          text: 'Molto ben organizzato e diretto, con una buona combinazione tra teoria e pratica. Particolarmente utili i tre incontri gratuiti di supervisione individuale sul primo caso di coordinazione genitoriale. Il tutto, potendo usufruire di strumenti di lavoro condivisi, valido e insostituibile aiuto per i neofiti della professione.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.gradient-highlighs{
  background: radial-gradient(80% 100% at 0% 100%, rgba(#9fc7ff, .7) 0%, #17171700 100%),  radial-gradient(80% 100% at 90% 150%, rgba(#b4a5ff, 1) 0%, #17171700 100%);
}
.silver-shadow{
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.4), 0px 20px 48px 0px rgba(#b4a5ff, 0.4);
}
</style>
