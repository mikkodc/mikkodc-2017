<template>
  <section id="intro-section" class="full-window">
    <div class="inner-container center-content">
      <!-- Start Intro Text -->
      <h1 class="intro-title">Hi, I'm Mikko.<br> Freelance web developer <br>
      <ConsoleText>&#40; and a frustrated &#41; </ConsoleText>
      <br>from the Philippines</h1>

      <!-- Start Button Group -->
      <aside class="btn-group">
        <a href="#contact" class="btn btn-primary btn-arrow-right">Work with me!</a>
        <a href="#portfolio" class="btn btn-ghost btn-default btn-arrow-right">View my portfolio</a>
      </aside><!-- End Button Group -->

    </div> <!-- End Intro Text -->

  </section>
</template>

<script>
import ConsoleText from '@/components/home/ConsoleText'

export default {
  components: {
    ConsoleText
  }
}
</script>

<style lang="scss" scoped>
@import '~/styles/_variables.scss';
@import '~/styles/_mixins.scss';
@import '~/styles/_animations.scss';
@import '~/styles/_buttons.scss';

#intro-section {
  position: relative;
  background: #232526;
  background: -webkit-linear-gradient(to bottom, #414345, #232526);
  background: linear-gradient(to bottom, #414345, #232526);
  min-height: 500px;

  @at-root .intro-title {
    font-size: calc(1em + 2.5vw);
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    position: relative;
  }

  .intro-title {
    &:before,
    &:after {
      opacity: 0.2;
      font-size: 14px;
      font-weight: 400;
    }
    &:before {
      position: absolute;
      content: '<h1>';
      top: -20px;
    }
    &:after {
      content: '</h1>';
      margin-left: 10px;
    }
    small {
      font-size: 75%;
    }
    .hidden {
      opacity:0;
    }
    .console-underscore {
      display:inline-block;
      position:relative;
      top:-0.14em;
      left:10px;
    }
  }
}
</style>