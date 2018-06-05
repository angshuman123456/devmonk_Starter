let studentHeading = document.querySelector('.student-heading-tertiary');
let professionalHeading =
                document.querySelector('.professional-heading-tertiary');
let institutionalHeading =
                document.querySelector('.institutional-heading-tertiary');
let studentMembershipDetails =
                document.querySelector('.student-content-details');
let professionalMembershipDetails =
                document.querySelector('.professional-content-details');
let institutionalMembershipDetails =
                document.querySelector('.institutional-content-details');

$('.stu-details-btn').click(function(e) {
  e.preventDefault();
  let buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
  studentHeading.style.display = 'block';
  studentMembershipDetails.style.display = 'block';
  professionalHeading.style.display = 'none';
  professionalMembershipDetails.style.display = 'none';
  institutionalHeading.style.display = 'none';
  institutionalMembershipDetails.style.display = 'none';
});

$('.pro-details-btn').click(function(e) {
  e.preventDefault();
  let buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
  studentHeading.style.display = 'none';
  studentMembershipDetails.style.display = 'none';
  professionalHeading.style.display = 'block';
  professionalMembershipDetails.style.display = 'block';
  institutionalHeading.style.display = 'none';
  institutionalMembershipDetails.style.display = 'none';
});

$('.ins-details-btn').click(function(e) {
  e.preventDefault();
  let buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
  studentHeading.style.display = 'none';
  studentMembershipDetails.style.display = 'none';
  professionalHeading.style.display = 'none';
  professionalMembershipDetails.style.display = 'none';
  institutionalHeading.style.display = 'block';
  institutionalMembershipDetails.style.display = 'block';
});

$('.ins-choose-btn').click(function(e) {
  e.preventDefault();
  $('.form__radio--college').prop('checked', true);
  $('.form__radio--student').prop('checked', false);
  $('.form__radio--professional').prop('checked', false);
});

$('.pro-choose-btn').click(function(e) {
  e.preventDefault();
  $('.form__radio--college').prop('checked', false);
  $('.form__radio--student').prop('checked', false);
  $('.form__radio--professional').prop('checked', true);
});

$('.stu-choose-btn').click(function(e) {
  e.preventDefault();
  $('.form__radio--college').prop('checked', false);
  $('.form__radio--student').prop('checked', true);
  $('.form__radio--professional').prop('checked', false);
});

$('#modal-container').click(function() {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});
