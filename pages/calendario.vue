<template>
  <div data-name="page-sessioni" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
    <ac-heading description="Scopri il significato della parola “insegnare”: lasciare il segno. Perché è questo che facciamo.">
      <template #title>
        <div class="leading-none">
          Impara tutto,<br> corso dopo corso
        </div>
      </template>
    </ac-heading>

    <div class="mx-auto mt-20 flex w-full max-w-5xl flex-col items-start justify-start gap-2 px-4 sm:px-6 md:px-8">
      <nuxt-link v-for="(session, index) in calendar" :key="index" class="w-full" :to="session.route" target="_blank">
        <ac-session-stack :session="session" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import calendar from '@/json/calendar.json'
export default {
  name: 'page-sessioni',
  data () {
    return {
      calendar
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
