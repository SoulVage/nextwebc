let keyPressCount = 0; // تعداد فشارهای دکمه
let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-EN'; // زبان فارسی
recognition.continuous = true; // ضبط غیرمداوم برای تشخیص پایان
recognition.interimResults = true; // نتایج موقت برای نوشتن زنده

// وقتی دکمه S فشار داده شد
document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        keyPressCount++;
        if (keyPressCount === 5) {
            // بعد از 5 بار فشار دادن دکمه S
            console.log('5 بار دکمه S فشرده شد!');
            keyPressCount = 0; // ریست کردن شمارش

            // شروع سیستم صوتی
            startVoiceCommand();
        }
    }
});

// شروع سیستم صوتی
function startVoiceCommand() {
    console.log('سیستم صوتی فعال شد.');
    recognition.start();

    recognition.onresult = function(event) {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            }
        }

        // بررسی دستورات صوتی
        if (finalTranscript.toLowerCase().includes('open basket')) {
            openBasket();
        } else if (finalTranscript.toLowerCase().includes('close basket')) {
            closeBasket();
        } else if (finalTranscript.toLowerCase().includes('scroll down')) {
            scrollDown(finalTranscript);
        } else if (finalTranscript.toLowerCase().includes('scroll up')) {
            scrollUp(finalTranscript);
        } else if (finalTranscript.toLowerCase().includes('scroll to max')) {
            scrollToMax();
        }
    };

    recognition.onerror = function(event) {
        console.error("خطا در تشخیص گفتار:", event.error);
    };
}

// اجرای دستور 'open basket'
function openBasket() {
    const basketButton = document.querySelector('.add-to-cart');
    if (basketButton) {
        basketButton.click(); // کلیک کردن روی دکمه 'افزودن به سبد خرید'
    }
}

// اجرای دستور 'close basket'
function closeBasket() {
    // محاسبه موقعیت وسط صفحه
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // شبیه‌سازی کلیک در وسط صفحه
    const element = document.elementFromPoint(middleX, middleY);
    if (element) {
        element.click(); // کلیک در وسط صفحه
        console.log('کلیک در وسط صفحه شبیه‌سازی شد');
    } else {
        console.log('موقعیت وسط صفحه قابل کلیک نیست');
    }
}

// اجرای دستور 'scroll down' با استفاده از عدد
function scrollDown(transcript) {
    const number = extractNumber(transcript);
    const scrollAmount = 300 * number; // تعداد اسکرول بر اساس عدد

    window.scrollBy(0, scrollAmount); // اسکرول به پایین
    console.log(`اسکرول به پایین به اندازه ${scrollAmount} پیکسل`);
}

// اجرای دستور 'scroll up' با استفاده از عدد
function scrollUp(transcript) {
    const number = extractNumber(transcript);
    const scrollAmount = 300 * number; // تعداد اسکرول بر اساس عدد

    window.scrollBy(0, -scrollAmount); // اسکرول به بالا
    console.log(`اسکرول به بالا به اندازه ${scrollAmount} پیکسل`);
}

// اجرای دستور 'scroll to max' برای اسکرول به انتهای صفحه
function scrollToMax() {
    window.scrollTo(0, document.body.scrollHeight); // اسکرول به پایین‌ترین نقطه صفحه
    console.log('اسکرول به پایین‌ترین نقطه صفحه انجام شد');
}

// استخراج عدد از دستور صوتی
function extractNumber(transcript) {
    const match = transcript.match(/\d+/); // پیدا کردن اولین عدد در دستور
    return match ? parseInt(match[0]) : 1; // اگر عدد پیدا شد، آن را بازمی‌گرداند، در غیر این صورت 1 را برمی‌گرداند
}
