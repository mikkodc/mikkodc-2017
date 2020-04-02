<template>
  <section id="contact" class="clearfix text-light">
    <div class="small-container">
      <h2 class="section-title text-center">Let's work together!</h2>
      <p class="section-sub-statement text-center">I am currently accepting new project. I'd love to hear more about your project.<br>Please take a few minutes to tell me about it.</p>
      <div class="text-center">
        <a :href="`mailto:${email}`" class="btn btn-default btn-arrow-right">Let's Start!</a>
        <p>
          <a :href="`mailto:${email}`">{{email}}</a>
        </p>
      </div>
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    contact {
      email
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    email: function() {
      return this.$static.metadata.contact.email;
    }
  }
}
</script>

<style lang="scss">
@import '~/styles/_variables.scss';
@import '~/styles/_mixins.scss';
@import '~/styles/_animations.scss';
@import '~/styles/_buttons.scss';

#contact {
  background-color: $primary;

  a {
    &.btn-default {
      color: $black;
      border: 2px solid $black;
    }
  }

  p a {
    text-decoration: none;

    &:before,
    &:after {
      @include default-animation;
    }
    &:before {
      position: static;

      margin-right: 5px;

      content: "[";

      opacity: 1;
    }
    &:after {
      position: static;

      margin-left: 5px;

      content: "]";
    }
    &:hover {
      &:before {
        padding-right: 5px;
      }
      &:after {
        padding-left: 5px;
      }
    }
  }
}
</style>