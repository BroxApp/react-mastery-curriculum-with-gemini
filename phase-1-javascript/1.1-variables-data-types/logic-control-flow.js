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

console.log("تست محاسبه قیمت پایه:", calculatePrice(true, 100, 0)); 

/**
 * بازنویسی نهایی توسط Brox (نسخه بهینه شده)
 */
function calculatePriceFinal(productCount, price, discount) {
    // استفاده از Logical OR برای بررسی موجودی
    if (!productCount) return "Not Available";

    // استفاده از Nullish Coalescing برای مقدار پیش‌فرض تخفیف (اگر نال بود ۳ درصد)
    const safeDiscount = discount ?? 3;
    
    const totalPrice = productCount * price;
    const totalDiscountAmount = (price * safeDiscount / 100) * productCount;
    const finalPrice = totalPrice - totalDiscountAmount;

    return `
--- رسید خرید ---
وضعیت موجودی: ${productCount} عدد
قیمت واحد: ${price}$
درصد تخفیف اعمال شده: ${safeDiscount}%
مجموع قیمت قبل از تخفیف: ${totalPrice}$
سود شما از این خرید: ${totalDiscountAmount}$
مبلغ قابل پرداخت: ${finalPrice}$
-----------------`;
}

console.log(calculatePriceFinal(5, 100, 5));
console.log(calculatePriceFinal(0, 100, 5)); // تست حالت ناموجود
console.log(calculatePriceFinal(2, 200, null)); // تست تخفیف نال (باید ۳ درصد اعمال شود)

// --------------- پایان تمرین روز نهم ---------------
