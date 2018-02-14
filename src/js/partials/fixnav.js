function scrollToTop() {
  $("body").animate({"scrollTop": "0px"}, 1000);
}


// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


(function($) {
  $(function() {
    $('.nav > .nav__item').each(function(){
      wid = $(this).width();
      $(this).css('width', wid + 3 + 'px');
    });
  });
})(jQuery);


$('foreignObject').hover(function() {
    xs($(this), true)
  }, function() {
    xs($(this), false)
});

function xs($this, is_hovered) {
  var getVal = parseInt($this.attr('y'));
  if (is_hovered) {
    $this.attr('y', parseInt(getVal) - 20);
  } else {
    $this.attr('y', parseInt(getVal) + 20);
  };
}


$(window).on('load resize', function(){
  getWindowSize = $(window).width();

  if (getWindowSize > 1200) { //extralarge
    $('.team__obj_1').attr('y','273');
    $('.team__obj_2').attr('y','233');
    $('.team__obj_3').attr('y','240');
    $('.team__obj_4').attr('y','265');
    $('.team__obj_5').attr('y','203');

  } else if (getWindowSize < 1200 && getWindowSize > 992 ) { // large
    $('.team__obj_1').attr('y','255');
    $('.team__obj_2').attr('y','217');
    $('.team__obj_3').attr('y','225');
    $('.team__obj_4').attr('y','248');
    $('.team__obj_5').attr('y','185');

  } else if (getWindowSize < 992 && getWindowSize > 768) { // medium
    $('.team__obj_1').attr('y','225');
    $('.team__obj_2').attr('y','195');
    $('.team__obj_3').attr('y','205');
    $('.team__obj_4').attr('y','220');
    $('.team__obj_5').attr('y','155');

  } else if (getWindowSize < 768 && getWindowSize > 576) { //small
    $('.team__obj_1').attr('y','215');
    $('.team__obj_2').attr('y','185');
    $('.team__obj_3').attr('y','195');
    $('.team__obj_4').attr('y','210');
    $('.team__obj_5').attr('y','135');

  } else {  //extrasmall
    $('.team__obj_1').attr('y','210');
    $('.team__obj_2').attr('y','185');
    $('.team__obj_3').attr('y','195');
    $('.team__obj_4').attr('y','205');
    $('.team__obj_5').attr('y','135');
  }

});
