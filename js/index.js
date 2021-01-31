//Animation des barres de menu
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
  $('.logoTopName').toggle();

});
//Animation lors du click des li a
$("nav ul").on('click', function(){
  $(this).toggleClass('hidden');
  $('.menu-section').toggleClass("on");
  $(".menu-toggle").toggleClass('on');
  $('.logoTopName').toggle();
})

//Soulignage de l'onglet actif
$("[class*=nav-link]").on('click',function(){
  $('.nav-link.active').toggleClass('active');
  $(this).toggleClass('active');
})
