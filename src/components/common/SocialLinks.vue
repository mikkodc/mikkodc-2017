<template>
  <ul class="social-icons">
    <li v-for="(link, index) in socialLinks" :key="index">
      <a :href="link.url" target="_blank"
        ><i :class="`flaticon-&{link.slug}`"></i
      ></a>
    </li>
  </ul>
</template>

<static-query>
query {
  metadata {
    socialLinks {
      name
      slug
      url
    }
  }
}
</static-query>

<script>
export default {
  computed: {
    meta: function() {
      return this.$static.metadata;
    },
    socialLinks: function() {
      return this.meta.socialLinks;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/styles/_variables.scss';
@import '~/styles/_mixins.scss';

.social-icons {
  @include slide-style;

  li {
    @include inline-list;

    &:not(:last-child) {
      margin-right: 15px;
    }

    a {
      @include custom-link;
      line-height: 24px;

      i {

        &:before {
          font-size: 24px;
          margin-right: 0;
        }
      }

      &:hover {
        transform: scale(1.25);

        i {
          color: $primary;
        }
      }
    }

  }
}
</style>
