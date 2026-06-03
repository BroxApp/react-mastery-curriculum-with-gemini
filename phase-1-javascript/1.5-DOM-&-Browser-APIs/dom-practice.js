// 1. Selection: شکار کردن المان‌ها
const title = document.querySelector('#main-title');
const actionBtn = document.querySelector('.action-btn');
const body = document.body;

// 2. Logic: تابعی برای تغییر وضعیت
function handleInteractions() {
    // تغییر متن
    title.textContent = "DOM is under control! 🚀";
    
    // استفاده از کلاس به جای استایل مستقیم برای مدیریت بهتر در CSS
    title.classList.toggle('highlight-text');
    body.classList.toggle('dark-theme');
    
    console.log("Button was clicked and DOM updated.");
}

// اصلاح غلط املایی و نام‌گذاری استاندارد
function updateButtonOnHover() {
    actionBtn.textContent = "Ready?";
}
function resetButtonText() {
    actionBtn.textContent = "Click Me!";
}

// 3. Event Listener: گوش دادن به کاربر
actionBtn.addEventListener('click', handleInteractions);
actionBtn.addEventListener('mouseenter', updateButtonOnHover);
actionBtn.addEventListener('mouseleave', resetButtonText);

// Task for Brox: سعی کن یک Event Listener از نوع 'mouseenter' هم اضافه کنی.