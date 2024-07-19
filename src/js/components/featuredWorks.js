// var swiper = new Swiper(".featuredWorks__swiper", {
//   slidesPerView: 2.2,
//   spaceBetween: 32,
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     // hide: true,
//     draggable: true,
//   },
//   breakpoints: {
//     1024: {
//       slidesPerView: 2.225,
//       spaceBetween: 0,
//     },
//     668: {
//       slidesPerView: 1.5,
//       spaceBetween: 20,
//     },
//     360: {
//       slidesPerView: 1.255,
//       spaceBetween: 16,
//     }
//   }
// })

document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2.2,
    spaceBetween: 32,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    on: {
      init: function () {
        updateScrollbarWidth(this);
      },
      slideChange: function () {
        updateScrollbarWidth(this);
      },
      resize: function () {
        updateScrollbarWidth(this);
      }
    },
    breakpoints: {
      1024: {
        slidesPerView: 2.225,
        spaceBetween: 0,
      },
      668: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 1.255,
        spaceBetween: 16,
      }
    }
  });

  function updateScrollbarWidth(swiperInstance) {
    const scrollbarDrag = document.querySelector('.swiper-scrollbar-drag');
    const scrollbar = document.querySelector('.swiper-scrollbar');
    const totalSlides = swiperInstance.slides.length;
    const visibleSlides = swiperInstance.params.slidesPerView === 'auto' ? swiperInstance.slidesPerViewDynamic() : swiperInstance.params.slidesPerView;

    const dragWidth = (scrollbar.clientWidth / totalSlides) * visibleSlides;

    scrollbarDrag.style.width = `${dragWidth}px`;
  }
});


