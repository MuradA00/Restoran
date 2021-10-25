$(document).ready(function(){
    $('.cont__order-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,

        responsive: [
          {
            breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
          }
        ]
    });
});



