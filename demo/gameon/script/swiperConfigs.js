
var swiperOne = new Swiper('.mySwiperOne', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 7000, // اسلاید خودکار هر ۳ ثانیه
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiperTwo = new Swiper('.mySwiperTwo', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000, // اسلاید خودکار هر ۳ ثانیه
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    "@0.75": {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    "@1.00": {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    "@1.50": {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    "@1.75": {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    
  },
});

