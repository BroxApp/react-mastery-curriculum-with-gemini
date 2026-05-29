/**
 * ✅ گزارش وضعیت یادگیری (ثبت شده برای فردا):
 * ۱. تحلیل مفاهیم Truthy/Falsy و رفتار آرایه‌های خالی.
 * ۲. درک منطق Short-circuiting با عملگرهای && و ||.
 * ۳. یادگیری تفاوت حیاتی Nullish Coalescing (??) با OR (||) برای مدیریت عدد ۰.
 * ۴. تحلیل تابع calculatePrice (آماده برای بازنویسی مجدد توسط برآکس).
 * ---------------------------------------------------------
 * 
 * فاز ۱.۱: منطق و جریان کنترل
 * هدف: درک مفهوم Truthy/Falsy و اتصال کوتاه منطقی (Short-circuiting) برای استفاده در ری‌اکت.
 */

// ۱. تمرین مقادیر Truthy در مقابل Falsy
const checkValue = (val) => {
    if (val) {
        console.log(`مقدار [${val}] هست: TRUTHY`);
    } else {
        console.log(`مقدار [${val}] هست: FALSY`);
    }
};

checkValue(0);         // خروجی مورد انتظار: FALSY
checkValue("Hello");   // خروجی مورد انتظار: TRUTHY
checkValue("");        // خروجی مورد انتظار: FALSY
checkValue([]);        // خروجی مورد انتظار: TRUTHY (آرایه‌های خالی شیء هستند، پس Truthy محسوب می‌شوند!)

// ۲. عملگرهای منطقی در عمل (الگوهای پرکاربرد در ری‌اکت)

// اتصال کوتاه AND (&&) - معمولاً برای نمایش یا عدم نمایش مشروط کامپوننت‌ها استفاده می‌شود
const isLoggedIn = true;
const userRole = "admin";
const dashboard = isLoggedIn && "Welcome to Dashboard"; 
console.log("وضعیت داشبورد:", dashboard);

// عملگر منطقی OR (||) - برای تعیین مقادیر پیش‌فرض استفاده می‌شود
let userSetTheme = ""; // کاربر تمی انتخاب نکرده است
const activeTheme = userSetTheme || "light-mode";
console.log("تم فعال:", activeTheme); // خروجی: "light-mode"

// عملگر Nullish Coalescing (??) - راهکار ایمن برای عدد ۰ و رشته خالی ""
let productCount = 0;
const displayCountOR = productCount || "No products"; // اشتباه: برای مقدار ۰، عبارت "No products" را نشان می‌دهد
const displayCountNullish = productCount ?? "No products"; // درست: مقدار ۰ را نشان می‌دهد

console.log({ displayCountOR, displayCountNullish });

/**
 * 📝 چالش امروز:
 * یک تابع به نام 'calculatePrice(isAvailable, price, discount)' بنویسید.
 * ۱. اگر موجود نیست (NOT available)، عبارت "Not Available" را برگردانید.
 * ۲. اگر موجود است، مقدار (price - discount) را برگردانید.
 * ۳. مهم: از عملگرهای منطقی (&&, ||, ??) استفاده کنید تا مواردی که
 *    تخفیف (discount) ممکن است ۰ یا null باشد، بدون خراب شدن منطق برنامه مدیریت شوند.
 * 
 * مثال: calculatePrice(true, 100, 0) باید ۱۰۰ برگرداند، نه عبارت "Not Available".
 */

// --------------- شروع کد شما ---------------

const calculatePrice = (isAvailable, price, discount) => {
    if (!isAvailable) return "Not Available";
    const finalDiscount = discount ?? 0;
    return price - finalDiscount;
};

console.log("تست محاسبه قیمت (موجود، ۱۰۰ تومن، بدون تخفیف):", calculatePrice(true, 100, 0)); // خروجی: 100


// --------------- پایان کد شما ---------------


// تست‌های زیر برای بررسی درستی عملکرد تابع شما هستند.
// آنها را تغییر ندهید.
/*
console.log("--- تست تابع calculatePrice ---");
console.log("تست ۱ (موجود، قیمت ۱۰۰، تخفیف ۲۰):", calculatePrice(true, 100, 20)); // انتظار: 80
console.log("تست ۲ (موجود، قیمت ۱۰۰، تخفیف ۰):", calculatePrice(true, 100, 0));    // انتظار: 100
console.log("تست ۳ (موجود، قیمت ۱۰۰، تخفیف null):", calculatePrice(true, 100, null)); // انتظار: 100
console.log("تست ۴ (ناموجود):", calculatePrice(false, 100, 20)); // انتظار: "Not Available"
console.log("تست ۵ (موجود، قیمت ۵۰، بدون تخفیف):", calculatePrice(true, 50)); // انتظار: 50
*/
