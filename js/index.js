//Animation des barres de menu
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
  $('.logoTopName').toggle();

});

$("nav ul").on('click', function(){
  $(this).toggleClass('hidden');
  $('.menu-section').toggleClass("on");
  $(".menu-toggle").toggleClass('on');
  $('.logoTopName').toggle();
})
