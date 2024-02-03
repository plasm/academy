<template>
  <div data-name="page-sessioni" class="mx-auto px-4 sm:px-6 md:px-8 2xl:max-w-7xl">
    <ac-heading description="Come ci riusciremo? Andando alla radice del significato della parola “insegnare”: lasciando il segno.">
      <template #title>
        <div class="leading-none">
          Ti conquisteremo,<br> corso dopo corso
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
