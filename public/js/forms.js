// let studentHomeTown = document.querySelector('[name="homeTown"]');
// let areaOfExpertise = document.querySelector('[name="areaOfExpertise"]');
// let college = document.querySelector('[name="college"]');
// let collegeWithAddress = document.querySelector('[name="collegeWithAddress"]');

// let formTabs = document.querySelector('.form__tabs');
// formTabs.addEventListener('click', selectTab);
// areaOfExpertise.style.display = 'none';
// collegeWithAddress.style.display = 'none';


// /**
//  * @param {Object} e - event object that is implicitly passed
//  */
// function selectTab(e) {
//   e.preventDefault();
//   if (e.target.classList.contains('student')) {
//     studentHomeTown.style.display = 'block';
//     areaOfExpertise.style.display = 'none';
//     collegeWithAddress.style.display = 'none';
//     college.style.display = 'block';
//   } else if (e.target.classList.contains('professional')) {
//     studentHomeTown.style.display = 'none';
//     areaOfExpertise.style.display = 'block';
//     collegeWithAddress.style.display = 'block';
//     college.style.display = 'none';
//   }
// }

$('.button').click(function(){
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
  })
  
  $('#modal-container').click(function(){
    $(this).addClass('out');
    $('body').removeClass('modal-active');
  });