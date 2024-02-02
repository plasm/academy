<template>
  <div data-name="ac-session-stack">
    <div class="text-6xl font-bold  text-primary">
      {{ session.date }}
    </div>
    <div class="text-2xl font-medium uppercase leading-relaxed text-white">
      {{ session.course }}
    </div>
    <div class="text-xl font-light text-neutral-500 ">
      {{ session.description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ac-session-stack',
  props: {
    session: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
