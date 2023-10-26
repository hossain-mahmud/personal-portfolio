// ========== slider part start
$('.cards_row').slick({
  dots: true,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  prevArrow: '<i class="fa-solid fa-chevron-left prev_arrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right next_arrow"></i>',
  dots: true,
  responsive: [{
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
// skills counter start
$('.skills_count').counterUp({
  delay: 20,
  time: 1000
});
// skills counter end
// nav sticky start
let mainMenu = document.querySelector('.main_menu');
let backTotop = document.querySelector('.back_to_top');

window.addEventListener('scroll', () => {
  let scrolling = this.scrollY;

  if (scrolling > 100) {
    mainMenu.classList.add('fixed_menu')
    backTotop.classList.add('fixed_back_to_top')
  } else {
    mainMenu.classList.remove('fixed_menu')
    backTotop.classList.add('fixed_back_to_top')
  }
})
// nav sticky end