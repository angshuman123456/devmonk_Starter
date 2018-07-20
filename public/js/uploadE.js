$(document).ready(function () {
  $('#upload-event').submit(function () {
    let uploadInput = $('#upload-input-e');
    console.log('inside upload ajax');
    if (uploadInput.val() != '') {
      let formData = new FormData();

      formData.append('upload', uploadInput[0].files[0]);
      $.ajax({
        url: '/editEvent',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function () {
          uploadInput.val('');
        },
      });
    }
  });
});
