<template>
  <div data-name="page-corsi" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
    <div class="gradient border-b border-neutral-800 py-10">
      <ac-heading description="Progettiamo itinerari di apprendimento unici, appositamente pensati per accelerare il tuo percorso personale e professionale.">
        <template #title>
          <div class="leading-none ">
            Non semplici corsi,<br> ma pietre miliari
          </div>
        </template>

        <div class="mt-10 flex w-full items-center justify-center gap-2">
          <nuxt-link
            to="/calendario"
            title="Calendario"
            class="rounded-2xl border border-white/20 bg-white/10 p-1 transition-transform duration-300 ease-out hover:-translate-y-1 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white md:mt-0"
          >
            <div class="rounded-xl bg-primary px-6 py-4 text-xl font-medium text-black">
              Calendario
            </div>
          </nuxt-link>
        </div>
      </ac-heading>
    </div>
    <div class="mx-auto my-10 max-w-4xl">
      <div class="grid grid-cols-2 gap-6">
        <nuxt-link to="/corsi/master-experience" title="Master experience">
          <ac-course-card v-model="activeCourse" type="master" @over="activeCourse='master'" @leave="activeCourse=null">
            <template #logo>
              <ac-shield experience theme="gold" :persistent="activeCourse==='master'" />
            </template>
            <div class="mb-4 text-3xl font-semibold">
              Master experience
            </div>
            <div class="leading-normal text-neutral-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tempore maxime exercitationem sit, non delectus possimus quis reiciendis expedita repudiandae, molestiae praesentium laboriosam in neque nam quo quam doloremque dolorem!
            </div>
          </ac-course-card>
        </nuxt-link>

        <nuxt-link to="/corsi/alta-formazione" title="Alta formazione">
          <ac-course-card v-model="activeCourse" type="alta-formazione" @over="activeCourse='alta-formazione'" @leave="activeCourse=null">
            <template #logo>
              <ac-shield theme="silver" :persistent="activeCourse==='alta-formazione'" />
            </template>
            <div class="mb-4 text-3xl font-semibold">
              Alta formazione
            </div>
            <div class="leading-normal text-neutral-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tempore maxime exercitationem sit, non delectus possimus quis reiciendis expedita repudiandae, molestiae praesentium laboriosam in neque nam quo quam doloremque dolorem!
            </div>
          </ac-course-card>
        </nuxt-link>

        <ac-course-card v-model="activeCourse" type="aggiornamento-professionale" @over="activeCourse='aggiornamento-professionale'" @leave="activeCourse=null">
          <template #logo>
            <ac-shield theme="academy" :persistent="activeCourse==='aggiornamento-professionale'" />
          </template>
          <div class="mb-4 text-3xl font-semibold">
            Aggiornamento professionale
          </div>
          <div class="leading-normal text-neutral-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tempore maxime exercitationem sit, non delectus possimus quis reiciendis expedita repudiandae, molestiae praesentium laboriosam in neque nam quo quam doloremque dolorem!
          </div>
        </ac-course-card>

        <ac-course-card v-model="activeCourse" type="supervisione" @over="activeCourse='supervisione'" @leave="activeCourse=null">
          <div class="mb-4 text-3xl font-semibold">
            Supervisione
          </div>
          <div class="leading-normal text-neutral-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed tempore maxime exercitationem sit, non delectus possimus quis reiciendis expedita repudiandae, molestiae praesentium laboriosam in neque nam quo quam doloremque dolorem!
          </div>
        </ac-course-card>
      </div>
    </div>

    <div class="text-4xl text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, harum ullam, velit, minima nam <span class="text-primary">accusantium</span> voluptas ducimus non quam distinctio sint nihil voluptatibus adipisci aut facilis minus natus nostrum quo?
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-corsi',
  data () {
    return {
      activeCourse: null
    }
  }
}
</script>

<style lang="scss" scoped>
.gradient{
  background: radial-gradient(50.9% 35.5% at 50% 78%, rgba(200, 200, 255, .16) 0%, #17171700 100%);
}
.box-gradient{
  background: linear-gradient(297deg, rgba(60, 60, 60, 0.6) 0%, rgb(0, 0, 0) 100%);
}
</style>
