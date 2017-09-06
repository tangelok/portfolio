// Make it rain!

/* ----------------------------------------
Main
------------------------------------------- */
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=300) {
	 $('.intro h2').fadeIn(750);
 }
 else {
  $('.intro h2').fadeOut(750);
 }
});


/* ----------------------------------------
Responsive Design
------------------------------------------- */

$('.hamburger').on('click', function (){
  $('.side-nav').toggleClass('open');
});
$('.exit   ').on('click', function(){
  $('.side-nav').removeClass('open');
});



//IF you scroll x pixels
  //Then it will remove current nav bar and add new one



/* ==========================================================================
  Circle Graph
========================================================================== */

$(document).ready(function() {
  $('.html').css('width', '85%');
  $('.css').css('width', '85%');
  $('.jquery').css('width', '70%');
  $('.javascript').css('width', '60%');
  $('.adobe').css('width', '80%');
  $('.wordpress').css('width', '10%');
  $('.ui').css('width', '70%');
  $('.rwd').css('width', '80%');
});
