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
 * 📝 چالش فردا:
 * یک تابع به نام 'calculatePrice(isAvailable, price, discount)' بنویسید.
 * ۱. اگر موجود نیست (NOT available)، عبارت "Not Available" را برگردانید.
 * ۲. اگر موجود است، مقدار (price - discount) را برگردانید.
 * ۳. مهم: از عملگرهای منطقی (&&, ||, ??) استفاده کنید تا مواردی که
 *    تخفیف (discount) ممکن است ۰ یا null باشد، بدون خراب شدن منطق برنامه مدیریت شوند.
 * 
 * مثال: calculatePrice(true, 100, 0) باید ۱۰۰ برگرداند، نه عبارت "Not Available".
 */

// مرجع حل تمرین (فردا سعی کن بدون نگاه کردن به این، تابع را بنویسی):
const calculatePrice = (isAvailable, price, discount) => {
    if (!isAvailable) return "Not Available";
    const finalDiscount = discount ?? 0;
    return price - finalDiscount;
};

console.log("تست محاسبه قیمت (موجود، ۱۰۰ دلار بدون تخفیف):", calculatePrice(true, 100, 0)); // خروجی: 100

//پاسخ به سوال توسط Brox 
//حالت اول بدون عملگرهای منطقی
function priceCalculator(productCount,price,discount){
    
    if (productCount <= 0) {
        return ("not available")
    }else{
        let productCountPrice = productCount * price;
        let priceDiscount = (price * discount / 100) * productCount;
        let totalPrice = productCountPrice - priceDiscount
        return (`product is available:${productCount} units
totalPrice:${totalPrice}$`)
    }
}

console.log(priceCalculator(5, 100, 5));

// حالت دوم با استفاده از عملگرهای منطقی

function calculatePrice2(productCount2, price2, discount2){
   const isAvailable2 = productCount2 || "not available";
   const Discount2 = discount2 ?? 3;
   const totalPrice2 = productCount2 * price2;
   const totalDiscount2 = (price2 * discount2 / 100) * productCount2;
   const finalPrice2 = totalPrice2 - totalDiscount2;


    return (`productCount2 is available: ${isAvailable2} units
discount2: ${Discount2}%
totalPrice2: ${totalPrice2}$
totalDiscount2: ${totalDiscount2}$
finalPrice2: ${finalPrice2}$`
   );
}
console.log(calculatePrice2(5,100,5));