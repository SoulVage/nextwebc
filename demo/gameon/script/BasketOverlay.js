// المان‌های موردنیاز
const addToCartBtn = document.querySelector('.add-to-cart');
const cartContainer = document.querySelector('.cart-container');
const overlay2 = document.querySelector('.overlay2');
const body = document.body;

// رویداد کلیک برای نمایش
addToCartBtn.addEventListener('click', () => {
    cartContainer.classList.add('show'); // نمایش سبد خرید
    overlay2.classList.add('show'); // نمایش overlay
    body.style.overflow = 'hidden'; // غیرفعال کردن اسکرول
});

// رویداد کلیک برای مخفی کردن
overlay2.addEventListener('click', () => {
    cartContainer.classList.remove('show'); // مخفی کردن سبد خرید
    overlay2.classList.remove('show'); // مخفی کردن overlay
    body.style.overflow = ''; // فعال کردن اسکرول
});
