function openNav() {
  $('.offcanvas').css('width', '250px');
  $('.header__logo').css('left', '-250px');
  $('.offcanvas__logo').css('left', '0');
  $('.offcanvas__link').css('left', '0');
  $('.offcanvas__social').css('left', '42px');
  $('.offcanvas__social-link').css('margin-left', '15px');
  $('.header__offcanvas').attr('onclick', 'closeNav()');
}

function closeNav() {
  $('.offcanvas').css('width', '0');
  $('.header__logo').css('left', '0');
  $('.offcanvas__logo').css('left', '-250px');
  $('.offcanvas__link').css('left', '-250px');
  $('.offcanvas__social').css('left', '-250px');
  $('.offcanvas__social-link').css('margin-left', '0');
  $('.header__offcanvas').attr('onclick', 'openNav()');
}

$(document).on('click touchstart', function(e) {
  if ((e.target != $('.offcanvas')[0]) && (e.target != $('.header__offcanvas')[0]) && ($('.offcanvas').css('width')) == '250px') {
    var a_tags = $($('.offcanvas')[0]).find('a');
    var img_tags = $($('.offcanvas')[0]).find('img');

    for (var i = 0; i < a_tags.length; i++) {
      if (e.target == a_tags[i] || e.target == img_tags[i]) {
        return;
      }
    }
    closeNav();
  }
});
