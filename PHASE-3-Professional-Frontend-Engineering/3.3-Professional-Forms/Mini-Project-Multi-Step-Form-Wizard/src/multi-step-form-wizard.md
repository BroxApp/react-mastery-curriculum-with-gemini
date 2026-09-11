🧙‍♂️ مستندات فنی و راهنمای پیاده‌سازی مینی‌پروژه: Multi-Step Form Wizard
🎯 هدف مینی‌پروژه:
ساخت یک فرم ۳ مرحله‌ای ثبت‌نام پیشرفته با استفاده از React Hook Form و اعتبارسنجی مستقل هر مرحله توسط Zod، به گونه‌ای که اطلاعات وارد شده در طول تغییر مراحل محفوظ بماند.

🗂️ ۱. ساختار پیشنهادی پوشه‌ها و فایل‌ها (Clean Architecture)

Apply
PHASE-3-Professional-Frontend-Engineering/3.3-Professional-Forms/Mini-Project-Multi-Step-Form-Wizard/
├── src/
│ ├── schemas/
│ │ └── wizardSchemas.js <-- اسکیمای Zod برای هر مرحله و اسکیمای کل
│ ├── components/
│ │ ├── Step1Personal.jsx <-- مرحله ۱: اطلاعات فردی
│ │ ├── Step2Account.jsx <-- مرحله ۲: نقش و رمز عبور
│ │ ├── Step3Summary.jsx <-- مرحله ۳: مرور اطلاعات و تایید قوانین
│ │ ├── StepIndicator.jsx <-- نوار نمایش مرحله فعلی (1 -> 2 -> 3)
│ │ └── MultiStepWizard.jsx <-- کامپوننت مادر (Form Controller)
│ ├── App.jsx
│ └── main.jsx
📐 ۲. منطق معماری (Mental Model & Architecture)
در فرم‌های چندمرحله‌ای، ۲ رویکرد اصلی وجود دارد. رویکرد استاندارد و ساده:

کامپوننت مادر (MultiStepWizard) با یک useForm واحد اجرا می‌شود.
یک State به نام currentStep (از ۱ تا ۳) داریم.
برای رفتن به مرحله بعد، از متد قدرتمند trigger در React Hook Form استفاده می‌کنیم تا فقط فیلدهای همان مرحله اعتبارسنجی شوند:

Apply
const isStepValid = await trigger(["fullName", "email"]);
if (isStepValid) setCurrentStep(prev => prev + 1);
📋 ۳. جزئیات مراحل ۳‌گانه (Form Requirements)
🔹 مرحله ۱: اطلاعات فردی (Step1Personal)
fullName: حداقل ۳ کاراکتر ("نام و نام خانوادگی الزامی است")
email: ایمیل معتبر ("ایمیل وارد شده نامعتبر است")
دکمه: فقط دکمه «بعدی ⬅️»
🔹 مرحله ۲: مشخصات حساب (Step2Account)
role: انتخاب از کشویی ("frontend", "backend", "designer")
password: حداقل ۶ کاراکتر
confirmPassword: باید با password یکسان باشد (با استفاده از .refine)
دکمه‌ها: «قبلی ➡️» و «بعدی ⬅️»
🔹 مرحله ۳: پیش‌نمایش و تایید نهایی (Step3Summary)
نمایش متنی مقادیر وارد شده در مراحل قبل (fullName, email, role).
termsAccepted: چک‌باکس تایید قوانین (اجباری با z.boolean().refine(val => val === true)).
دکمه‌ها: «قبلی ➡️» و دکمه «ثبت نهایی ✅» (با لودینگ isSubmitting).
🛡️ ۴. فایل اسکیمای Zod پیشنهادی (src/schemas/wizardSchemas.js)

Apply
import { z } from 'zod';

export const wizardSchema = z.object({
// مرحله ۱
fullName: z.string().min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد."),
email: z.email({ message: "فرمت ایمیل نادرست است." }),

// مرحله ۲
role: z.enum(["frontend", "backend", "designer"], {
message: "لطفاً حوزه کاری خود را انتخاب کنید."
}),
password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد."),
confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است."),

// مرحله ۳
termsAccepted: z.boolean().refine((val) => val === true, {
message: "پذیرفتن قوانین الزامی است."
})
}).refine((data) => data.password === data.confirmPassword, {
message: "تکرار رمز عبور با رمز عبور مطابقت ندارد.",
path: ["confirmPassword"]
});
🚀 ۵. گام‌های اجرایی شما:
ساخت فایل src/schemas/wizardSchemas.js.
ایجاد کامپوننت مادر MultiStepWizard.jsx که شامل useForm، توابع nextStep و prevStep و تابع onSubmit باشد.
ایجاد کامپوننت‌های مراحل ۱، ۲ و ۳ و متصل کردن اینپوت‌ها با ارسال register, errors و داده‌های فرم.
فراخوانی MultiStepWizard در App.jsx.
