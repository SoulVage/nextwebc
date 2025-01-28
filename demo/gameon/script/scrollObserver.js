const mainNav = document.getElementById("main-nav");
const scrollNav = document.getElementById("scroll-nav");

let lastScrollY = window.scrollY;
let isMainNavVisible = true;

// برای مشاهده mainNav
const observer = new IntersectionObserver(
    (entries) => {
        const mainNavEntry = entries[0];
        isMainNavVisible = mainNavEntry.isIntersecting;

        // اگر mainNav دیده شود، scrollNav مخفی شود
        if (isMainNavVisible) {
            scrollNav.classList.remove("visible");
        }
    },
    {
        root: null,
        threshold: 0,
    }
);

// نظارت روی mainNav
observer.observe(mainNav);

// مدیریت اسکرول
window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // اگر mainNav دیده نشود و اسکرول به بالا باشد
    if (!isMainNavVisible && currentScrollY < lastScrollY) {
        scrollNav.classList.add("visible");
    }

    // اگر اسکرول به پایین باشد یا mainNav دیده شود
    if (currentScrollY > lastScrollY || isMainNavVisible) {
        scrollNav.classList.remove("visible");
    }

    lastScrollY = currentScrollY;
});