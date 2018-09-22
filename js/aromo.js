// $(document).ready(function(){
//   // Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if
//   });
// });

// -------------- Hover button --------------
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


// -------------- Carousel --------------
  $('.customer-logos').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  autoplayTimeout:1000,
  dots:false,
  responsive:{
    0:{
    items:1
    },
    600:{
    items:2
    },
    1000:{
    items:4
    },
    1400:{
    items:6
    }
  }
})


  $('.carousel').owlCarousel({
  loop:true,
  nav:true,
  navText: [$('.am-prev'),$('.am-next')],
  dots:true,
  dotsData:false,
  responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        768:{
            items:3,
            nav:true,
            loop:true
        },
        1000:{
            items:2,
            nav:true,
            loop:true
        },
        1440:{
            items:2,
            nav:true,
            loop:true
        }
    }
})


// $(document).ready(function(){
//   $('#nav-icon').click(function(){
//     $(this).toggleClass('open');
//   });
// });


    // $('ul.nav > li > a').click(function() {
        
    //     $('ul.sub-menu').slideUp('normal');
   
    //     if($(this).next('ul.sub-menu').is(':hidden') == true) {    
    //         $(this).next('ul.sub-menu').slideDown('normal');
    //         } 
            
    // });


$('#nav-toggle').click(function() {
      $('#cssmenu').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });


(function($){
$(document).ready(function(){

$('#cssmenu li.active').addClass('open').children('ul').show();
  $('#cssmenu li.has-sub>a').on('click', function(){
    $(this).removeAttr('href');
    var element = $(this).parent('li');
    if (element.hasClass('open')) {
      element.removeClass('open');
      element.find('li').removeClass('open');
      element.find('ul').slideUp(1000);
    }
    else {
      element.addClass('open');
      element.children('ul').slideDown(1000);
      element.siblings('li').children('ul').slideUp(1000);
      element.siblings('li').removeClass('open');
      element.siblings('li').find('li').removeClass('open');
      element.siblings('li').find('ul').slideUp(1000);
    }
  });

});
})(jQuery);
