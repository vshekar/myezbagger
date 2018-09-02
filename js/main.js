$(document).ready(function(){
    $("#kit_button").click(function(){
        $("#kit").fadeIn("slow");
        $("#refill").fadeOut("slow");
        $('#all_button').removeClass('active');
        $('#refill_button').removeClass('active');
        $("#kit_button").addClass('active');
    });

    $("#refill_button").click(function(){
        $("#kit").fadeOut("slow");
        $("#refill").fadeIn("slow");
        $('#all_button').removeClass('active');
        $("#kit_button").removeClass('active');
        $("#refill_button").addClass('active');
    });

    $("#all_button").click(function(){
        $("#kit").fadeIn("slow");
        $("#refill").fadeIn("slow");
        $('#refill_button').removeClass('active');
        $("#kit_button").removeClass('active');
        $('#all_button').addClass('active');
    });


});

(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 54
    });
  
  })(jQuery); // End of use strict