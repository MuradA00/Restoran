$('wrapper').addClass('loaded');

$('.icon-menu').click(function(event) {
  $(this).toggleClass('active');
  $('.header__content').toggleClass('active');
  $('body').toggleClass('lock');
});
