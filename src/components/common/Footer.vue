<template>
  <footer class="section">
    <div class="inner-container text-center">
      <g-link to="/" class="top-logo">
        <Logo/>
      </g-link>
      <p>Codes from my fingertips MikkoDC &copy; {{ new Date().getFullYear() }}.</p>
      <SocialLinks/>
    </div>
  </footer>
</template>

<script>
import Logo from '@/components/icons/Logo'
import SocialLinks from '@/components/common/SocialLinks'

export default {
  computed: {
    navActive: function() {
      return this.$store.state.navActive
    }
  },
  components: {
    Logo,
    SocialLinks
  }
}
</script>

<style lang="scss">
@import '~/styles/_variables.scss';

footer {
  background-color: $black;
  color: darken(#fff, 70%);
  padding-top: 30px;
  padding-bottom: 20px;

  svg {
    max-height: 40px;
  }

  .social-icons {
    margin-bottom: 0;

    li {
      a {

        &:hover {

          i {
            &:before {
              color:$primary;
            }
          }
        }
        i {
          &:before {
            color:darken(#fff, 70%);
          }
        }
      }
    }
  }
}
</style>