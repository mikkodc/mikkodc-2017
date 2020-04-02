<template>
  <section id="about" class="clearfix">
    <div id="profile-picture" class="col-half"></div>
    <div class="col-half profile">
      <h2 class="profile__name">Mikko de Castro</h2>
      <h3 class="profile__title">Web Developer <span style="color: #11625a">/</span> Designer</h3>

      <!-- <div class="tabs">
        <ul class="tab-links">
            <li class="active"><a href="#about-mikko">About Mikko</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
        </ul>

        <div class="tab-content">
            <div id="about-mikko" class="tab active">
              <div class="profile__description">
                <p>The opportunity for new challenges is what keeps me going, and this is why I consider web development as my better half.</p>
                <p>I started out as a graphic designer, and soon discovered the sense of fulfillment in not only understanding the art in websites, but also building them in code. Because of this evolution, I gain a big advantage in front-end development and CSS animations that endters in your project!</p>
              </div>
            </div>

            <div id="experience" class="tab">
              <p class="section-title">Experience &amp; Recognition</p>
              <div class="profile__experience">
                <div class="profile__experience--title">
                  August99 - Web Developer <span>( JUN 2015 - MAR 2017 )</span>
                </div>
                <div class="profile__experience--description">
                  <p>Started as a Project Coordinator and went to the other department to pursue my programming career. Worked with clients abroad using Wordpress.</p>
                </div>
              </div>
            </div>

            <div id="skills" class="tab">
              <ProgressBar/>
            </div>
        </div>
    </div> -->

      <div class="profile__description">
        <p>The opportunity for new challenges is what keeps me going, and this is why I consider web development as my better half.</p>
        <p>I started out as a graphic designer, and soon discovered the sense of fulfillment in not only understanding the art in websites, but also building them in code. Because of this evolution, I gain a big advantage in front-end development and CSS animations that endters in your project!</p>
      </div>

      <p class="section-title">Experience &amp; Recognition</p>
      <div class="slider-container">
        <div class="profile__experience">
          <div class="experience-item">
            <div class="profile__experience--title">
              August99 - Web Developer <span>( JUN 2015 - MAR 2017 )</span>
            </div>
            <div class="profile__experience--description">
              <p>Started as a Project Coordinator and went to the other department to pursue my programming career. Worked with clients abroad using Wordpress.</p>
            </div>
          </div>
          <div class="experience-item">
            <div class="profile__experience--title">
              De La Salle College of Saint Benilde <span>( 2011 - 2015 )</span>
            </div>
            <div class="profile__experience--description">
              <p>Bachelor of Arts in Multimedia Arts - Honorable Mention</p>
            </div>
          </div>
        </div>
        <div class="slider-paginator">
          <ul>
            <li class="prev"></li>
            <li class="next"></li>
          </ul>
        </div>
      </div>

      <p class="section-title">Skills</p>
      <ProgressBar/>

    </div>
  </section>
</template>


<script>
import ProgressBar from '@/components/ProgressBar'

export default {
  components: {
    ProgressBar
  }
}
</script>

<style lang="scss" scoped>
@import '~/styles/_variables.scss';
#about {
  position: relative;
  padding: 0;
  display: flex;

  .col-half {
    flex: 1;
  }

  #profile-picture {
    background-color: #21baae;
    /* background-image: url('../../src/img/mikko-contrast.jpg'); */
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .profile {
    padding: 40px 50px;

    & > *:not(.profile__name):not(.section-title) {
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 1em;
      margin-top: 0;
      font-weight: bold;
    }
    &__name {
      font-size: calc(1em + 1.5vw);
      margin-bottom: 15px;
      font-weight: 900;
      margin-bottom: 10px
    }
    &__title {
      margin-top: 0;
      font-size: 1em;
    }
    &__description {
    }
    &__experience {
      padding: 20px 30px;

      &--title {
        margin-bottom: 15px;
        font-weight: bold;
        letter-spacing: 1px;
        color: $primary;

        span {
          font-size: 80%;
        }
      }

      &--description {
        p {
          margin: 0;
        }
      }
    }
    &__skill {
      &--description {
        opacity: 0.5;
        display: block;
      }
    }
  }
}
</style>