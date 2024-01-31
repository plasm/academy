<template>
  <div data-name="default-layout">
    <ac-navigation />
    <main class="relative flex-1 py-4 focus:outline-none">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useRoute, useHead, useSeoMeta } from '#imports'
import seo from '@/json/seo'

useHead({
  htmlAttrs: {
    lang: 'it',
  },
  meta: [
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-title', content: 'Aiges Academy' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: '#F8F7F4' },
    { name: 'theme-color', content: '#F8F7F4' },
    {
      name: 'author',
      content: 'Aiges Academy',
    },
    { name: 'msapplication-tap-highlight', content: 'no' },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
})

const route = useRoute()

const getMetaData = (prop) => {
  const path = route.path
  if (path in seo) {
    return seo[path][prop]
  }
  return ''
}

watch(
  () => route.path,
  () => {
    useSeoMeta({
      title: getMetaData('title'),
      ogTitle: getMetaData('ogTitle'),
      description: getMetaData('description'),
      ogDescription: getMetaData('ogDescription'),
      ogImage: getMetaData('ogImage')
    })
  },
  { deep: true, immediate: true }
)
</script>

<script>
export default {
  name: 'default-layout',
}
</script>
<style lang="scss" scoped></style>
