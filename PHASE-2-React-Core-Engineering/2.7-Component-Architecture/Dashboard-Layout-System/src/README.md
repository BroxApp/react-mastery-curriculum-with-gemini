Target: برای مینی‌پروژه‌ی این فاز، ما Dashboard Layout System را طراحی می‌کنیم. هدف در اینجا این است که بفهمیم چطور یک سیستمِ چیدمان (Layout) بسازیم که در تمام صفحات اپلیکیشن ثابت باشد و کامپوننت‌ها به شکلی کاملاً ماژولار و قابل‌استفاده مجدد (Reusable) نوشته شوند.
🏗️ Dashboard Layout System Specification
🎯 Objective
Implementing a scalable and maintainable dashboard architecture using React Component Composition and Clean Architecture patterns.

🛠 Features Requirements
Layout Wrapper:
Create a DashboardLayout component that encapsulates:
Sidebar (Navigation)
TopBar (User profile/Search)
MainContent (Dynamic children)
Reusable Components:
Card: A reusable component that accepts title, children, and type (success, info, warning).
Button: A styled, reusable button with variant (primary, secondary, danger) and onClick props.
StatWidget: A small widget to display data summaries.
Composition:
Use the children prop pattern to compose the dashboard structure.
Clean Architecture:
Strict separation: components/common (atoms), components/layout (layout parts), and pages.
🏗️ Technical Constraints
No external UI libraries (Material UI, Bootstrap, etc.).
Custom CSS/CSS Modules for styling.
Logical folder structure (Atomic Design philosophy).
📅 Milestones
Day 1: Setup structure, build Layout Wrapper (Sidebar, TopBar), and implement basic routing.
Day 2: Develop reusable Card, Button, and StatWidget components.
Day 3: Assemble dashboard pages and optimize architecture.
🏗️ مشخصات سیستم چیدمان داشبورد (Dashboard Layout System)
🎯 هدف
پیاده‌سازی معماری مقیاس‌پذیر و قابل نگهداری برای داشبورد با استفاده از «ترکیب کامپوننت‌ها» (Component Composition) و الگوهای «معماری تمیز» (Clean Architecture).

🛠 ویژگی‌های مورد نیاز
Layout Wrapper:
ساخت کامپوننت DashboardLayout که شامل موارد زیر باشد:
Sidebar (ناوبری کناری)
TopBar (پروفایل کاربر/جستجو)
MainContent (محتوای پویا)
کامپوننت‌های قابل استفاده مجدد:
Card: یک کامپوننت قابل استفاده که title ، children و type (موفقیت، اطلاعات، هشدار) را می‌گیرد.
Button: یک دکمه استایل‌دهی شده با پراپس‌های variant (اصلی، فرعی، خطر).
StatWidget: ابزارک کوچک برای نمایش خلاصه‌ی داده‌ها.
ترکیب (Composition):
استفاده از الگوی children برای چیدمان داشبورد.
معماری تمیز:
جداسازی دقیق: components/common (اتم‌ها)، components/layout (بخش‌های چیدمان) و pages.
🏗️ محدودیت‌های فنی
بدون استفاده از کتابخانه‌های UI خارجی (مانند Material UI یا Bootstrap).
استفاده از CSS/CSS Modules اختصاصی برای استایل‌دهی.
ساختار پوشه‌بندی منطقی بر اساس فلسفه طراحی اتمی (Atomic Design).
💡 راهنمایی منتور:
Composition: سعی کن به جای پاس دادنِ مستقیمِ داده‌ها، از children برای تزریقِ محتوا به کامپوننت‌های Layout و Card استفاده کنی.
Folder Structure: دقت کن که کامپوننت‌های "اتمی" مثل Button نباید هیچ‌گونه وابستگی به بیزینس‌لاجیکِ داشبورد داشته باشند. آن‌ها باید کاملاً مستقل (Independent) باشند.