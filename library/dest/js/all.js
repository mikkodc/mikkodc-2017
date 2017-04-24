$(document).ready(function() {

  // Hide Header on Scroll \\
  // On scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;

      // If they scrolled down and are past the navbar, add class .nav-up.
      // This is necessary so you never see what is "behind" the navbar.
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('header').removeClass('nav-down').addClass('nav-up');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('header').removeClass('nav-up').addClass('nav-down');
          }
      }

      lastScrollTop = st;
  }

  // FullPage JS Settings \\
  $('#fullpage').fullpage({
    css3: true,
    autoScrolling:false,
		normalScrollElements: '#portfolio, .element2',
    fitToSection:false
  });

  // Hide Menu \\
  $('html').click(function() {
    $('body').removeClass('push-right');
    $('#main-header').removeClass('push-right');
    $('#slide-menu').removeClass('slide-push-right');
    $('#hamburger-menu').removeClass('open');
  });

  // Nav Toggle \\
  $('#toggle-menu').on('click', function(){

    // Push the body and to the right
    $('body').toggleClass('push-right');
    $('#main-header').toggleClass('push-right');

    // Pushes the menu to appear
    $('#slide-menu').toggleClass('slide-push-right');

    // Changes the menu style
    $('#hamburger-menu').toggleClass('open');

    $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);

    // Stops the event from repeating again
    event.stopPropagation();
  });

  // Stop Closing Menu inside Menu
  $('#slide-menu').click(function(){
    event.stopPropagation();
  });

  // Responsive device
  $('menu button').on('click',function(){

    // Stored Variables
    var deviceContainer = $('.device');
    var $device = $(this).data('target');

    // Check if has an existing class
    if(deviceContainer.is('[class*="device-"]')){
      deviceContainer.removeClass (function (index, className) {
        return (className.match (/(^|\s)device-\S+/g) || []).join(' ');
      });
    }

    // Add device class to change device
    deviceContainer.addClass('device-' + $device);
  });

  // function([string1, string2],target id,[color1,color2])
  consoleText(['designer', 'photographer', 'music lover', 'singer'], 'text', ['tomato', '#11625a', 'lightblue', '#69c674']);

  function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {

      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount)
        window.setTimeout(function() {
          var usedColor = colors.shift();
          colors.push(usedColor);
          var usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute('style', 'color:' + colors[0])
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function() {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000)
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
      }
    }, 120)
    window.setInterval(function() {
      if (visible === true) {
        con.className = 'console-underscore hidden'
        visible = false;

      } else {
        con.className = 'console-underscore'

        visible = true;
      }
    }, 400)
  }

});
