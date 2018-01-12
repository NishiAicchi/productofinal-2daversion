$(document).ready(function() {
  console.log(data);

  $back = $('#arrow-back');
  $username = $('#username');
  $avatar = $('avatar');
  $followBtn = $('follow-btn');

  // evento que nos regresa a la opcion anterior
 
  $back.click(function(e) {
    // console.log($(this).val());
    window.location.href = 'profile.html';
  });

});
