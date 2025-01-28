function toggleIcon(summary) {
    let icon = summary.querySelector(".icon");
    let details = summary.parentElement;

    if (details.open) {
      icon.textContent = "+";
    } else {
      icon.textContent = "−";
    }
  }