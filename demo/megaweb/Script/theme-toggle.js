const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const moonIcon2 = document.getElementById('moon-icon2');
const sunIcon2 = document.getElementById('sun-icon2');
const body = document.body;

// بررسی وضعیت تم در localStorage
let darkMode = localStorage.getItem('darkMode') === 'true';

// تابع تغییر تم
const toggleTheme = () => {
  darkMode = !darkMode; // تغییر حالت

  if (darkMode) {
    // تغییر به دارک مود
    body.style.setProperty('--bg-color', 'var(--dark-bg-color)');
    body.style.setProperty('--second-color', 'var(--dark-second-color)');
    body.style.setProperty('--text-color', 'var(--dark-text-color)');
    
    // تغییر آیکون‌ها
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
    moonIcon2.style.display = 'none';
    sunIcon2.style.display = 'block';

    // ذخیره وضعیت دارک مود در localStorage
    localStorage.setItem('darkMode', 'true');
  } else {
    // بازگشت به لایت مود
    body.style.setProperty('--bg-color', '#F3F4F6');
    body.style.setProperty('--second-color', '#ffff');
    body.style.setProperty('--text-color', '#000000');
    
    // تغییر آیکون‌ها
    moonIcon.style.display = 'block';
    sunIcon.style.display = 'none';
    moonIcon2.style.display = 'block';
    sunIcon2.style.display = 'none';

    // ذخیره وضعیت لایت مود در localStorage
    localStorage.setItem('darkMode', 'false');
  }
};

// اضافه کردن رویداد کلیک برای هر دو دکمه
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle2').addEventListener('click', toggleTheme);

// تنظیم تم بر اساس localStorage هنگام لود شدن صفحه
if (darkMode) {
  // اگر در حالت دارک مود بود
  body.style.setProperty('--bg-color', 'var(--dark-bg-color)');
  body.style.setProperty('--second-color', 'var(--dark-second-color)');
  body.style.setProperty('--text-color', 'var(--dark-text-color)');
  moonIcon.style.display = 'none';
  sunIcon.style.display = 'block';
  moonIcon2.style.display = 'none';
  sunIcon2.style.display = 'block';
} else {
  // حالت لایت مود
  body.style.setProperty('--bg-color', '#F3F4F6');
  body.style.setProperty('--second-color', '#ffff');
  body.style.setProperty('--text-color', '#000000');
  moonIcon.style.display = 'block';
  sunIcon.style.display = 'none';
  moonIcon2.style.display = 'block';
  sunIcon2.style.display = 'none';
}
