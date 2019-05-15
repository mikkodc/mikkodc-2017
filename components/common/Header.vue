<template>
  <div>
    <!-- Header -->
    <header id="main-header" class="px-4 position-fixed mt-4 d-flex justify-content-between align-items-center">

      <!-- Logo -->
      <a href="/" class="top-logo">
        <logo width="42" height="50"/>
      </a>

      <!-- Toggle Menu -->
      <a id="toggle-menu" class="position-relative">
        <span class="text-light text-uppercase">Menu</span>
        <div id="hamburger-menu" class="position-relative d-inline-block">
          <span class="position-absolute d-block w-100"></span>
          <span class="position-absolute d-block w-100"></span>
          <span class="position-absolute d-block w-100"></span>
          <span class="position-absolute d-block w-100"></span>
        </div></a>
    </header>
    
    <!-- Navigation -->
    <nav id="slide-menu" role="navigation" class="text-light position-fixed">
        <div class="nav-inner">
          <ul class="nav-list hover-ease list-unstyled pl-0 mt-0">
            <li>
              <a class="active d-block text-light py-2" href="#home">Home</a>
            </li>
            <li>
              <a href="#about" class="d-block text-light py-2">About</a>
            </li>
            <li>
              <a href="#portfolio" class="d-block text-light py-2">Portfolio</a>
            </li>
            <li class="coming-soon">
              <button href="#services" class="d-block w-100 mx-auto py-2 px-0" disabled>Playground</button>
            </li>
            <li class="coming-soon">
              <button href="#services" class="d-block w-100 mx-auto py-2 px-0" disabled>Blog</button>
            </li>
            <li>
              <a href="#contact" class="d-block text-light py-2">Contact</a>
            </li>
          </ul>
          <ul class="social-icons pl-0 mt-0 list-unstyled">
            <li><a href="https://www.linkedin.com/in/mikkodc/" target="_blank"><i class="flaticon-linkedin"></i></a></li>
            <li><a href="https://www.facebook.com/Mikkoooow" target="_blank"><i class="flaticon-facebook-social-network-logo"></i></a></li>
            <li><a href="https://twitter.com/Mikkoooow" target="_blank"><i class="flaticon-social-media"></i></a></li>
            <li><a href="https://www.instagram.com/mikkodc/" target="_blank"><i class="flaticon-instagram-logo"></i></a></li>
          </ul>
          <ul class="contact-list">
            <li><i class="flaticon-letter"></i><span>Say hello</span> <a href="mailto:mikkodecastro@ymail.com" class="fade-up-line">mikkodecastro@ymail.com</a></li>
            <li><i class="flaticon-technology"></i><span>Let's talk</span> <a href="tel:+(971)-55-954-5484" class="fade-up-line">+(971)-55-954-5484</a></li>
          </ul>
          <div class="copyright">
            Copyright © 2017. All Rights Reserved.<br>www.MikkoDC.com
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
import Logo from '~/components/common/Logo.vue';

export default {
  components: {
    Logo
  }
}
</script>


<style lang="scss" scoped>
#main-header {
  left: 0;
  right: 0;
}
#hamburger-menu {
  width: 16px;
  height: 12px;
  transform: rotate(0deg);
  transition: .5s ease-in-out;
  cursor: pointer;

  span {
    height: 2px;
    background: #fff;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2), &:nth-child(3) {
      top: 5px;
    }

    &:nth-child(4) {
      top: 10px;
    }
  }
}
#toggle-menu {
  padding: 10px 15px;
  border: 2px solid #fff;
}
#slide-menu {
  z-index: 5;
  width: 300px;
  right: -300px;
  // right: 0;
  background-color: #151e1b;
  height: 100vh;
  padding: 38px 30px 0 50px;
  box-sizing: border-box;
  font-family: 'ElenarLove', sans-serif;
}

// Navigation
.coming-soon button {
  text-decoration: none;
  color: #fff;
  line-height: 32px;
  font-size: 24px;
  font-family: 'ElenarLove', sans-serif;
  background-color: transparent;
  border: none;
  text-align: left;
}
</style>

