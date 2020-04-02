<template>
  <nav
    id="slide-menu"
    :class="{ 'slide-push-right': navActive }"
    role="navigation"
  >
    <div class="nav-inner">
      <ul class="nav-list hover-ease">
        <li>
          <a class="active" href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li class="coming-soon">
          <button href="#services" disabled>Playground</button>
        </li>
        <li class="coming-soon">
          <button href="#services" disabled>Blog</button>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <SocialLinks/>

      <ul class="contact-list">
        <li>
          <i class="flaticon-letter"></i><span>Say hello</span>
          <a :href="`mailto:${contact.email}`" class="fade-up-line">{{
            contact.email
          }}</a>
        </li>
        <li>
          <i class="flaticon-technology"></i><span>Let's talk</span>
          <a :href="`tel:${contact.phone}`" class="fade-up-line"
            >{{contact.phone}}</a
          >
        </li>
      </ul>
      <div class="copyright">
        Copyright ©{{ new Date().getFullYear() }}. All Rights Reserved.<br />www.MikkoDC.com
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  metadata {
    contact {
      email
      phone
    }
  }
}
</static-query>

<script>
import SocialLinks from '@/components/common/SocialLinks'

export default {
  computed: {
    meta: function() {
      return this.$static.metadata;
    },
    contact: function() {
      return this.meta.contact;
    },
    socialLinks: function() {
      return this.meta.socialLinks;
    },
    navActive: function() {
      return this.$store.state.navActive;
    }
  },
  components: {
    SocialLinks
  }
};
</script>

<style lang="scss" scoped>
@import '~/styles/_variables.scss';
@import '~/styles/_mixins.scss';


#slide-menu {
  position: fixed;
  z-index: 5;
  width: 300px;
  right: -300px;
  background-color: #151e1b;
  height: 100vh;
  padding: 38px 30px 0 50px;
  box-sizing: border-box;
  color: #fff;
  font-family: "ElenarLove", sans-serif;

  &.slide-push-right {
    right: 0;
    overflow-y: scroll;
    overflow-x: hidden;
  }
}
.nav-list {
  @include slide-style;

  a {
    @include custom-link;

    &.active {
      color: $primary;
    }
  }

  li.coming-soon {
    position: relative;

    &:before {
      content: "Soon!";
      position: absolute;
      font-size: 12px;
      top: -5px;
      background-color: $primary;
      color: #fff;
      padding: 3px 2px;
      box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
    }

    button {
      @include custom-link;
      margin: 0 auto;
      background-color: transparent;
      border: none;
      width: 100%;
      text-align: left;
    }
  }
}
.contact-list {
  @include slide-style;

  li {
    font-size: 14px;
    line-height: 1.2em;

    a {
      color: $primary;
    }
  }
}
</style>
