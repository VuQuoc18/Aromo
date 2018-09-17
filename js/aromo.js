$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

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
    1440:{
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
            items:2,
            nav:false
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

console.log("a");



  console.log("b");