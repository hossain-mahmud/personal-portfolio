// ========== slider part start
$('.cards_row').slick({
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    prevArrow:'<i class="fa-solid fa-chevron-left prev_arrow"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right next_arrow"></i>',
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // ========== slider part end 