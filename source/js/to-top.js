$(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#topIcon').fadeIn();
  } else {
  $('#topIcon').fadeOut();
  }
  });
  $('#topIcon').click(function() {
  $('body,html').animate({scrollTop:0},900);
  });
  });
