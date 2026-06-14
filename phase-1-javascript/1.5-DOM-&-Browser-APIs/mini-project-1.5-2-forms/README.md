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





# 📝 مینی پروژه: اپلیکیشن یادداشت‌برداری (Notes App)

این مینی پروژه، **پایان‌بندی فاز ۱.۵** است. هدف این است که مهارت‌هایی که تا اینجا یاد گرفتی — دستکاری DOM، مدیریت رویدادها، و مدیریت فرم — را در یک پروژه‌ی واقعی و کامل با هم ترکیب کنی.

> 💡 **این پروژه را جدی بگیر.** هر مرحله را کامل کن، تست کن، و بعد به مرحله‌ی بعدی برو. عجله نکن.

---

## 🎯 هدف پروژه

یک اپلیکیشن یادداشت‌برداری بساز که کاربر بتواند:

- یادداشت جدید **ایجاد** کند
- یادداشت‌های موجود را **مشاهده** کند
- یادداشت‌ها را حتی بعد از بستن مرورگر **حفظ** کند (با `localStorage`)

---

## 📁 ساختار فایل‌ها

```
notes-app/
│
├── index.html     ← ساختار اصلی صفحه
├── style.css      ← استایل‌دهی و نمایش خطاها
└── app.js         ← تمام منطق برنامه
```

> ⚠️ هر سه فایل را از ابتدا خودت بساز. از template آماده استفاده نکن.

---

## 🛠️ الزامات فنی (چه چیزی باید بسازی)

### ۱. فرم — مدیریت ورودی کاربر

فرم باید شامل **چهار فیلد** زیر باشد:

| فیلد | نوع | توضیح |
|---|---|---|
| عنوان | `input[type="text"]` | نام کوتاه یادداشت |
| محتوا | `textarea` | متن اصلی یادداشت |
| دسته‌بندی | `select` | سه گزینه: کاری / شخصی / ایده‌ها |
| اهمیت | `input[type="checkbox"]` | آیا این یادداشت مهم است؟ |

---

### ۲. اعتبارسنجی (Validation) — دروازه‌بان داده‌ها

اعتبارسنجی باید **دو مرحله** داشته باشد:

**مرحله اول — لحظه‌ای (Real-time):**
هنگامی که کاربر در حال تایپ است (رویداد `input`)، بلافاصله خطا نمایش بده. کاربر نباید منتظر کلیک دکمه بماند تا بفهمد اشتباهی رخ داده.

**مرحله دوم — هنگام ثبت (Submit):**
قبل از ذخیره‌ی یادداشت، یک‌بار دیگر تمام فیلدها را چک کن. اگر هر کدام معتبر نبود، ثبت را متوقف کن.

**قوانین اعتبارسنجی:**

- عنوان نباید خالی باشد
- محتوا باید از فیلتر `Regex` عبور کند — کاراکترهایی مثل `<`, `>`, `{`, `}` باید رد شوند تا از ورود کدهای مخرب جلوگیری شود

```javascript
// نمونه‌ی Regex برای محتوا:
const forbiddenChars = /[<>{}]/;
if (forbiddenChars.test(content)) {
  // نمایش خطا
}
```

> 💡 برای نمایش خطا، یک `<span>` خالی زیر هر فیلد در HTML بساز و با JavaScript متن خطا را داخل آن بنویس. وقتی خطا رفع شد، آن را خالی کن.

---

### ۳. استخراج داده با FormData

برای خواندن مقادیر فرم، از `FormData` استفاده کن — **نه** از `document.getElementById` برای هر فیلد به صورت جداگانه.

```javascript
const form = document.getElementById('note-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // جلوگیری از رفرش صفحه

  const formData = new FormData(form);
  const title = formData.get('title');
  const content = formData.get('content');
  const category = formData.get('category');
  const isImportant = formData.get('important') === 'on'; // چک‌باکس
});
```

> ⚠️ برای اینکه `FormData` درست کار کند، هر `input` در HTML باید **حتماً** یک attribute به نام `name` داشته باشد.

---

### ۴. ساختار داده‌ی یادداشت

هر یادداشت یک **object** با این شکل است:

