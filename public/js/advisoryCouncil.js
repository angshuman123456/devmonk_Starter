
$('.all-btn').click(function(e) {
  e.preventDefault();
  $('.grid').isotope({filter: '.all'});
});

$('.national-btn').click(function(e) {
  e.preventDefault();
  $('.grid').isotope({filter: '.national'});
});

$('.gwalior-btn').click(function(e) {
  e.preventDefault();
  $('.grid').isotope({filter: '.gwalior'});
});
