var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // پیش‌فرض برای صفحات بزرگتر
  spaceBetween: 100,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".custom-next-button", // دکمه راست
    prevEl: ".custom-prev-button", // دکمه چپ
  },
  breakpoints: {
    // برای صفحه‌نمایش‌های کوچکتر از 400px
    400: {
      slidesPerView: 2, // تعداد اسلایدها 1
      spaceBetween: 50, // فاصله بین اسلایدها
    },
  },
});
