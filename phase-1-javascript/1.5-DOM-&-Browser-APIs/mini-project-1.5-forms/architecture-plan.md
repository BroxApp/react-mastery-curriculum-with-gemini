# 🗺️ Pre-Coding Engineering Analysis & Architecture Plan

This document outlines the systematic, data-driven architecture and step-by-step implementation plan for the **Notes Application (Phase 1.5 Capstone)**. Developed with professional Upwork/Freelance engineering standards.

---

## Phase 1: Business Logic & Core Interpretation

### 1. Architectural Diagnosis

- **Pattern Identified:** 100% **Data-Driven Architecture (State-Driven UI)**
- **Justification:** The project specification states: _"Dynamically render notes into the UI whenever the list changes."_ Instead of direct, imperative DOM manipulation during user actions, all operations will update the core JavaScript array (State), which will automatically trigger a clean re-render of the user interface.

### 2. Data Modeling (Backstage Structure)

Every individual note will be treated as an object within a centralized array. The schema is structured as follows:

```javascript
{
  id: "number (Unique identifier generated via Date.now())",
  title: "string (Validated, non-empty)",
  content: "string (Sanitized via Regex validation)",
  category: "string ('work' | 'personal' | 'ideas')",
  isImportant: "boolean (True if checkbox is ticked, false otherwise)"
}
```

---

## Phase 2: Software Architecture Blueprint (Modular Functions)

To ensure clean, scalable, and maintainable code, the application logic is decoupled into **4 distinct architectural layers**:

### Layer 1 — State Layer (Data Core)

- **Variable:** `let notes = []`
- **Responsibility:** Holds the live, single-source-of-truth data in application memory. Initializes by reading from `localStorage`.

### Layer 2 — Rendering Layer (UI Engine)

- **Function:** `renderNotes()`
- **Responsibility:**
  1. Clears the existing container (`noteList.innerHTML = ""`)
  2. Iterates over the `notes` array
  3. Dynamically constructs DOM elements (`createElement`) for each note card and injects them into the view grid

### Layer 3 — Form & Validation Layer (Gatekeeper)

- **Function:** `validateField(field, value)`
- **Responsibility:** Listens to real-time `input` events to provide immediate UI warnings (e.g., checking empty titles, executing Regex on content textareas).

- **Function:** `handleFormSubmit(event)`
- **Responsibility:** Intercepts the form submit, invokes `preventDefault()`, extracts values seamlessly using `FormData`, runs final validation, and constructs the new note object if all checks pass.

### Layer 4 — Persistence Layer (Storage Synchronization)

- **Function:** `saveToStorage()`
- **Responsibility:** Stringifies the current `notes` state (`JSON.stringify`) and commits it to `localStorage` every time the data array mutates (add/delete actions).

---

## Phase 3: Systematic Action Plan (Milestones)

A production-ready engineer never writes all the code at once. The development process is broken down into **5 independent, testable milestones**:

### ✅ Milestone 1: Blueprint & Layout Base (HTML/CSS)

- Set up `index.html` with a robust semantic layout (form wrapper, distinct input IDs, error message containers, and a clean grid wrapper for rendering notes).
- Apply minimal structural styling in `style.css` (flex/grid card layouts and explicit utility classes for `.error` states and `.important-note` highlights).

### ✅ Milestone 2: Form Interception & Real-Time Validation

- Attach `input` event listeners to fields for immediate UI warnings.
- Implement Regex patterns inside the validation gatekeeper to filter out malicious or forbidden characters in the textarea.
- Connect the `submit` event to prevent page reloads and verify validation status using `console.log`.

### ✅ Milestone 3: Data Extraction & State Mutation

- Implement `new FormData(form)` to cleanly harvest input values without manual query selectors for each field.
- Package the values into the defined note object (assigning a dynamic `id` using `Date.now()`).
- Push the new note object into the global `notes` array.

### ✅ Milestone 4: Dynamically Painting the UI (DOM Rendering)

- Complete the `renderNotes()` function.
- Convert the state data array into HTML note cards dynamically.
- Ensure that adding a note clears the old interface and cleanly reprints the updated state array.

### ✅ Milestone 5: LocalStorage Sync & Persistent State

- Sync state mutations to browser storage on every form submission.
- Refactor the initial `notes` definition at the top of the file to load previously saved notes on page refresh.
- Perform edge-case testing (e.g., loading the application with an empty storage array).


# 🗺️ تحلیل مهندسی و نقشه‌ی معماری (قبل از کدنویسی)

این سند، معماری داده‌محور و برنامه‌ی اجرایی گام‌به‌گام برای **اپلیکیشن یادداشت‌برداری (پایان‌بندی فاز ۱.۵)** را با استانداردهای حرفه‌ای مهندسی نرم‌افزار توضیح می‌دهد.

---

## فاز ۱: منطق کسب‌وکار و تفسیر هسته‌ای

### ۱. تشخیص معماری

- **الگوی انتخاب‌شده:** معماری **داده‌محور (State-Driven UI)**
- **دلیل انتخاب:** مشخصات پروژه می‌گوید: *"یادداشت‌ها را به‌صورت پویا در UI نمایش بده، هر بار که لیست تغییر کرد."* به جای دستکاری مستقیم و امری DOM در هنگام هر عمل کاربر، تمام عملیات‌ها آرایه‌ی مرکزی JavaScript (State) را به‌روز می‌کنند — و این آرایه به‌صورت خودکار یک re-render تمیز از UI را فعال می‌کند.

### ۲. مدل‌سازی داده (ساختار پشت‌صحنه)

