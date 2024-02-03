<template>
  <footer data-name="ac-footer" class="mt-20 border-t border-t-neutral-800" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-16">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="xl:col-span-1">
          <nuxt-link title="Aiges Academy" class="flex items-center justify-start gap-2 text-lg tracking-tight text-white outline-none" to="/">
            <ac-logo class="text-neutral-700 " />
            <span class="hidden text-neutral-700  md:block">academy</span>
          </nuxt-link>
        </div>
        <div class="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div />
            <div>
              <h3 class="font-semibold uppercase leading-6 text-white">
                ACADEMY
              </h3>
              <ul role="list" class="mt-4 space-y-2">
                <li v-for="(item, index) in footer.academy" :key="index">
                  <nuxt-link
                    class="navigation-link"
                    :to="item.route"
                    :title="item.title"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 class="font-semibold uppercase leading-6 text-white">
                Note legali
              </h3>
              <ul role="list" class="mt-4 space-y-2">
                <li v-for="(item, index) in footer.legal" :key="index">
                  <nuxt-link
                    class="navigation-link"
                    :to="item.route"
                    :title="item.title"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h3 class="font-semibold uppercase leading-6 text-white">
                Socials
              </h3>
              <ul role="list" class="mt-4 space-y-2">
                <li v-for="(item, index) in footer.social" :key="index">
                  <nuxt-link
                    target="_blank"
                    class="navigation-link"
                    :to="item.route"
                    :title="item.title"
                  >
                    {{ item.title }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import footer from '@/json/footer.json'
export default {
  name: 'ac-footer',
  data () {
    return {
      footer
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation-link{
  @apply text-sm text-neutral-600 hover:text-primary;
}
.navigation-link.router-link-exact-active{
  @apply text-white;
}
</style>
