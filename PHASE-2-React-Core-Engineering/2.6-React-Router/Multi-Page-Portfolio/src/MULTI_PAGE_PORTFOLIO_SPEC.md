🌐 Multi-Page-Portfolio Specification
🎯 Objective
Developing a multi-page portfolio website using react-router-dom to master Single Page Application (SPA) architecture, navigation, and dynamic route handling.

🛠 Features Requirements
Core Pages:
Home (/): A brief introduction.
About (/about): Detailed bio.
Projects (/projects): A list of your completed works.
Project Detail (/projects/:id): A dynamic route that displays specific details based on the project ID.
Navigation System:
Use <Link> or <NavLink> to navigate between pages.
A persistent <Navbar> component that appears on all pages.
Dynamic Routing:
Use useParams to fetch and display dynamic content in the Project Detail page.
Implement a "404 Not Found" page for invalid routes.
🏗️ Technical Constraints
Library: react-router-dom (v6+).
Architecture: Component-based structure (Navbar, Pages).
Data Handling: Use a static data array for projects to demonstrate dynamic routing.
📅 Milestones
Day 1: Project setup, BrowserRouter configuration, and basic route structure (Home, About).
Day 2: Project list page and implementation of Dynamic Routes (/projects/:id).
Day 3: Navbar styling, "Active Link" highlights, and 404 page handling.

💡 راهنمایی منتور برای شروع:
نصب کتابخانه: فراموش نکن که اول باید پکیج react-router-dom را نصب کنی (npm install react-router-dom).
پایداری ساختار: کامپوننتِ Navbar را خارج از Routes تعریف کن تا در همه صفحات ثابت بماند (همان‌طور که در تئوری گفتیم).
دیتای پویا: برای بخش پروژه‌ها، یک فایل projectsData.js بساز که شامل یک آرایه از آبجکت‌ها (id, title, description) باشد تا بتوانی در صفحه پروژه از آن استفاده کنی.

# 🌐 پروژه وب‌سایت چند‌صفحه‌ای (Portfolio) با React Router

یک پروژه عملی و جذاب برای تسلط بر معماری برنامه‌های تک‌صفحه‌ای (SPA)، سیستم مسیریابی (Routing) و مدیریت مسیرهای پویا (Dynamic Routes).

---

## 🎯 اهداف پروژه

- یادگیری نحوه کار با کتابخانه `react-router-dom` (نسخه ۶ به بالا)
- ساخت یک هدر (Navbar) ثابت در تمام صفحات
- کار با مسیرهای پویا (`/projects/:id`) با استفاده از هوک `useParams`
- طراحی صفحه خطای ۴۰۴ برای لینک‌های اشتباه

---

## 🛠 صفحات و ویژگی‌های مورد نیاز

### ۱. صفحات اصلی (Pages)

- **خانه (`/`):** یک معرفی کوتاه و جذاب از خودتان.
- **درباره من (`/about`):** بیوگرافی و مهارت‌ها.
- **پروژه‌ها (`/projects`):** نمایش لیستی از پروژه‌های انجام شده.
- **جزئیات پروژه (`/projects/:id`):** صفحه‌ای پویا که اطلاعات دقیق هر پروژه را بر اساس `id` آن نمایش می‌دهد.
- **صفحه ۴۰۴:** صفحه‌ای برای مدیریت مسیرهای تعریف‌نشده و اشتباه.

### ۲. سیستم ناوبری (Navigation)

- استفاده از کامپوننت `<Navbar>` به صورت ثابت در بالای تمام صفحات.
- استفاده از `<NavLink>` به جای تگ `<a>` برای جابه‌جایی سریع و بدون لود شدن صفحه.
- فعال کردن قابلیت **Active Link** (هایلایت کردن لینکی که در حال حاضر در آن هستیم).

---

## 📂 ساختار پیشنهادی پوشه‌ها (Folder Structure)

```text
src/
├── components/
│   └── Navbar.jsx
├── data/
│   └── projectsData.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   └── NotFound.jsx
├── App.jsx
└── main.jsx
```
