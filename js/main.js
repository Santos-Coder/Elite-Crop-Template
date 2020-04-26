$(function () {
    'use strict';
    //adjust slider height
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
   $('.slider').height(winH - ( upperH + navH ));
//----------------------------------------------- nav active
$('.collapse ul li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
   //------------------------------------------------- counter
   $(window).on('scroll', function countFun() { 
    if ($(window).scrollTop() >= $('.count').offset().top) { 
        
        $('.number').easy_number_animate({
            start_value: 0,
            end_value: 3329,
            duration: 2000
          });
          $('.number-1').easy_number_animate({
            start_value: 0,
            end_value: 156789,
            duration: 2000
          });
          $('.number-2').easy_number_animate({
            start_value: 0,
            end_value: 13222,
            duration: 2000
          });
          $('.number-3').easy_number_animate({
            start_value: 0,
            end_value: 9623689,
            duration: 2000
          });
          
    } 
}); 
//------------------------------------------------ wow plugin
    new WOW().init(); 
//------------------------------------------------ nav mobile
$('.navbar-toggler').on('click', function() {
  $('.nav-mob').slideToggle();
});
//----------------------------------------------- list active
$('.Featured ul li').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');
});
//-------------------------------------- mixitup plugin
var mixer = mixitup('#container');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
  selectors: {
      target: '.features'
      },
      animation: {
      duration: 300
}
});
//---------------------------------- map plugin
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 34.397, lng: 150.644 },
    zoom: 2
});
}


});
