# 🚀 Mini-Project: Authenticated Dashboard

## Phase 3.5 — Authentication Systems

---

## 🎯 Project Goal

در این مینی‌پروژه هدف این است که یک سیستم احراز هویت کامل در سمت Frontend پیاده‌سازی کنیم.

تمرکز پروژه روی درک و پیاده‌سازی جریان اصلی Authentication است:

- مدیریت وضعیت کاربر لاگین‌شده
- شبیه‌سازی فرآیند Login
- ذخیره‌سازی Session در `localStorage`
- مدیریت خطاهای Login
- محافظت از صفحات خصوصی
- جلوگیری از دسترسی کاربر لاگین‌شده به صفحه Login
- Logout و پاک‌سازی Session
- مدیریت Navigation بر اساس وضعیت Authentication

> این پروژه یک Authentication واقعی با Backend نیست.
> Login در این پروژه با یک درخواست Async شبیه‌سازی می‌شود تا منطق Authentication در Frontend تمرین شود.

---

# 📂 Project Structure

پروژه را در مسیر زیر ایجاد کن:

```text
PHASE-3-Professional-Frontend-Engineering/
└── 3.5-Authentication-System/
    └── Mini-Project-Authenticated-Dashboard/
        ├── src/
        │   ├── context/
        │   │   └── AuthContext.jsx
        │   │
        │   ├── components/
        │   │   ├── ProtectedRoute.jsx
        │   │   ├── PublicOnlyRoute.jsx
        │   │   └── Navbar.jsx
        │   │
        │   ├── pages/
        │   │   ├── Home.jsx
        │   │   ├── Login.jsx
        │   │   ├── Dashboard.jsx
        │   │   └── Profile.jsx
        │   │
        │   ├── App.jsx
        │   └── main.jsx
        │
        └── README.md