var swiper1 = new Swiper(".articleRelated__swiper", {
  slidesPerView: 2.2,
  spaceBetween: 32,
  scrollbar: {
    el: ".swiper-scrollbar",
    // hide: true,
    draggable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 2.009,
      spaceBetween: 25,
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
})
