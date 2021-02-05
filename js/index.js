//Animation des barres de menu
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
  $('.logoTop').toggleClass('on');

});
//Animation lors du click des li a
$("nav ul").on('click', function(){
  $(this).toggleClass('hidden');
  $('.menu-section').toggleClass("on");
  $(".menu-toggle").toggleClass('on');
  $('.logoTop').toggleClass('on');
});

//Soulignage de l'onglet actif
$("[class*=nav-link]").on('click',function(){
  $('.nav-link.active').toggleClass('active');
  $(this).toggleClass('active');
});
