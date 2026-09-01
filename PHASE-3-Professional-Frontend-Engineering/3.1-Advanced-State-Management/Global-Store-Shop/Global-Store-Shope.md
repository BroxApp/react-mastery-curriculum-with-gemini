🛒 سند مشخصات و پروپوزال پروژه: Global Store Shop
🎯 هدف پروژه
هدف این مینی پروژه، ترکیب هوشمندانه ابزارهای مختلف مدیریت استیت در یک اپلیکیشن فروشگاهی مدرن است تا متوجه شوید در پروژه‌های واقعی دنیای مهندسی، چه زمانی از کدام ابزار مدیریت استیت استفاده می‌شود.

🛠️ معماری استیت (State Architecture Plan)
در این پروژه از ترکیب ابزارها به شکل زیر استفاده خواهیم کرد:

Zustand 🏬 (Cart & Favorites Store):

مدیریت سبد خرید (Cart): افزودن محصول، حذف، تغییر تعداد (quantity)، محاسبه قیمت کل، و پاک کردن سبد خرید.
مدیریت علاقه‌مندی‌ها (Favorites): لایک/آن‌لایک کردن محصولات.
Redux Toolkit 🔔 (Notification & UI Toast State):

سیستم اعلان‌ها (Notification Slice): وقتی سری به سبد خرید اضافه شد یا محصولی لایک شد، یک Toast notification (مثلاً: "محصول با موفقیت به سبد خرید اضافه شد") ظاهر شود و بعد از ۳ ثانیه خودکار حذف شود.
Context API 👤 (User Auth & Theme State):

مدیریت احراز هویت (AuthContext): کاربر لاگین است یا مهمان (User info: name, role).
تم (ThemeContext - اختیاری/ساده): وضعیت Dark/Light mode.
useReducer 📦 (Complex Order Form / Checkout State):

مدیریت فرم ثبت سفارش در مرحله پرداخت (Checkout) شامل: آدرس، متد ارسال، کد تخفیف، و خطاهای Validation.
📂 ساختار پوشه‌بندی استاندارد (Folder Structure)
پروژه باید در مسیر زیر ایجاد شود: PHASE-3-Professional-Frontend-Engineering/Global-Store-Shop

Run
Global-Store-Shop/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── ProductCard.jsx
│ │ ├── ProductList.jsx
│ │ ├── CartModal.jsx
│ │ ├── NotificationToast.jsx
│ │ └── CheckoutForm.jsx
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── store/ # Redux & Zustand stores
│ │ ├── redux/
│ │ │ ├── notificationSlice.js
│ │ │ └── store.js
│ │ └── zustand/
│ │ ├── useCartStore.js
│ │ └── useFavoritesStore.js
│ ├── data/
│ │ └── products.js
│ ├── App.jsx
│ ├── main.jsx
│ └── App.css
├── package.json
└── README.md
📋 لیست ویژگی‌ها و سناریوهای کاربری (Requirements)
نمایش لیست محصولات (Product List):

حداقل ۶ محصول نمونه با عکس، اسم، قیمت و دکمه‌های «افزودن به سبد خرید» و «افزودن به علاقه‌مندی‌ها».
سبد خرید و علاقه‌مندی‌ها (Zustand):

نشانگر تعداد آیتم‌ها در Navbar.
امکان افزایش/کاهش تعداد محصول در سبد.
محاسبه قیمت کل در سبد خرید.
سیستم اعلانات (Redux Toolkit):

با کلیک روی افزودن به سبد خرید یا لایک، یک اکشن اکسترنال به Redux ارسال شود تا پغام موفقیت در گوشه صفحه نمایش داده شود.
فرم سفارش پیچیده (useReducer):

فرم تسویه حساب شامل نام، آدرس، کد تخفیف (DISCOUNT10 برای ۱۰٪ تخفیف).
مدیریت تمام حالت‌های فرم با useReducer.
🚀 گام‌های اجرای پروژه (Steps to Execute)
گام ۱: ساخت پروژه Vite جدید یا تنظیم پوشه‌ی Global-Store-Shop و نصب پکیج‌های لازم (zustand و @reduxjs/toolkit و react-redux).
گام ۲: ساخت داتا و استورها (useCartStore, notificationSlice, AuthContext).
گام ۳: پیاده‌سازی فرم Checkout با useReducer.
گام ۴: اتصال کامپوننت‌های UI و تکمیل پروژه.
