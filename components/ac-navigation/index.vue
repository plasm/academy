<template>
  <div data-name="ac-navigation" class="mx-auto w-full border-b bg-white 2xl:max-w-7xl">
    <div class="relative mx-auto flex w-full flex-col bg-white p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
      <div class="flex flex-row items-center justify-between lg:justify-start">
        <a class="text-lg uppercase tracking-tight text-black focus:outline-none focus:ring lg:text-2xl" href="/">
          <span class="uppecase focus:ring-0 lg:text-lg">
            academy
          </span>
        </a>
        <button ref="hamburger" class="inline-flex items-center justify-center border p-2 text-neutral-400 hover:text-black focus:text-black focus:outline-none md:hidden" @click="toggleMenu()">
          <svg class="size-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path :class="{ 'hidden': dropdownIsOpen, 'inline-flex': !dropdownIsOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path :class="{ 'hidden': !dropdownIsOpen, 'inline-flex': dropdownIsOpen }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav :class="{ 'flex': menuIsOpen, 'hidden': !menuIsOpen }" class="grow flex-col items-center md:flex md:flex-row md:justify-end md:pb-0">
        <a class="p-2 text-sm text-neutral-500 hover:text-blue-600 md:px-3 lg:ml-auto lg:px-6" href="#">
          About
        </a>
        <a class="p-2 text-sm text-neutral-500 hover:text-blue-600 md:px-3 lg:px-6" href="#">
          Contact
        </a>
        <div ref="dropdown" class="relative w-full md:w-auto">
          <button class="focus:shadow-outline mt-2 flex w-full flex-row items-center  justify-center px-4 py-2 text-left text-sm text-neutral-500 hover:text-blue-600 focus:outline-none md:mt-0 md:inline md:w-auto" @click="toggleDropdown()">
            <span>
              Dropdown List
            </span>
            <svg fill="currentColor" viewBox="0 0 20 20" :class="{ 'rotate-180': dropdownIsOpen, 'rotate-0': !dropdownIsOpen }" class="ml-1 mt-1 inline size-4 rotate-0 transition-transform duration-200 md:-mt-1">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div class="relative mt-3 max-w-3xl px-2 sm:px-0 md:fixed md:left-1/2 md:z-10 md:w-screen md:-translate-x-1/2" :class="{ 'pointer-events-none invisible opacity-0':!dropdownIsOpen }">
            <transition name="scale" mode="in-out">
              <div v-show="dropdownIsOpen" class="ring-opacity/5 overflow-hidden rounded-lg ring-1 ring-black/5 md:shadow-lg">
                <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div class="grid grid-cols-1 gap-8">
                      <a href="#" class="-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50">
                        <div class="ml-4">
                          <p class="text-base font-medium text-black">
                            Explore design work
                          </p>
                          <p class="mt-1 text-sm text-neutral-500">
                            Trending designs to inspire you
                          </p>
                        </div>
                      </a>
                      <a href="#" class="-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50">
                        <div class="ml-4">
                          <p class="text-base font-medium text-black">
                            Blog
                          </p>
                          <p class="mt-1 text-sm text-neutral-500">
                            Interviews, tutorials and more
                          </p>
                        </div>
                      </a>
                      <a href="#" class="-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50">
                        <div class="ml-4">
                          <p class="text-base font-medium text-black">
                            Secure
                          </p>
                          <p class="mt-1 text-sm text-neutral-500">
                            Interviews, tutorials and more
                          </p>
                        </div>
                      </a>
                      <a href="#" class="-m-3 inline-flex items-start rounded-xl p-3 transition duration-150 ease-in-out hover:bg-neutral-50">
                        <div class="ml-4">
                          <p class="text-base font-medium text-black">
                            Users
                          </p>
                          <p class="mt-1 text-sm text-neutral-500">
                            Trending designs to inspire you
                          </p>
                        </div>
                      </a>
                    </div>
                    <div class="grid grid-cols-1 gap-3 rounded-2xl bg-neutral-50 p-2 lg:p-0">
                      <div class="grid h-full items-start gap-6 px-5 py-6 sm:gap-8 sm:p-8">
                        <h3 class="text-base font-medium text-blue-400">
                          Getting started
                        </h3>
                        <div class="space-y-2">
                          <a href="#" class="flex items-start rounded-lg text-sm font-medium transition duration-150 ease-in-out hover:text-blue-500">
                            Explore design work
                          </a>
                          <a href="#" class="flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500">
                            Register
                          </a>
                          <a href="#" class="flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500">
                            Adding users
                          </a>
                          <a href="#" class="flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500">
                            Video Tutorials
                          </a>
                          <a href="#" class="flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500">
                            Libraries and SDKs
                          </a>
                          <a href="#" class="inline-flex items-start rounded-lg text-sm text-neutral-500 transition duration-150 ease-in-out hover:text-blue-500">
                            Adding Plugins
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

        <div class="flex list-none items-center gap-2 lg:ml-auto">
          <button class="focus:shadow-outline mt-2 block px-4 py-2 text-sm text-neutral-500 hover:text-blue-600 focus:outline-none md:mt-0">
            Sign in
          </button>
          <button class="mt-2 rounded-full bg-black  px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:bg-neutral-800 active:text-white md:mt-0">
            Sign up
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>

const dropdown = ref(null)
const hamburger = ref(null)
const dropdownIsOpen = ref(false)
const menuIsOpen = ref(false)

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
</script>

<style lang="scss" scoped>
</style>
