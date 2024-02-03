<template>
  <div data-name="page-sessioni" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
    <ac-heading description="L’obiettivo è uno e uno soltanto: andare alla radice della parola “insegnare”, cioè lasciare il segno.">
      <template #title>
        <div class="leading-none">
          Creiamo eventi<br>con l’X-Factor
        </div>
      </template>
    </ac-heading>

    <div class="mx-auto mt-20 flex w-full max-w-5xl flex-col items-start justify-start gap-2 px-4 sm:px-6 md:px-8">
      <nuxt-link v-for="(session, index) in sessions" :key="index" class="w-full" :to="session.route" target="_blank">
        <ac-session-stack :session="session" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import sessions from '@/json/sessions.json'
export default {
  name: 'page-sessioni',
  data () {
    return {
      sessions
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
