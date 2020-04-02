<template>  
  <div class="profile__skills">
    <div class="skillbar clearfix " data-percent="75%">
      <div class="skillbar-title"><span>Wordpress</span></div>
      <div class="skillbar-bar"></div>
      <div class="skill-bar-percent">75%</div>
    </div>
    <div class="skillbar clearfix " data-percent="80%">
      <div class="skillbar-title"><span>PSD to HTML</span></div>
      <div class="skillbar-bar"></div>
      <div class="skill-bar-percent">80%</div>
    </div>
    <div class="skillbar clearfix " data-percent="85%">
      <div class="skillbar-title"><span>HTML5/CSS3</span></div>
      <div class="skillbar-bar"></div>
      <div class="skill-bar-percent">85%</div>
    </div>
    <div class="skillbar clearfix " data-percent="80%">
      <div class="skillbar-title"><span>CSS/SVG Animation</span></div>
      <div class="skillbar-bar"></div>
      <div class="skill-bar-percent">80%</div>
    </div>
    <div class="skillbar clearfix " data-percent="65%">
      <div class="skillbar-title"><span>Javascript</span></div>
      <div class="skillbar-bar"></div>
      <div class="skill-bar-percent">65%</div>
    </div>
    <small class="profile__skill--description">Left quite a lot room for improvements!</small>
    <small class="profile__skill--description">Photo credits: <a href="https://www.facebook.com/tyronnesantella" target="_blank">Tyronne Santella</a></small>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~/styles/_variables.scss';
/*
 * Progress Bar
 */

 .skillbar {
 	position:relative;
 	display:block;
 	width:100%;
 	height:35px;
 	margin-bottom:15px;
 	transition:0.4s linear;
 	transition-property:width, background-color;
 	border-radius:3px;
 	background:#eee;

  .skillbar-title,
  .skillbar-bar {
    background-color: $primary;
  }

  .skillbar-title {
  	position:absolute;
  	top:0;
  	left:0;
  	color:#fff;
  	border-top-left-radius:3px;
  	border-bottom-left-radius:3px;
  	background:#6adcfa;
  	font-size:13px;
  	font-weight:normal;

   span {
   	display:block;
   	height:35px;
   	padding:0 20px;
   	border-top-left-radius:3px;
   	border-bottom-left-radius:3px;
   	background: lighten($primary, 10%);
    letter-spacing: 1px;
   	line-height:35px;
   }
  }

  .skillbar-bar {
  	width:0px;
  	height:35px;
  	border-radius:3px;
  }

  .skill-bar-percent {
  	position:absolute;
  	top:0;
  	right:10px;
  	height:35px;
  	color:#444;
  	color:rgba(0, 0, 0, 0.4);
  	font-size:11px;
  	line-height:35px;
  }
 }
</style>