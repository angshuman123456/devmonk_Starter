$(document).ready(function () {
  $('#upload-mossaic').submit(function () {
    let uploadInput = $('#upload-input-m');
    if (uploadInput.val() != '') {
      let formData = new FormData();

      formData.append('upload', uploadInput[0].files[0]);
      $.ajax({
        url: '/editMossaic',
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
