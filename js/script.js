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
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
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

  if (scrolling > 150) {
    mainMenu.classList.add('fixed_menu')
    backTotop.classList.add('fixed_back_to_top')

  } else {
    mainMenu.classList.remove('fixed_menu')
    backTotop.classList.remove('fixed_back_to_top')
  }
})
// nav sticky end
//cursor animation start
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
//cursor animation end