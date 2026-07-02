# Mini Project: Random User Explorer

## 🎯 Goal

Build a functional dashboard that fetches random user data from an API, displays it in a clean grid layout, and allows basic filtering/interaction.

## 🏗️ Architecture Plan

### 1. File Structure

- `index.html`: Base layout and grid container.
- `style.css`: Responsive grid styling (Flexbox/Grid).
- `app.js`: Logic layer (Async/Await, Fetch, DOM manipulation).
- `README.md`: Documentation for this specific project.

### 2. Milestones

- **Milestone 1: UI Shell:** Create the HTML structure and basic CSS.
- **Milestone 2: Data Fetching Engine:** Create the `fetchRandomUsers` function using `async/await`.
- **Milestone 3: Dynamic Rendering:** Map the fetched data into the DOM.
- **Milestone 4: Interactive Enhancements:** Add a "Load More" button or filter functionality.

## 🚀 Engineering Requirements

- Use modern ES6+ syntax.
- Implement robust error handling (`try/catch`).
- Maintain clean, modular code.
- Follow the established daily progress tracking rules.

## 🌐 API Endpoint

Use the [Random User Generator API](https://randomuser.me/api/): `https://randomuser.me/api/?results=5`

## 💡 توضیحات پروژه به فارسی

این پروژه یک **داشبورد کاربران تصادفی** است. هدف اصلی ما در این پروژه، یادگیری نحوه دریافت داده از اینترنت و نمایش آن در صفحه وب است.

### مراحل انجام پروژه:
1. **دریافت داده:** با استفاده از `fetch` و `async/await`، لیستی از ۵ کاربر تصادفی را از سرور می‌گیریم.
2. **پردازش داده:** اطلاعات دریافتی (مثل نام، ایمیل و عکس کاربر) را استخراج می‌کنیم.
3. **نمایش داده:** برای هر کاربر یک کارت (Card) زیبا در صفحه ایجاد می‌کنیم (DOM Manipulation).
4. **تعامل:** یک دکمه برای "بارگذاری مجدد" کاربران اضافه می‌کنیم.

این پروژه تمام مفاهیم فاز ۱.۶ (Async, Promises, Fetch) را در یک قالب عملی ترکیب می‌کند.

