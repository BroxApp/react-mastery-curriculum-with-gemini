# 📝 Mini Project: Notes App

This mini-project is the capstone of Phase 1.5, integrating DOM manipulation, Event Handling, and Advanced Form Management using Vanilla JavaScript.

## 🎯 Project Overview

Build a functional **Notes Application** where users can create, view, and persist notes locally in their browser.

## 🛠️ Functional Requirements

### 1. The Form (Form Management & Validation)

- **Input Fields:**
  - Title (`text`)
  - Content (`textarea`)
  - Category (`select`: Work, Personal, Ideas)
  - Important Checkbox (`checkbox`)
- **Validation:**
  - Title cannot be empty.
  - Content must pass a basic `Regex` validation (e.g., ensure no malicious characters).
  - Perform validation in **real-time** (using `input` event) and on `submit`.
- **Data Handling:**
  - Use `FormData` to extract all inputs.

### 2. Persistence (Data Management)

- Store notes in `localStorage` as an array of objects.
- Use `JSON.stringify` and `JSON.parse` to handle data.

### 3. DOM Manipulation

- Dynamically render notes into the UI whenever the list changes.
- Provide a clean way to view existing notes.

## 📁 Suggested Structure

- `index.html`: Main structure.
- `style.css`: Minimal styling for layout and error messages.
- `app.js`: Logic for form handling, validation, and storage.

## 🚀 Engineering Standards

- **Clean Code:** Use modular functions (e.g., `saveNote`, `renderNotes`, `validateForm`).
- **Git:** Commit your progress with `Conventional Commits` (e.g., `feat: implement validation`, `feat: add localStorage persistence`).

---

_Good luck, Engineer! Ensure your code is robust and follows the established standards._

# 📝 مینی پروژه: اپلیکیشن یادداشت‌برداری (Notes App)

این مینی پروژه، پایان‌بندی فاز ۱.۵ است که در آن دستکاری DOM، مدیریت رویدادها (Event Handling) و مدیریت پیشرفته فرم‌ها با استفاده از جاوااسکریپت خالص (Vanilla JavaScript) ترکیب می‌شود.

## 🎯 نمای کلی پروژه

یک اپلیکیشن کاربردی **یادداشت‌برداری** بسازید که به کاربران اجازه می‌دهد یادداشت‌های خود را ایجاد، مشاهده و به‌صورت محلی در مرورگر ذخیره کنند.

## 🛠️ الزامات فنی

### ۱. فرم (مدیریت فرم و اعتبارسنجی)

- **فیلد‌های ورودی:**
  - عنوان (تکست)
  - محتوا (تکست‌اریا)
  - دسته‌بندی (انتخابی: کاری، شخصی، ایده‌ها)
  - چک‌باکس اهمیت (چک‌باکس)
- **اعتبارسنجی:**
  - عنوان نباید خالی باشد.
  - محتوا باید از اعتبارسنجی `Regex` عبور کند (برای اطمینان از عدم وجود کاراکترهای مخرب).
  - اعتبارسنجی هم به‌صورت لحظه‌ای (رویداد `input`) و هم هنگام ثبت فرم (`submit`) انجام شود.
- **مدیریت داده:**
  - برای استخراج تمام ورودی‌ها از `FormData` استفاده کنید.

### ۲. پایداری داده‌ها (مدیریت داده‌ها)

- یادداشت‌ها را در `localStorage` به صورت آرایه‌ای از اشیاء ذخیره کنید.
- از `JSON.stringify` و `JSON.parse` برای مدیریت داده‌ها استفاده کنید.

### ۳. دستکاری DOM

- یادداشت‌ها را به‌صورت پویا در رابط کاربری نمایش دهید، هر زمان که لیست یادداشت‌ها تغییر می‌کند.
- روشی تمیز برای مشاهده یادداشت‌های موجود ارائه دهید.

## 📁 ساختار پیشنهادی

- `index.html`: ساختار اصلی.
- `style.css`: استایل‌دهی حداقلی برای چیدمان و پیام‌های خطا.
- `app.js`: منطق برنامه برای مدیریت فرم، اعتبارسنجی و ذخیره‌سازی.

## 🚀 استانداردهای مهندسی

- **کد تمیز (Clean Code):** از توابع ماژولار استفاده کنید (مثلاً `saveNote`، `renderNotes`، `validateForm`).
- **گیت (Git):** پیشرفت پروژه خود را با کامیت‌های استاندارد ثبت کنید.

---

_موفق باشی مهندس! اطمینان حاصل کن که کد شما قوی است و از استانداردهای تعیین شده پیروی می‌کند._