```javascript
{
  id: Date.now(),// شناسه‌ی یکتا — از تایم‌استمپ استفاده کن
  title: "عنوان",
  content: "محتوا",
  category: "work",  // یکی از: 'work' | 'personal' | 'ideas'
  isImportant: false// true یا false
}
```

تمام یادداشت‌ها را در یک **آرایه** نگه دار:

```javascript
let notes = []; // این منبع اصلی داده‌ی برنامه است
```

> 💡 این آرایه باید **تنها منبع حقیقت (Single Source of Truth)** برنامه باشد. هیچ وقت مستقیم DOM را ویرایش نکن — همیشه این آرایه را تغییر بده، بعد UI را از روی آن بازسازی کن.

---

### ۵. ذخیره‌سازی با localStorage

هر بار که یادداشتی اضافه یا حذف می‌شود، آرایه‌ی `notes` را در `localStorage` ذخیره کن:

```javascript
// ذخیره
function saveToStorage() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

// بارگذاری (هنگام اجرای اولیه‌ی برنامه)
function loadFromStorage() {
  const saved = localStorage.getItem('notes');
  notes = saved ? JSON.parse(saved) : [];
}
```

> ⚠️ فراموش نکن `loadFromStorage()` را هنگام لود اولیه‌ی صفحه صدا بزنی، وگرنه بعد از رفرش تمام یادداشت‌ها پاک می‌شوند.

---

### ۶. رندر کردن یادداشت‌ها

تابع `renderNotes()` باید:

1. محتوای قبلی container را **پاک** کند (`innerHTML = ""`)
2. روی آرایه‌ی `notes` حلقه بزند
3. برای هر یادداشت یک **card** با `createElement` بسازد و به DOM اضافه کند

```javascript
function renderNotes() {
  noteList.innerHTML = "";

  notes.forEach((note) => {
    const card = document.createElement('div');
    card.classList.add('note-card');

    if (note.isImportant) {
      card.classList.add('important'); // استایل ویژه برای یادداشت‌های مهم
    }

    card.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.content}</p>
      <span class="category">${note.category}</span>
    `;

    noteList.appendChild(card);
  });
}
```

> 💡 هر بار که `notes` تغییر می‌کند (اضافه یا حذف)، باید `renderNotes()` را دوباره صدا بزنی تا UI به‌روز شود.

---

## 🚀 استانداردهای مهندسی

### کد تمیز (Clean Code)

منطق برنامه را به توابع کوچک و مستقل تقسیم کن. هیچ‌وقت همه چیز را در یک `addEventListener` ننویس.

| تابع | وظیفه |
|---|---|
| `loadFromStorage()` | بارگذاری داده از localStorage |
| `saveToStorage()` | ذخیره‌ی آرایه در localStorage |
| `renderNotes()` | بازسازی کامل UI از روی آرایه |
| `validateField(field, value)` | اعتبارسنجی یک فیلد و نمایش خطا |
| `handleFormSubmit(event)` | مدیریت کامل submit فرم |
| `addNote(noteObject)` | اضافه کردن یادداشت به آرایه و sync |

### Git و Conventional Commits

بعد از تکمیل هر مایلستون، یک commit بزن. پیام commit باید مشخص باشد:

```
feat: add HTML structure and form layout
feat: implement real-time validation
feat: extract form data with FormData
feat: render notes dynamically to DOM
feat: add localStorage persistence
```

> ⚠️ همه چیز را یک‌جا commit نکن. هر مرحله = یک commit مجزا.

---

## 🗺️ مراحل پیشنهادی (Milestones)

پروژه را به این ترتیب بساز — **به ترتیب** و بدون جهش:

- [ ] **مایلستون ۱** — ساختار HTML و استایل پایه
- [ ] **مایلستون ۲** — اتصال رویدادها و اعتبارسنجی real-time
- [ ] **مایلستون ۳** — استخراج داده با FormData و ساخت object یادداشت
- [ ] **مایلستون ۴** — رندر پویای یادداشت‌ها در DOM
- [ ] **مایلستون ۵** — sync با localStorage و تست edge caseها

---

_موفق باشی مهندس. قدم به قدم پیش برو، هر مرحله را تست کن، و کدت را تمیز نگه دار._
