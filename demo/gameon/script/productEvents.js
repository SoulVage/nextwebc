const links = {
    favoriteproduct: "https://example.com/link1",
    addtobasketproduct: "https://example.com/link2",
    infoproduct: "https://example.com/link3",
    showimagesproduct: "https://example.com/link4"
};

// حلقه برای افزودن رویداد به هر عنصر
Object.keys(links).forEach(id => {
    const element = document.getElementById(id); // انتخاب عنصر با id
    if (element) { // اطمینان از وجود عنصر
        element.addEventListener("click", () => {
            window.location.href = links[id]; // هدایت به لینک مقصد
        });
    }
});
