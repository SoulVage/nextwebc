const micButton = document.getElementById('talking-mic');
const inputField = document.getElementById('search-input');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    alert("مرورگر شما از تشخیص گفتار پشتیبانی نمی‌کند.");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = 'fa-IR'; // زبان فارسی
    recognition.continuous = false; // ضبط غیرمداوم برای تشخیص پایان
    recognition.interimResults = true; // نتایج موقت برای نوشتن زنده

    micButton.addEventListener('click', () => {
        if (micButton.classList.contains('listening')) {
            recognition.stop(); // متوقف کردن ضبط
            micButton.classList.remove('listening');
            micButton.classList.remove('blinking'); // حذف افکت چشمک زن
        } else {
            recognition.start(); // شروع ضبط
            micButton.classList.add('listening');
            micButton.classList.add('blinking'); // افزودن افکت چشمک زن
        }
    });

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
        }
        inputField.value = finalTranscript + interimTranscript;
    };

    recognition.onspeechend = () => {
        // وقتی صدایی دیگر تشخیص داده نمی‌شود
        recognition.stop();
        micButton.classList.remove('listening');
        micButton.classList.remove('blinking'); // حذف افکت چشمک زن
    };

    recognition.onend = () => {
        // وقتی ضبط به پایان می‌رسد (می‌توانید اینجا ضبط را دوباره شروع کنید)
        micButton.classList.remove('listening');
        micButton.classList.remove('blinking');
        console.log("ضبط متوقف شد.");
    };

    recognition.onerror = (event) => {
        console.error("خطا در تشخیص گفتار:", event.error);
        micButton.classList.remove('listening');
        micButton.classList.remove('blinking');
    };
}


