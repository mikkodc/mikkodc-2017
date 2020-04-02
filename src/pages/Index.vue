<template>
  <Layout>
    <IntroSection/>
    <AboutMe/>
  </Layout>
</template>

<script>
import IntroSection from '@/components/home/IntroSection'
import AboutMe from '@/components/home/AboutMe'
export default {
  components: {
    IntroSection,
    AboutMe
  },
  metaInfo: {
    title: 'Welcome to my Portfolio Site!'
  }
}
</script>

<style>

</style>
