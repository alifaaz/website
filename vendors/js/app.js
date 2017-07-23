
      $("body").niceScroll({
          cursorcolor:"#00acee",
          cursorwidth:"11px"});
      $(".groups").height($(window).height());


   //      $('body').animatescroll({scrollSpeed:1000});
   //      $('.about').click(function(){
   //        $('#about').animatescroll({scrollSpeed:1000,easing:'easeOutSine'});
   //      });
   //      $('.home').click(function(){
   //        $('#home').animatescroll({scrollSpeed:1000,easing:'easeOutSine'});
   //      });
   //      $('.contact').click(function(){
   //        $('#contact').animatescroll({scrollSpeed:1000,easing:'easeOutSine'});
   //      });
        $('.top').click(function(){
          $('#home').animatescroll({scrollSpeed:1000,easing:'easeOutSine'});
        });

   $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });

 $('.arrow-down').click(function(){
          $('.about').animatescroll({scrollSpeed:1000,easing:'easeOutSine',padding:70});
        });
   $("#groups").fadeShow({
    
          images:['images/banner1.jpg','images/banner2.jpg','images/banner.jpg'],
          speed:10000

   });
 //     $(".banner-content").fitText();
 $("h1.jh ").fitText();
 // $(".head-about").fitText();

 $(".owl-carousel").owlCarousel({
  
   
    loop:true,
    margin:10,
     animateOut: 'fadeOut',
    animateIn: 'fadeIn',
            
   
     autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
          
        },
        600:{
            items:2,
          
        },
        1000:{
            items:1,
           
    
           
        }
    }
  // smartSpeed:1000,
  // animateOut:true,
  // animateIn:true
 });
 

 //google map setting
  function initMap() {
        var uluru = {lat: 40, lng: 30};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 5,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


      //animate items
      // $('.fa').animate('bounce');


        $('li').hover(function(){

              $('.fa',this).addClass('animated jello');
        },function(){

             $('.fa',this).removeClass('animated jello');

        });

     // while(true){

     //          $('.arrow-down').addClass('animated jello');
     //          $('.arrow-down').removeClass('animated jello');


     // }


     $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
         $('nav').addClass('navout');
        } else {
                    $('nav').removeClass('navout');

        }
    });
      