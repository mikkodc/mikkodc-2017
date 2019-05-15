<template>
  <div>
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<style lang="scss"> 
body {
  background-color: #000;
}
.bg-primary {
  background-color: #11625a!important;
}
.bg-secondary {
  background-color: #151e1b!important;
}
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