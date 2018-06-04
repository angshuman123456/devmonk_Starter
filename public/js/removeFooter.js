$(window).scroll(function() {
  let checked = document.querySelector('#navi-toggle').checked;
  if (($(this).scrollTop() > 0 && !checked)) {
    console.log($(this).scrollTop() + $(this).height() == $(document).height());
    $('.contact').fadeOut();
  } else {
    $('.contact').fadeIn();
  }
});
