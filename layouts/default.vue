<template>
  <div>
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<style lang="scss">
</style>

<script>
import MainHeader from '~/components/common/Header.vue'
import MainFooter from '~/components/common/Footer.vue'

export default {
  components: {
    MainHeader, MainFooter
  }
}
</script>