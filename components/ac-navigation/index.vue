<template>
  <div data-name="ac-navigation" class="sticky top-0 z-40 mx-auto w-full border-b border-b-neutral-800 bg-neutral-900/70 backdrop-blur-md 2xl:max-w-7xl">
    <div class="relative mx-auto flex w-full flex-col p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
      <div class="flex flex-row items-center justify-between lg:justify-start">
        <nuxt-link title="Aiges Academy" class="flex items-center justify-start gap-2 text-lg tracking-tight text-white outline-none" to="/">
          <ac-logo class="text-white" />
          <span class="hidden text-white md:block">academy</span>
        </nuxt-link>
        <button ref="hamburger" class="inline-flex items-center justify-center p-2 text-neutral-400 hover:text-white focus:text-white focus:outline-none md:hidden" @click="toggleMenu()">
          <svg class="size-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :class="{ 'hidden': menuIsOpen, 'inline-flex': !menuIsOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path :class="{ 'hidden': !menuIsOpen, 'inline-flex': menuIsOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav :class="{ 'flex': menuIsOpen, 'hidden': !menuIsOpen }" class="grow flex-col items-center md:flex md:flex-row md:justify-end md:pb-0">
        <nuxt-link
          class="navigation-link lg:ml-auto"
          to="/scuola"
          title="Scuola"
        >
          Scuola
        </nuxt-link>
        <nuxt-link
          class="navigation-link"
          to="/organizzazione"
          title="Organizzazione"
        >
          Organizzazione
        </nuxt-link>
        <div ref="dropdown" class="relative w-full md:w-auto">
          <button class="focus:shadow-outline mt-2 flex w-full flex-row items-center  justify-center px-4 py-2 text-left text-sm text-neutral-300 hover:text-white focus:outline-none md:mt-0 md:inline md:w-auto" @click="toggleDropdown()">
            <span>
              Corsi
            </span>
            <svg fill="currentColor" viewBox="0 0 20 20" :class="{ 'rotate-180': dropdownIsOpen, 'rotate-0': !dropdownIsOpen }" class="ml-1 mt-1 inline size-4 rotate-0 transition-transform duration-200 md:-mt-1">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div class="relative mt-3 max-w-3xl px-2 sm:px-0 md:fixed md:left-1/2 md:z-10 md:w-screen md:-translate-x-1/2" :class="{ 'pointer-events-none invisible opacity-0':!dropdownIsOpen }">
            <transition name="scale" mode="in-out">
              <div v-show="dropdownIsOpen" class="overflow-hidden rounded-lg ring-1 ring-white/20  md:shadow-lg">
                <div class="relative grid gap-6 bg-neutral-800 px-5 py-6 sm:gap-8 sm:p-8">
                  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div class="grid grid-cols-1 gap-8">
                      <nuxt-link v-for="(course, index) in courses" :key="index" :to="course.route" class="group -m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-700/50">
                        <div class="ml-4">
                          <p class="text-base font-medium text-white">
                            {{ course.title }}
                          </p>
                          <p class="mt-1 text-sm text-neutral-500 group-hover:text-neutral-200">
                            {{ course.description }}
                          </p>
                        </div>
                      </nuxt-link>
                    </div>
                    <div class="grid grid-cols-1 gap-3 rounded-2xl bg-neutral-900/50 p-2 lg:p-0">
                      <div class="grid h-full items-start gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                        <h3 class="text-base font-medium text-white">
                          Inizia da qui
                        </h3>
                        <div class="space-y-2">
                          <a href="#" class="flex items-start rounded-lg  text-sm font-medium text-neutral-300 transition duration-150 ease-in-out hover:text-primary">
                            Perché le ADR per la famiglia?
                          </a>
                          <a href="#" class="flex items-start rounded-lg text-sm text-neutral-300 transition duration-150 ease-in-out hover:text-primary">
                            La mediazione familiare
                          </a>
                          <a href="#" class="flex items-start rounded-lg text-sm text-neutral-300 transition duration-150 ease-in-out hover:text-primary">
                            La coordinazione genitoriale
                          </a>
                          <a href="#" class="flex items-start rounded-lg text-sm text-neutral-300 transition duration-150 ease-in-out hover:text-primary">
                            Dalla formazione alla professione
                          </a>
                          <a href="#" class="flex items-start rounded-lg text-sm text-neutral-300 transition duration-150 ease-in-out hover:text-primary">
                            Il network di AIGES Academy
                          </a>
                          <a href="#" class="inline-flex items-start rounded-lg text-sm text-neutral-300 transition duration-150 ease-in-out hover:text-primary">
                            FAQ
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <nuxt-link
          class="navigation-link"
          to="/sessioni"
          title="Sessioni"
        >
          Sessioni
        </nuxt-link>

        <div class="flex list-none items-center gap-2 md:ml-4 lg:ml-auto">
          <nuxt-link
            to="/contatti"
            title="Contatti"
            class="rounded-xl border border-white/20 bg-white/10 p-0.5 transition-transform duration-300 ease-out hover:-translate-y-1  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white md:mt-0"
          >
            <div class="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black">
              Contatti
            </div>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import courses from '@/json/courses.json'
import { useRoute } from '#imports'

const route = useRoute()
const dropdown = ref(null)
const hamburger = ref(null)
const dropdownIsOpen = ref(false)
const menuIsOpen = ref(false)

watch(() => route.path, () => {
  dropdownIsOpen.value = false
}, { immediate: true, deep: true })

const toggleDropdown = () => {
  dropdownIsOpen.value = !dropdownIsOpen.value
}
const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value
}

onClickOutside(dropdown, () => {
  dropdownIsOpen.value = false
  return dropdownIsOpen.value
}, { ignore: [hamburger] })
</script>
<script>

export default {
  name: 'ac-navigation',
  data () {
    return {
      courses
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-link{
  @apply p-2 text-sm text-neutral-300 hover:text-white md:px-3 lg:px-6;
}
.navigation-link.router-link-exact-active{
  @apply text-primary;
}
</style>
