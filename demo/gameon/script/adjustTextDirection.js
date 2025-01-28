// تابعی برای تنظیم جهت تمام المان‌هایی که کلاس auto-dir دارند
function fixTextDirectionWithClass() {
    // گرفتن تمامی المان‌هایی که کلاس auto-dir دارند
    const elements = document.querySelectorAll('.auto-dir');
  
    elements.forEach(element => {
      // گرفتن محتوای متنی هر المان
      const text = element.innerText || element.textContent;
  
      // بررسی اینکه آیا در متن حروف فارسی وجود دارد یا نه
      const hasFarsi = /[آ-ی]/.test(text);
  
      // اگر متن شامل فارسی است، جهت آن را به right-to-left تغییر می‌دهیم
      if (hasFarsi) {
        element.style.direction = 'rtl';
      } else {
        element.style.direction = 'ltr';
      }
    });
  }
  
  // فراخوانی تابع برای اصلاح جهت متن‌ها در صفحه
  fixTextDirectionWithClass();