هر یادداشت به عنوان یک **object** درون یک آرایه‌ی مرکزی در نظر گرفته می‌شود. ساختار (schema) آن به شکل زیر است:

```javascript
{
  id: "number — شناسه‌ی یکتا، تولیدشده با Date.now()",
  title: "string — اعتبارسنجی‌شده، نباید خالی باشد",
  content: "string — پاک‌سازی‌شده با اعتبارسنجی Regex",
  category: "string — یکی از: 'work' | 'personal' | 'ideas'",
  isImportant: "boolean — اگر چک‌باکس تیک خورده باشد true، در غیر این صورت false"
}
```

---

## فاز ۲: نقشه‌ی معماری نرم‌افزار (توابع ماژولار)

برای اطمینان از کدی تمیز، مقیاس‌پذیر و قابل نگهداری، منطق برنامه به **۴ لایه‌ی معماری مجزا** تقسیم می‌شود:

### لایه‌ی ۱ — لایه‌ی State (هسته‌ی داده)

- **متغیر:** `let notes = []`
- **وظیفه:** نگهداری داده‌ی زنده و **منبع واحد حقیقت (Single Source of Truth)** در حافظه‌ی برنامه. هنگام اجرای اولیه، با خواندن از `localStorage` مقداردهی می‌شود.

### لایه‌ی ۲ — لایه‌ی رندر (موتور UI)

- **تابع:** `renderNotes()`
- **وظیفه:**
  1. محتوای container موجود را پاک می‌کند (`noteList.innerHTML = ""`)
  2. روی آرایه‌ی `notes` حلقه می‌زند
  3. برای هر یادداشت یک card با `createElement` می‌سازد و آن را به شبکه‌ی نمایش تزریق می‌کند

### لایه‌ی ۳ — لایه‌ی فرم و اعتبارسنجی (دروازه‌بان)

- **تابع:** `validateField(field, value)`
- **وظیفه:** به رویدادهای `input` گوش می‌دهد تا هشدارهای لحظه‌ای در UI نمایش دهد (مثلاً بررسی خالی بودن عنوان، اجرای Regex روی textarea محتوا).

- **تابع:** `handleFormSubmit(event)`
- **وظیفه:** submit فرم را رهگیری می‌کند، `preventDefault()` صدا می‌زند، مقادیر را با `FormData` استخراج می‌کند، اعتبارسنجی نهایی را اجرا می‌کند، و در صورت پاس شدن همه‌ی چک‌ها، object یادداشت جدید را می‌سازد.

### لایه‌ی ۴ — لایه‌ی پایداری (همگام‌سازی Storage)

- **تابع:** `saveToStorage()`
- **وظیفه:** هر بار که آرایه‌ی داده جهش پیدا می‌کند (اضافه یا حذف)، وضعیت جاری `notes` را stringify کرده (`JSON.stringify`) و در `localStorage` ذخیره می‌کند.

---

## فاز ۳: برنامه‌ی اجرایی (مایلستون‌ها)

یک مهندس حرفه‌ای هیچ‌وقت همه‌ی کد را یک‌جا نمی‌نویسد. فرآیند توسعه به **۵ مایلستون مستقل و قابل تست** تقسیم می‌شود:

### ✅ مایلستون ۱: طرح اولیه و پایه‌ی Layout (HTML/CSS)

- `index.html` را با یک layout معنایی (semantic) قوی بساز: wrapper فرم، ID های مجزا برای inputها، containerهای پیام خطا، و یک wrapper شبکه‌ای تمیز برای نمایش یادداشت‌ها.
- استایل‌دهی ساختاری حداقلی را در `style.css` اعمال کن: چیدمان card با flex/grid، و کلاس‌های utility صریح برای حالت `.error` و هایلایت `.important-note`.

### ✅ مایلستون ۲: رهگیری فرم و اعتبارسنجی لحظه‌ای

- event listenerهای `input` را به فیلدها وصل کن تا هشدارهای UI بلافاصله نمایش داده شوند.
- الگوهای Regex را داخل تابع دروازه‌بان پیاده‌سازی کن تا کاراکترهای ممنوع یا مخرب در textarea فیلتر شوند.
- رویداد `submit` را وصل کن تا از رفرش صفحه جلوگیری شود و وضعیت اعتبارسنجی با `console.log` تأیید شود.

### ✅ مایلستون ۳: استخراج داده و جهش State

- `new FormData(form)` را پیاده‌سازی کن تا مقادیر ورودی بدون نیاز به query selector جداگانه برای هر فیلد خوانده شوند.
- مقادیر را در قالب object یادداشت تعریف‌شده بسته‌بندی کن (با اختصاص `id` پویا از `Date.now()`).
- object یادداشت جدید را با `push` به آرایه‌ی سراسری `notes` اضافه کن.

### ✅ مایلستون ۴: رنگ‌آمیزی پویای UI (رندر DOM)

- تابع `renderNotes()` را کامل کن.
- آرایه‌ی داده‌ی State را به card های HTML یادداشت به صورت پویا تبدیل کن.
- اطمینان حاصل کن که با اضافه شدن یادداشت، رابط قدیمی پاک و آرایه‌ی State به‌روزشده به‌درستی دوباره چاپ می‌شود.

### ✅ مایلستون ۵: همگام‌سازی LocalStorage و State پایدار

- جهش‌های State را در هر بار submit فرم به browser storage همگام کن.
- تعریف اولیه‌ی `notes` در ابتدای فایل را بازنویسی کن تا یادداشت‌های ذخیره‌شده‌ی قبلی هنگام رفرش صفحه لود شوند.
- edge caseها را تست کن (مثلاً لود کردن برنامه با storage خالی).
