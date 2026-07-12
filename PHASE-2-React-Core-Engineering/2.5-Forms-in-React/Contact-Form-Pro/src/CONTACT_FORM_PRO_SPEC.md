📋 Contact Form Pro - Project Specification
🎯 Objective
Building a professional, scalable, and user-friendly contact form in React, focusing on controlled components, real-time validation, and robust error handling.

🛠 Features Requirements
Controlled Components: All form fields (name, email, subject, message) must be controlled via React state.
Validation Logic:
Name: Required, min 3 characters.
Email: Required, must be a valid email format (Regex).
Subject: Required, selection from a dropdown list.
Message: Required, min 10 characters.
Error Handling & UX:
Show error messages for each field only after it has been "touched" (visited).
Disable the "Submit" button if the form is invalid.
Display a "Success" message upon successful submission.
Submission: Simulate an API call using setTimeout (async function) and show a loading state while processing.
🏗️ Technical Constraints
No external form libraries (e.g., Formik, React Hook Form) - Vanilla React only.
Use useState for state management.
Clean code architecture (separation of concerns).
📅 Milestones
Day 1: Form structure, controlled inputs, and basic state management.
Day 2: Validation logic, error state tracking, and UI feedback.
Day 3: Async submission handling, final refinements, and code review.

راهنمایی :
اولویت با پایداری است: ابتدا روی ساختار State تمرکز کن. هر چقدر State تو تمیزتر و منطقی‌تر باشد (مثلاً استفاده از یک آبجکت برای errors و یک آبجکت برای touched)، کار برایت ساده‌تر می‌شود.
به UX فکر کن: به این فکر کن که کاربر چطور باید بفهمد که خطا دارد؟ آیا خطاها همزمان نشان داده می‌شوند یا یکی‌یکی؟
مستندسازی: هر بخشی که تمام شد، یک کامیت با پیامِ مرتبط (طبق استانداردهای قبلی) بزن.