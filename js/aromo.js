// -------------- PreLoad --------------
$(window).on('load', function(e) {
  setTimeout(function(){
    $(".pre-loader").fadeOut(600);
    AOS.init({
      duration: 100,
      easing: 'ease-in-out',
      disable: 'phone'
    });
  }, 200);
})


// -------------- Scrolltop Button --------------

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}


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
  autoplayTimeout:6000,
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
            items:2,
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

// -------------- Reponsive Menu --------------

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
  $('#cssmenu').click(function(event){
    event.stopPropagation();
    });
});
})(jQuery);

$(window).on("load, resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth > 766) {
      $("#cssmenu").css("display","none");
      $("#nav-toggle").removeClass("active");
    }
});