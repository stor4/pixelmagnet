var swiper = new Swiper(".featuredWorks__swiper", {
  slidesPerView: 2.2,
  spaceBetween: 32,
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
    draggable: true,
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
      slidesPerView: 1.1,
      spaceBetween: 16,
    }
  }
})
