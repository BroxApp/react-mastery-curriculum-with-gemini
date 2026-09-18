کاملاً مطابق خواسته‌ات، تمرین ۱ از فاز ۳.۵ را بسیار ساده، مستقیم و دقیقاً متمرکز بر اصل اهداف آموزشی (AuthContext & Token Sync) بدون هیچ‌گونه استایل یا فیچر اضافه طراحی می‌کنیم.

🎯 Phase 3.5 - Exercise 1: AuthContext & Token Sync
🧠 هدف آموزشی:
ساخت لایه سراسری احراز هویت (Auth Context)، مدیریت متدهای login و logout و همگام‌سازی (Sync) پایداری توکن و اطلاعات کاربر با localStorage جهت حفظ وضعیت ورود پس از ریفرش مرورگر.

📂 ساختار پیشنهاد شده برای پروژه:
یک پروژه جدید Vite یا فولدر تمرین به آدرس زیر ایجاد کن:

Apply
PHASE-3-Professional-Frontend-Engineering/3.5-Authentication-Systems/authentication-systems-exercise-1/
├── src/
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── App.jsx
│ └── main.jsx
🛠️ نیازمندی‌های فنی تمرین (Task Requirements):
ساخت فایل AuthContext.jsx:

تعریف AuthContext با استفاده از createContext.
ساخت کامپوننت AuthProvider شامل استیت‌های user و token.
مقداردهی اولیه از localStorage: هنگام رندر اول، بررسی کن آیا token و user در localStorage وجود دارند یا خیر. اگر وجود داشتند، استیت اولیه را با آن‌ها مقداردهی کن.
متد login(userData, fakeToken):
ذخیره fakeToken و userData در localStorage.
آپدیت استیت‌های user و token.
متد logout():
پاک کردن مقادیر از localStorage (removeItem).
صفر کردن استیت‌های user و token (null).
ساخت هوک اختصاصی useAuth() برای دسترسی راحت‌تر به Context.
پیکربندی main.jsx:

پیچیدن کامپوننت <App /> داخل <AuthProvider>.
تست عملکرد در App.jsx (UI مینیمال بدون استایل):

خواندن user, login, logout از هوک useAuth().
شرط رندر:
اگر user خالی (null) است: یک دکمه «ورود» (Login) بگذار که با کلیک روی آن، تابع login({ email: "brox@example.com", name: "Brox" }, "fake-jwt-token-123") فراخوانی شود.
اگر user وجود دارد: نام و ایمیل کاربر را بگذار + یک دکمه «خروج» (Logout) که تابع logout را صدا بزند.
تست پایداری (Persistence Test):

دکمه ورود را بزن.
صفحه مرورگر را ریفرش کن (F5) و تأیید کن که کاربر همچنان لاگین باقی می‌ماند.
دکمه خروج را بزن و ریفرش کن تا مطمئن شوی استیت کلاً پاک شده است.
