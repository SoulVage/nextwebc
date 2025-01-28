const parent = document.querySelector('.add-to-cart'); // المان والد
const cartText = document.querySelector('.cart-text'); // متن هدف

parent.addEventListener('mouseover', () => {
    cartText.classList.remove('fast-exit'); // حذف کلاس خروج سریع
    cartText.style.opacity = 1; // نمایش متن
    cartText.style.transform = 'translateY(-50%) translateX(0%)'; // مکان نهایی
});

parent.addEventListener('mouseleave', () => {
    cartText.classList.add('fast-exit'); // اضافه کردن کلاس خروج سریع
    cartText.style.opacity = 0; // پنهان کردن متن
    cartText.style.transform = 'translateY(-50%) translateX(-10px)'; // بازگشت به مکان اولیه
});



