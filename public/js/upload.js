$(document).ready(function() {
    $('#upload-brochure').submit(function () {
        let uploadInput = $('#upload-input-b');
        if (uploadInput.val() != '') {
            let formData = new FormData();

            formData.append('upload', uploadInput[0].files[0]);
            $.ajax({
                url: '/editBrochure',
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
