# 📋 فرم تماس پیشرفته (Contact Form Pro) — مشخصات پروژه

## 🎯 هدف پروژه

ساخت یک فرم تماس حرفه‌ای، مقیاس‌پذیر و کاربرپسند در ری‌اکت (React) با تمرکز بر کامپوننت‌های کنترل‌شده (Controlled Components)، اعتبارسنجی آنی (Real-time Validation) و مدیریت خطای قدرتمند.

---

## 🛠 نیازمندی‌ها و ویژگی‌ها

### ۱. کامپوننت‌های کنترل‌شده (Controlled Components)

تمامی فیلدهای فرم باید کاملاً از طریق استیت (State) ری‌اکت کنترل شوند:

- **نام (Name):** ورودی متنی (Text input)
- **ایمیل (Email):** ورودی متنی (Text input)
- **موضوع (Subject):** انتخاب از منوی کشویی (Dropdown)
- **پیام (Message):** کادر متنی بزرگ (Textarea)

### ۲. منطق اعتبارسنجی (Validation Logic)

- **نام:** الزامی، حداقل ۳ کاراکتر.
- **ایمیل:** الزامی، باید مطابق با فرمت صحیح ایمیل باشد (استفاده از Regex).
- **موضوع:** الزامی، انتخاب یکی از گزینه‌های لیست کشویی پیش‌فرض.
- **پیام:** الزامی، حداقل ۱۰ کاراکتر.

### ۳. مدیریت خطا و تجربه کاربری (UX)

- **وضعیت لمس‌شده (Touched State):** پیام خطای مربوط به هر فیلد، تنها زمانی نمایش داده شود که کاربر آن فیلد را «لمس/بازدید» کرده باشد (رویداد focus و سپس blur).
- **دکمه ارسال:** در صورتی که فرم نامعتبر باشد (دارای خطا باشد یا فیلدهای الزامی خالی باشند)، دکمه "Submit" باید به صورت پویا غیرفعال (Disabled) شود.
- **بازخورد موفقیت:** پس از ارسال موفقیت‌آمیز فرم، یک پیام "Success" واضح نمایش داده شده و فرم ریست (تنظیم مجدد) شود.

### ۴. ارسال فرم (Submission)

- شبیه‌سازی درخواست API سمت سرور با استفاده از `setTimeout` در یک ساختار `async/await`.
- نمایش یک وضعیت در حال بارگذاری بصری (Loading State) مانند تغییر متن دکمه به "...Submitting" در زمان پردازش.

---

## 🏗️ محدودیت‌های فنی

- **فقط ری‌اکت خالص (Vanilla React):** استفاده از هرگونه کتابخانه خارجی برای مدیریت فرم (مانند Formik یا React Hook Form) ممنوع است.
- **مدیریت استیت:** استفاده از هوک‌های نیتیو ری‌اکت (`useState`) برای مدیریت مقادیر فرم، خطاهای اعتبارسنجی، وضعیت لمس فیلدها و وضعیت ارسال.
- **معماری کد:** حفظ ساختار تمیز کد و رعایت اصل جداسازی وظایف (Separation of Concerns)؛ به عنوان مثال جداسازی توابع اعتبارسنجی از بخش رندرینگ UI.

---

## 📅 گام‌های اجرایی و مایلستون‌ها (Milestones)

- **روز اول: معماری فرم و مقداردهی اولیه استیت**
  - پیاده‌سازی ساختار و لایه ظاهری فرم.
  - پیاده‌سازی ورودی‌های کنترل‌شده و متصل کردن آن‌ها به یک استیت یکپارچه ری‌اکت.
- **روز دوم: موتور اعتبارسنجی و بازخورد UX**
  - پیاده‌سازی منطق اعتبارسنجی آنی (Real-time).
  - ردیابی وضعیت فیلدهای لمس‌شده (`touched`) و رندر مشروط پیام‌های خطای پویا.
- **روز سوم: ارسال نامتقارن و اصلاحات نهایی**
  - مدیریت شبیه‌سازی فرآیند ناهمگام (Async)، وضعیت لودینگ و وضعیت موفقیت.
  - بازنویسی و تمیزکاری کد (Refactor)، بازبینی کد (Code Review) و زیباسازی UI/UX.

---

## 💡 دستورالعمل‌های پیاده‌سازی

### 🔑 اولویت با پایداری ساختار استیت (State)

ابتدا روی ساختار الاستیک و تمیز استیت تمرکز کنید. مدیریت استیت‌ها در قالب آبجکت‌های یکپارچه برای مقیاس‌پذیری پروژه شدیداً توصیه می‌شود:

````javascript
const [formValues, setFormValues] = useState({ name: '', email: '', subject: '', message: '' });
const [errors, setErrors] = useState({});
const [touched, setTouched] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);

# 📋 Contact Form Pro — Project Specification

## 🎯 Objective
Build a professional, scalable, and user-friendly contact form in React, focusing on controlled components, real-time validation, and robust error handling.

---

## 🛠 Features & Requirements

### 1. Controlled Components
All form fields must be fully controlled via React state:
* **Name:** Text input
* **Email:** Text input
* **Subject:** Dropdown selection
* **Message:** Textarea input

### 2. Validation Logic
* **Name:** Required, minimum 3 characters.
* **Email:** Required, must match a valid email format (`Regex`).
* **Subject:** Required, selection from a predefined dropdown list.
* **Message:** Required, minimum 10 characters.

### 3. Error Handling & UX
* **Touched State:** Show validation error messages for a specific field only after it has been "touched" (focused and blurred/visited) by the user.
* **Submit Button:** Disable the "Submit" button dynamically if the form contains any validation errors or if required fields are empty.
* **Success Feedback:** Display a clear "Success" message upon successful submission and reset the form.

### 4. Submission
* Simulate a backend API call using `setTimeout` within an `async/await` workflow.
* Display a visual loading state (e.g., button text changes to "Submitting...") while processing.

---

## 🏗️ Technical Constraints
* **Vanilla React Only:** No external form management libraries allowed (e.g., Formik, React Hook Form).
* **State Management:** Utilize native React hooks (`useState`) to manage form values, validation errors, touched states, and submission statuses.
* **Architecture:** Maintain a clean code structure with proper separation of concerns (e.g., separate validation utility functions from UI rendering).

---

## 📅 Milestones

* **Day 1: Form Architecture & State Initialization**
  * Set up form layout and structural elements.
  * Implement controlled inputs and bind them to a unified React state.
* **Day 2: Validation Engine & UX Feedback**
  * Implement real-time validation logic.
  * Track `touched` states and render dynamic error messages conditionally.
* **Day 3: Async Submission & Final Refinements**
  * Handle asynchronous simulation, loading indicators, and success states.
  * Refactor code, perform code review, and polish UX.

---

## 💡 Implementation Guidelines

### 🔑 State Architecture Priority
Focus heavily on a clean, scalable state structure. Managing state using unified objects is highly recommended for structured scale:
```javascript
const [formValues, setFormValues] = useState({ name: '', email: '', subject: '', message: '' });
const [errors, setErrors] = useState({});
const [touched, setTouched] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
````
