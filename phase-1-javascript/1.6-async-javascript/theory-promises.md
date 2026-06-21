پرامیس در جاوااسکریپت شیئی است که نشان‌دهنده تکمیل (یا عدم تکمیل) یک عملیات ناهمگام و مقدار حاصل از آن است. پرامیس‌ها جایگزین تمیزتری برای Callbackها هستند و مشکل Callback Hell را حل می‌کنند.

وضعیت‌های یک Promise:
Pending (در انتظار): عملیات هنوز کامل نشده.
Fulfilled (موفقیت): عملیات با موفقیت انجام شده (resolve).
Rejected (شکست): عملیات با خطا مواجه شده (reject).
سینتکس پایه:

Apply
const myPromise = new Promise((resolve, reject) => {
const success = true;
if (success) {
resolve("عملیات با موفقیت انجام شد!");
} else {
reject("خطایی رخ داد!");
}
});

myPromise
.then((data) => console.log(data)) // اجرای در صورت موفقیت
.catch((error) => console.error(error)) // اجرای در صورت خطا
.finally(() => console.log("تمام شد!")); // همیشه اجرا می‌شود
📌 تمرین عملی برای امروز
لطفاً یک فایل به نام practice-promises.js در همان پوشه phase-1-javascript/1.6-async-javascript/ بساز و تمرین زیر را انجام بده:

شبیه‌سازی API: تابعی بنویس به نام fetchUserData که یک Boolean به عنوان ورودی بگیرد. اگر true بود، بعد از ۲ ثانیه یک آبجکت کاربر (مثلاً {id: 1, name: 'Brox'}) را resolve کند و اگر false بود، یک خطای "User not found" را reject کند.
استفاده از پرامیس: این تابع را فراخوانی کن و با استفاده از .then() داده را چاپ کن و با .catch() خطا را مدیریت کن.
