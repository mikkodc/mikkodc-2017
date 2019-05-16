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
    <navigation />
  </div>
</template>

<script>
import Logo from '~/components/common/Logo.vue';
import Navigation from '~/components/common/Navigation.vue';

export default {
  components: {
    Logo, Navigation
  }
}
</script>


<style lang="scss" scoped>
#main-header {
  left: 0;
  right: 0;
  z-index: 10;

  &.nav-up {
    top: -75px;
  }

  &.push-right {
    margin-left: -300px;
    right: 300px;
  }
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

  &.open span {
    &:nth-child(1) {
      top: 5px;
      width: 0%;
      left: 50%;
    }
    &:nth-child(2) {
      transform: rotate(45deg);
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
    &:nth-child(4) {
      top: 5px;
      width: 0%;
      left: 50%;
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

