// گرفتن همه المنت‌های منوی دراپ‌داون
const dropdowns = document.querySelectorAll('.dropdown');

// اضافه کردن یک المنت اورلی به body
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// اضافه کردن event listener برای منوی دراپ‌داون
dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown-menu');
    const submenuItems = dropdown.querySelectorAll('.dropdown-item');
    let hideTimeout; // تایمر برای مخفی کردن منو

    // نمایش منو و اورلی هنگام هاور روی دراپ‌داون
    dropdown.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout); // پاک کردن تایمر مخفی‌سازی
        menu.classList.add('show'); // نمایش منو
        overlay.classList.add('show'); // نمایش اورلی
    });

    // مخفی کردن منو و اورلی هنگام خروج از دراپ‌داون
    dropdown.addEventListener('mouseout', (event) => {
        const relatedTarget = event.relatedTarget; // المانی که ماوس به سمت آن حرکت کرده
        hideTimeout = setTimeout(() => {
            if (!dropdown.contains(relatedTarget)) {
                menu.classList.remove('show'); // مخفی کردن منو
                overlay.classList.remove('show'); // مخفی کردن اورلی
            }
        }, 100); // تاخیر کوچک برای رفع باگ
    });

    // مدیریت ساب‌منوها
    submenuItems.forEach(item => {
        const submenu = item.querySelector('.dropdown-submenu');
        let submenuHideTimeout; // تایمر برای ساب‌منو

        item.addEventListener('mouseover', () => {
            clearTimeout(submenuHideTimeout); // پاک کردن تایمر مخفی‌سازی
            submenu.classList.add('show'); // نمایش ساب‌منو
        });

        item.addEventListener('mouseout', (event) => {
            const relatedTarget = event.relatedTarget;
            submenuHideTimeout = setTimeout(() => {
                if (!item.contains(relatedTarget)) {
                    submenu.classList.remove('show'); // مخفی کردن ساب‌منو
                }
            }, 100); // تاخیر کوچک برای رفع باگ
        });
    });
});



/* <div class="hypelink-wrap dropdown">
<a href="#">سرویس و خدمات <i class="fa-solid fa-angle-down"></i></a>
<ul class="dropdown-menu">
    <li class="dropdown-item">
        <a href="#">آیتم ۱</a>
        <ul class="dropdown-submenu">
            <li><a href="#">تست 1</a></li>
            <li><a href="#">تست 2</a></li>
        </ul>
    </li>
    <li class="dropdown-item">
        <a href="#">آیتم ۲</a>
        <ul class="dropdown-submenu">
            <li><a href="#">زیرآیتم ۱</a></li>
            <li><a href="#">زیرآیتم ۲</a></li>
        </ul>
    </li>
    <li><a href="#">آیتم ۳</a></li>
    <li><a href="#">آیتم ۴</a></li>
</ul>
</div> */