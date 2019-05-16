<template>
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
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>
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

