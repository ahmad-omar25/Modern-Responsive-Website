/*====================================================
                        Wow Animate
====================================================*/
$(function () {
  // animate on scroll
  new WOW().init();
});

/*====================================================
                        NAVIGATION
====================================================*/
// Show/Hide transparent black navigation
$(function () {
  'use strict';
  $(window).scroll(function () {
      if ($(window).scrollTop() > 100) {
          $(".navbar-light").addClass("scrolled");
          $("#back-to-top").fadeIn();
      } else {
          $(".navbar-light").removeClass('scrolled');
          $("#back-to-top").fadeOut();
      }
  });
});

// Smooth scrolling
$(function () {

  $("a.smooth-scroll").click(function (event) {

      event.preventDefault();

      // get/return id like #about, #work, #team and etc
      var section = $(this).attr("href");

      $('html, body').animate({
          scrollTop: $(section).offset().top - 63
      }, 1250, "easeInOutExpo");
  });
});

// Close mobile menu on click
$(function(){
    
  $(".navbar-collapse ul li a").on("click touch", function(){
     
      $(".navbar-toggle").click();
  });
});

/*====================================================
                        WORK
====================================================*/
$(function () {
  $("#work").magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
          enabled: true
      }

  });
});



/*====================================================
                        TEAM
====================================================*/
$('#team-members').owlCarousel({
  margin:25,
  items: 3,
  autoplay: true,
  smartSpeed: 900,
  loop: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 2
    },
    768: {
      items: 3
    }
  }
});


/*====================================================
                        TESTIMONIALS
====================================================*/
$(function () {
  $("#customers-testimonials").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true
  });
});

/*====================================================
                        STATS
====================================================*/
$(function () {
  $('.counter').counterUp({
      delay: 5,
      time: 2000
  });
});


/*====================================================
                        CLIENTS
====================================================*/
$(function () {

  $("#clients-list").owlCarousel({
      items: 6,
      autoplay: true,
      smartSpeed: 700,
      loop: true,
      autoplayHoverPause: true,
      responsive: 
      {
        0: {
        items: 3
        },
        480: {
        items: 3
        },
        768: {
        items: 5
        },
        992: {
        items: 6
        }
      }
  });
});