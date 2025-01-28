document.addEventListener('DOMContentLoaded', () => {
    // انتخاب همه کارت‌های محصول
    const productCards = document.querySelectorAll('.swiper-slide');

    // اضافه کردن رویداد کلیک به هر کارت محصول
    productCards.forEach((card, index) => {
        card.addEventListener('click', (event) => {
            // جلوگیری از رفتار پیش‌فرض لینک (یعنی #)
            event.preventDefault();

            // گرفتن عنوان محصول از h5
            const productTitle = card.querySelector('h5').textContent;

            // تبدیل عنوان به اسلاگ (برای URL-friendly)
            const slug = productTitle
                .toLowerCase() // تبدیل به حروف کوچک
                .trim() // حذف فضاهای اضافی در ابتدا و انتها
                .replace(/\s+/g, '-') // تبدیل تمامی فاصله‌ها به '-'
                .replace(/[^\w\-آ-ی]/g, '') // حذف کاراکترهای غیرمجاز (حروف انگلیسی، اعداد، و حروف فارسی مجاز)
                .normalize('NFD') // نرمال‌سازی برای حذف نشانه‌های ترکیب حروف
                .replace(/[\u0300-\u036f]/g, '') // حذف نشانه‌های ترکیب حروف (مانند کسره، ضمه و ...)
                .replace(/^-+|-+$/g, ''); // حذف خط فاصله اضافی در ابتدای و انتهای اسلاگ

            // ساخت شماره محصول
            const productNumber = index + 1; // شماره ترتیبی محصول (از 1 شروع می‌شود)

            // ساخت URL جدید به صورت /test.html?productnumber=4&slug=product-slug
            const productURL = `test.html?/product/${productNumber}/${slug}`;

            // هدایت به صفحه جدید
            window.location.href = productURL;
        });
    });
});
