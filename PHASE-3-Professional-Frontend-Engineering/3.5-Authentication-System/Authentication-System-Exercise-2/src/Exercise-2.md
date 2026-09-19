🎯 Phase 3.5 - Exercise 2: Protected Routes & Navigation
🧠 مبانی مفهومی کلیدی قبل از پیاده‌سازی:
الگوی ProtectedRoute: یک کامپوننت واسط که وضعیت user را بررسی می‌کند؛ اگر لاگین بود اجازه رندر فرزندان یا <Outlet /> را می‌دهد وگرنه با <Navigate to="/login" replace /> کاربر را هدایت می‌کند.
ریدایرکت هوشمند: جلوگیری از دسترسی مستقیم با URL به صفحاتی مثل /dashboard وقتی کاربر احراز هویت نشده است.
📂 ساختار پیشنهادی پروژه:
یک پروژه جدید Vite یا فولدر تمرین ایجاد کن:


Apply
PHASE-3-Professional-Frontend-Engineering/3.5-Authentication-System/Authentication-System-Exercise-2/
├── src/
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── components/
│   │   ├── ProtectedRoute.jsx
│   │   ├── Navbar.jsx
│   │   └── Home.jsx
│   │   └── Login.jsx
│   │   └── Dashboard.jsx
│   ├── App.jsx
│   └── main.jsx
🛠️ الزامات فنی تمرین (کاملاً مینیمال و بدون استایل):
نصب وابستگی روتینگ:

نصب react-router-dom:
Run
npm install react-router-dom
انتقال AuthContext.jsx:

از کانتکست استانداردی که در تمرین ۱ نوشتی استفاده کن (user, login, logout, useAuth).
پیاده‌سازی کامپوننت ProtectedRoute.jsx:

خواندن user از هوک useAuth().
اگر user خالی (null) بود: بازگرداندن <Navigate to="/login" replace />.
اگر user لاگین بود: بازگرداندن <Outlet /> (یا {children}).
پیاده‌سازی صفحات بسیار ساده:

Navbar.jsx: لینک به / (Home)، /dashboard (Dashboard) و نمایش دکمه لاگین/خروج بر اساس وضعیت کاربر.
Home.jsx: صفحه عمومی (Public) با یک متن ساده: "صفحه اصلی (عمومی)".
Login.jsx: صفحه ورود با یک دکمه لاگین؛ با کلیک روی دکمه، login(...) اجرا شده و سپس کاربر با useNavigate() به /dashboard ریدایرکت شود.
Dashboard.jsx: صفحه خصوصی (Protected) با متن "خوش آمدید به داشبورد، {user.name}" و دکمه خروج.
تعریف ساختار روت‌ها در App.jsx:


Apply
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    
    {/* روت‌های محافظت‌شده */}
    <Route element={<ProtectedRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
</BrowserRouter>
تست عملکرد سناریوهای دسترسی:

در حالت Logout روی لینک /dashboard کلیک کن یا آدرس را دستی در مرورگر تایپ کن -> باید بلافاصله به /login هدایت شوی.
در صفحه لاگین دکمه ورود را بزن -> باید مستقیم به /dashboard بروی.
در داشبورد دکمه خروج را بزن -> باید دسترسی قطع شده و در صورت رفتن به داشبورد دوباره ریدایرکت شوی.