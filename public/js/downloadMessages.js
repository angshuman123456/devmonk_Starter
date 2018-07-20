$(document).ready(function () {
  console.log('askljhfjkashdlfjkhasldfas');
  $.ajax({
    url: '/getMessages',
    dataType: 'json',
    type: 'GET',
    cache: false,
  }).done(function(data) {
    showMessages(data);    
  });
});

function showMessages(data) {
  $.each(data.reverse(), function(idx, message) {
    if (typeof(message.email) == "undefined") {
      message.email = '';
    }
    $('#messages').append(
      `<div class="row">
        <ul>
          <li>Name: ${message.name}</li>
          <li>Email: ${message.email}</li>
          <li>Contact: ${message.contact}</li>
          <li>Message: ${message.post}</li>
        </ul>
      </div>
      <br />`
    )
  });
}
