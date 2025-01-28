window.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');

    const loadImage = (image) => {
        const imgSrc = image.getAttribute('data-src');
        if (imgSrc) {
            image.setAttribute('src', imgSrc);  // افزودن src
            image.removeAttribute('data-src');   // حذف data-src
        }
    };

    // بارگذاری تصاویر قابل مشاهده هنگام بارگذاری صفحه
    images.forEach(image => {
        if (image.getBoundingClientRect().top < window.innerHeight && !image.hasAttribute('src')) {
            loadImage(image);
        }
    });

    // بارگذاری تصاویر هنگام اسکرول
    window.addEventListener('scroll', () => {
        images.forEach(image => {
            if (image.getBoundingClientRect().top < window.innerHeight && !image.hasAttribute('src')) {
                loadImage(image);
            }
        });
    });
});
