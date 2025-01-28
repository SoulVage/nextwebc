function closePromoBar() {
    const promoBar = document.getElementById('promo-bar');
    promoBar.classList.add('hidden');

    // حذف کامل نوار تبلیغاتی بعد از انیمیشن (اختیاری)
    setTimeout(() => {
        promoBar.style.display = 'none';
    }, 0); // مدت زمان باید با transition در CSS برابر باشد
}
        
