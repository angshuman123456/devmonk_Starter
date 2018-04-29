$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.contact').fadeOut();
  } else {
    $('.contact').fadeIn();
  }
});
