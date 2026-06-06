// =========================================================================
// تمرین تقویت 1.4: موتور کارهای فریلنسری و درآمد
// هدف: تسلط بر map()، filter()، reduce()، find() و sort()
// =========================================================================

// 1. داده‌های نمونه: لیست قراردادهای فریلنسری در Upwork/Fiverr
const jobs = [
  { id: "J101", title: "React Landing Page", client: "Alex", budget: 150, status: "completed", tags: ["React", "CSS"] },
  { id: "J102", title: "Fix Git Conflicts", client: "Sarah", budget: 50, status: "completed", tags: ["Git"] },
  { id: "J103", title: "E-commerce State Management", client: "John", budget: 450, status: "pending", tags: ["React", "Redux"] },
  { id: "J104", title: "Vanilla JS Dynamic Form", client: "Alex", budget: 120, status: "completed", tags: ["JavaScript", "DOM"] },
  { id: "J105", title: "Custom Hook Library", client: "Emma", budget: 300, status: "pending", tags: ["React"] },
  { id: "J106", title: "Performance Optimization", client: "Sarah", budget: 250, status: "completed", tags: ["React", "JS"] }
];

// -------------------------------------------------------------------------
// وظیفه 1: فیلتر کردن کارهای تکمیل‌شده
// استفاده از: filter()
// مأموریت: یک آرایه بساز که فقط کارهایی با وضعیت "completed" را داشته باشد.
// -------------------------------------------------------------------------
const completedJobs = jobs.filter(job => {
 return job.status === "completed";
});

console.log("1. کارهای تکمیل‌شده:", completedJobs);


// -------------------------------------------------------------------------
// وظیفه 2: استخراج جزئیات کار برای فاکتور مشتری
// استفاده از: map()
// مأموریت: آرایه completedJobs را به آرایه‌ای از آبجکت‌ها تبدیل کن.
// هر آبجکت فقط باید این موارد را داشته باشد: { invoiceTitle: "TITLE", netEarnings: budget * 0.8 }
// نکته: 20% کارمزد پلتفرم از بودجه کسر می‌شود!
// -------------------------------------------------------------------------
const invoices = completedJobs.map(job => {
  return { invoiceTitle: job.title , netEarnings: job.budget * 0.8 } 
});

console.log("2. فاکتورهای مشتری:", invoices);


// -------------------------------------------------------------------------
// وظیفه 3: محاسبه مجموع درآمد خالص
// استفاده از: reduce()
// مأموریت: جمع همه netEarnings را از آرایه invoices حساب کن.
// -------------------------------------------------------------------------
const totalNetEarnings = invoices.reduce((total, invoice) => {
 return total + invoice.netEarnings;
}, 0);

console.log("3. مجموع درآمد خالص: $", totalNetEarnings);


// -------------------------------------------------------------------------
// وظیفه 4: پیدا کردن یک کار خاص با شناسه
// استفاده از: find()
// مأموریت: دقیقاً همان آبجکت کاری را پیدا کن که id آن "J103" باشد.
// -------------------------------------------------------------------------
const targetJob = jobs.find(job => {
  return job.id === "J103";
});

console.log("4. کار پیدا‌شده (J103):", targetJob);


// -------------------------------------------------------------------------
// وظیفه 5: مرتب‌سازی کارها بر اساس بودجه (از زیاد به کم)
// استفاده از: sort()
// مأموریت: آرایه اصلی jobs را بر اساس بودجه به ترتیب نزولی مرتب کن.
// قاعده مهم: به immutability توجه کن! نباید آرایه اصلی را تغییر دهی.
// ابتدا با عملگر spread یک کپی سطحی بساز: [...array]
// -------------------------------------------------------------------------
const sortedJobs = [...jobs].sort((a, b) => {
  return (b.budget - a.budget);
});

console.log("5. کارهای مرتب‌شده (از زیاد به کم):", sortedJobs);