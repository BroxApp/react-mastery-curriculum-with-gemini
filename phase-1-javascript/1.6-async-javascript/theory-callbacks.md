درس ۱: درک مفهوم Callback
در جاوااسکریپت، توابع "شهروندان درجه یک" (First-class citizens) هستند. این یعنی می‌توانید آن‌ها را به عنوان آرگومان به تابع دیگری پاس بدهید. تابعی که به عنوان آرگومان پاس داده می‌شود تا بعداً اجرا شود، Callback نام دارد.

چرا به Callback نیاز داریم؟
جاوااسکریپت به صورت پیش‌فرض "تک‌رشته‌ای" (Single-threaded) و "همگام" (Synchronous) است. یعنی هر خط کد منتظر می‌ماند تا خط قبلی تمام شود. اما در عملیاتی مثل:

خواندن فایل
درخواست به سرور (API)
تایمرها (setTimeout) ما نمی‌توانیم کل برنامه را متوقف کنیم تا پاسخ آماده شود. اینجاست که مدل ناهمگام (Asynchronous) و Callbackها به کمک می‌آیند.
۱. مثال همگام (Synchronous)

Apply
function sayHello() {
  console.log("Hello!");
}

function processUser(callback) {
  console.log("Processing user...");
  callback(); // اینجا تابع پاس داده شده اجرا می‌شود
}

processUser(sayHello);
۲. مثال ناهمگام (Asynchronous) با setTimeout

Apply
console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds (Async)");
}, 2000);

console.log("End");
نکته مهم: خروجی به ترتیب "Start" -> "End" -> "Hello (after 2s)" خواهد بود.

📌 تمرین عملی
در فایل phase-1-javascript/1.6-async-javascript/practice-callbacks.js موارد زیر را پیاده‌سازی کن:

تابع Greeting: تابعی بنویس به نام greetUser که یک نام و یک تابع callback می‌گیرد و پس از یک ثانیه (تأخیر مصنوعی با setTimeout) نام را در کنسول چاپ کند و سپس callback را فراخوانی کند.
ارسال نتیجه: callback باید پیامی مثل "Greeting completed" را چاپ کند.
تمرین عملیاتی: تابعی بنویس به نام calculate که دو عدد و یک تابع به عنوان عملیات (مثل sum یا multiply) می‌گیرد و نتیجه را پس از ۵۰۰ میلی‌ثانیه چاپ می‌کند.