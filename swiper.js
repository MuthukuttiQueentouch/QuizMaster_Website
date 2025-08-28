var swiper = new Swiper(".testimonials-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true, // default ah mobile ku center highlight
  navigation: {
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: false, // tablet/desktop la center pannama vechiru
    },
    1200: {
      slidesPerView: 3,
      // centeredSlides: false, // desktop la last ku smooth ah pogum
    }
  }
});
