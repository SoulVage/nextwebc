function convertToPersianNumbers(text) {
    const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return text.replace(/\d/g, (match) => persianNumbers[match]);
}

function convertNumbersInContent() {
    const elements = document.querySelectorAll('body *'); // انتخاب تمام عناصر درون کلاس content
    elements.forEach(element => {
        if (element.childNodes.length) {
            element.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) { // فقط متن را بررسی کن
                    node.textContent = convertToPersianNumbers(node.textContent);
                }
            });
        }
    });
}

// اجرا کردن تابع پس از بارگذاری صفحه
window.onload = convertNumbersInContent;     