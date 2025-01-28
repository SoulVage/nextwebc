document.addEventListener("DOMContentLoaded", () => {
    const h5Elements = document.querySelectorAll("h5"); // انتخاب تمام <h5>
    
    h5Elements.forEach(h5 => {
      const originalText = h5.textContent.trim(); // متن اصلی
      const maxLength = 42; // حداکثر تعداد حروف

      if (originalText.length > maxLength) {
        const truncatedText = originalText.slice(0, maxLength) + "...";
        h5.textContent = truncatedText; // نمایش متن کوتاه شده
        
        // ساخت tooltip
        const tooltip = document.createElement("span");
        tooltip.classList.add("tooltip");
        tooltip.textContent = originalText; // متن اصلی داخل tooltip
        h5.appendChild(tooltip);
      }
    });
  });