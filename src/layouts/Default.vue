<template>
  <div :class="navActive ? 'push-right' : ''" class="layout">
    <Header/>
    <Nav/>
    <slot/>
    <Contact/>
    <Footer/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '@/components/common/Header'
import Nav from '@/components/common/Nav'
import Contact from '@/components/common/Contact'
import Footer from '@/components/common/Footer'

export default {
  data() {
    return {

    }
  },
  computed: {
    navActive: function() {
      return this.$store.state.navActive
    }
  },
  components: {
    Header,
    Nav,
    Contact,
    Footer
  }
}
</script>

<style lang="scss">
@import '~/styles/_variables.scss';

* {
  box-sizing: border-box;
  outline: 0;
}
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: 100%;
}
body {
  position: relative;
  left: 0;
  color: #2A3A3F;
  font-family: 'Montserrat', 'Roboto', sans-serif;
}
a {
  position: relative;
  text-decoration: none;
  color: $primary;
}

p {
  line-height: 1.6em;

  a {
    padding: 2px 3px;


  }
}
img {
  max-width: 100%;
}

/*
  Global Layout Stlyes
  */
.full-window {
  width: 100%;
  height: 100%;
}
.container {
  padding-left: 50px;
  padding-right: 50px;
}
.inner-container {
  max-width: 1240px;
  padding: 0 15px;
  display: block;
  margin: 0 auto;
}
.small-container {
  max-width: 768px;
  padding: 0 15px;
  display: block;
  margin: 0 auto;
}

section {
  padding-top: 30px;
  padding-bottom: 30px;
  box-sizing: border-box;
}
.bottom-reveal {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  zoom: 1;
}

.col-half {
  width: 50%;
  float: left;
}
.three-col {
  width: 33.33%;
  float: left;
}
.center-content {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.section-full-content {
  padding: 70px 25px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

*[class^="flaticon"] {
  color: #fff;
}

.push-right {
  margin-left: -300px!important;
  overflow-y: hidden;
}

.section.fp-auto-height {
  padding: 50px 0;
}

.text-center {
  text-align: center;
}
.text-light {
  & * {
    color: #fff;
  }
}


.section-title {
  font-size: calc(1em + 1.5vw);
}
.section-sub-statement {
  font-size: 1.25em;
  line-height: 1.75em;
  margin-bottom: 40px;
}

.copyright {
  font-size: 12px;
  opacity: 0.4;
  line-height: 1.2em;
  color: #8ba79d;
}
</style>
