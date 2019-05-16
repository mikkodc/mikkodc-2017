<template>
  <div>

    <!-- Contact Footer -->
    <section id="contact" class="text-light py-4 bg-primary">
      <div class="container">
        <div class="row">
          <div class="offset-md-2 col-md-8">
            <h2 class="section-title text-center py-2">Let's work together!</h2>
            <p class="section-sub-statement text-center">I am currently accepting new project. I'd love to hear more about your project.<br>Please take a few minutes to tell me about it.</p>
            <div class="text-center">
              <a href="mailto:mikkodecastro@ymail.com" class="btn btn-default btn-arrow-right">Let's Start!</a>
              <p>
                <a href="mailto:mikkodecastro@ymail.com">mikkodecastro@ymail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="section bg-secondary">
      <div class="container text-center">
        <a href="">
          <logo width="33" height="40"/>
        </a>
        <p class="my-3">Codes from my fingertips &copy; MikkoDC {{currentYear}}.</p>
        <ul class="social-icons list-inline ml-0">
          <li><a href="https://www.linkedin.com/in/mikkodc/" target="_blank"><i class="flaticon-linkedin"></i></a></li>
          <li><a href="https://www.facebook.com/Mikkoooow" target="_blank"><i class="flaticon-facebook-social-network-logo"></i></a></li>
          <li><a href="https://twitter.com/Mikkoooow" target="_blank"><i class="flaticon-social-media"></i></a></li>
          <li><a href="https://www.instagram.com/mikkodc/" target="_blank"><i class="flaticon-instagram-logo"></i></a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/common/Logo.vue';

export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer {
  color: darken(#fff, 70%);
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>

