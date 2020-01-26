$(function() {

  $('#my-menu').mmenu({
    extensions:['widescreen', 'theme-black','effect-menu-slide','pagedim-black'],
    navbar: {
      title:'<img src="img/logo-1.svg" alt="Салон красоты смитлер">'
    },
    offCanvas: {
      position:'right'
    }
  });

  var api = $('#my-menu').data('mmenu');
  api.bind('opened', function() {
    $('.hamburger').addClass('is-active');
  }).bind('closed', function () {
    $('.hamburger').removeClass('is-active');
  });


//Установка высоты картинки как у блока с контентом WDMaster

//   function carouselService() {
//     $('.carousel-services-item').each(function () {
//       var ths = $(this),
//         thsh = ths.find('.carousel-services-content').outerHeight();
//       ths.find('.carousel-services-image').css('min-height', thsh);
//     });
//   }
// function onResize() {
//   $('.carousel-services-content').equalHeights();
//   $('.carousel-services-list').equalHeights();
// } onResize();
// window.onresize = function () {
//   onResize()
// };




// // Установка таймаута для правильной работы Max()

  $('.carousel-services').on('initialized.owl.carousel', function () {
    setTimeout(function() {
      Max()
      $('.carousel-services-list').equalHeights()   //выравнивание кнопок с помощью плагина equalHeights
    }, 100);
    
  });

// Инициализация карусели
  $('.carousel-services').owlCarousel({
    // loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
    responsiveClass: true,
    dots: false,
    responsive: {
      0:{
        items:1
      },
      800:{
        items:2
      },
      1100:{
        items:3
      }
     }
  })


  

  
//обрамляем слово Сервис в спан
  $('.carousel-services-composition .h3').each(function(){
    var ths = $(this);
    ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));

  });
  
  $('section .h2').each(function () {
    var ths = $(this);
    ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));

  });

  



  //Установка высоты картинки как у блока с контентом Мое решение

  function Max() {
    var max =0;

    $('.carousel-services-item').each(function () {
      if (max < $(this).find('.carousel-services-content').outerHeight(true)) {
        max = $(this).find('.carousel-services-content').outerHeight(true);
      }
    });
    
    $('.carousel-services-item').each(function () {
      $(this).find('.carousel-services-image').css('min-height', max);
      $(this).find('.carousel-services-content').css('min-height', max);
    });
        
  }

  $('select').selectize(); //селектор для почты
  


  //E-mail Ajax Send
  $("form.callback").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();  
      setTimeout(function () {
        $(th).find('.success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });


  //карусель отзывов
  $('.reviews').owlCarousel({
    loop:true,
    items:1,
    smartSpeed:700, 
    autoHeight:true
    
  });
  //карусель партнеров
  $('.partners').owlCarousel({
    loop:true,
    items:4,
    smartSpeed:700, 
    dots:false,
    nav:true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsiveClass:true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:3
      },
      1200:{
        items:4
      },
    }
    
  });


  //Кнопка наверх
  $('.top').click(function () {
    $('html,body').stop().animate({scrollTop:0}, 'slow', 'swing')
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');
    }
  });
 
  

});


//прелоадер 

$(window).on('load', function () {
  $('.preloader').delay(1000).fadeOut('slow');
})
