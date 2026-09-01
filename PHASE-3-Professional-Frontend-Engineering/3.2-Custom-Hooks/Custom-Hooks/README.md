🎓 Phase 3.2 — Custom Hooks (هوک‌های اختصاصی در ری‌اکت)
خوش آمدی به یکی از جذاب‌ترین و قدرتمندترین مباحث مهندسی فرانت‌اند!

❓ چرا به Custom Hooks نیاز داریم؟ (The Big Picture)
در برنامه‌نویسی اصلی وجود دارد به نام DRY (Don't Repeat Yourself). در ری‌اکت، ما معمولاً منطق کامپوننت‌ها (Logic) شامل useState، useEffect و... را در چندین کامپوننت تکرار می‌کنیم.

مثال واقعی: تراکنش‌های شبکه، خواندن داده از localStorage، مدیریت وضعیت آنلاین/آفلاین بودن کاربر، یا مدیریت فرم‌ها در صفحات مختلف تکرار می‌شوند.

اگر منطق (Logic) را داخل خود کامپوننت بنویسیم:

کامپوننت ما شلوغ و سنگین می‌شود.
منطق برنامه‌مان قابل کپی‌پیست و تکراری خواهد شد.
تست‌نویسی منطق برنامه‌مان سخت‌تر می‌شود.
💡 Custom Hook چیست؟ کاستوم هوک صرفاً یک تابع برنامه‌نویسی (JavaScript Function) است که نام آن با use شروع می‌شود و می‌تواند داخل خودش از هوک‌های استاندارد ری‌اکت (useState, useEffect, useRef, useCallback و...) استفاده کند.

🛠️ قوانین کلیدی ساخت Custom Hook (Rules of Custom Hooks)
قانون نام‌گذاری (Naming Convention): نام تابع حتماً و بایستی با use شروع شود (مثلاً useFetch, useLocalStorage, useDebounce). این قانون باعث می‌شود ری‌اکت بتواند بررسی‌های استاتیک قوانین هوک‌ها را اعمال کند.
فراخوانی هوک‌های ری‌اکت: فقط و فقط می‌توانید در سطح بالایی (Top Level) کاستوم هوک‌ها از هوک‌های دیگر ری‌اکت استفاده کنید (نه داخل شرط‌ها یا حلقه‌ها).
مستقل بودن Stateها: هر کامپوننتی که از یک Custom Hook استفاده کند، نسخه‌ی مستقل خودش از state را دریافت می‌کند! (کاستوم هوک state را بین کامپوننت‌ها به اشتراک نمی‌گذارد، بلکه منطق کار با state را به اشتراک می‌گذارد).
📚 سناریوی اول: ساخت هوک اختصاصی useFetch (تمرین تئوری و الگوی معماری)
بیا الگوی استاندارد نوشتن یک هوک دریافت اطلاعات (useFetch) را بررسی کنیم:

ساختار هوک useFetch.js:

import { useState, useEffect } from 'react';

/**
 * Custom Hook for Data Fetching
 * @param {string} url - The endpoint URL to fetch data from
 * @returns { { data: any, isLoading: boolean, error: string | null, refetch: Function } }
 */
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, isLoading, error, refetch: fetchData };
}
نحوه استفاده در کامپوننت (Usage in Component):

import React from 'react';
import { useFetch } from '../hooks/useFetch';

export function UserList() {
  const { data: users, isLoading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (isLoading) return <p>در حال دریافت اطلاعات...</p>;
  if (error) return <div>خطا: {error} <button onClick={refetch}>تلاش مجدد</button></div>;

  return (
    <div>
      <h2>لیست کاربران</h2>
      <ul>
        {users && users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
      <button onClick={refetch}>بروزرسانی لیست</button>
    </div>
  );
}
🎯 تفاوت State Sharing vs Logic Sharing (نکته طلایی مصاحبه‌های استخدامی)
Context API / Zustand / Redux: برای به اشتراک گذاشتن داده و وضعیت آنلاین (Shared State) بین کامپوننت‌ها استفاده می‌شوند.
Custom Hooks: برای به اشتراک گذاشتن رفتار و منطق کُد (Shared Logic) استفاده می‌شوند. هر بار فراخوانی هوک = ایجاد stateهای جدید و مجزا.
📋 نقشه راه و مرحله بعدی (Next Step)
آیا توضیحات تئوری واضح بود؟

اگر سوالی در این بخش داری بپرس، و در غیر این صورت تایید کن تا طبق Standard 1 & 2، پوشه‌ی Custom-Hooks را ایجاد کرده و ساختار مینی‌پروژه‌ی useFetch Library را برای پیاده‌سازی گام به گام تنظیم کنیم!


۱. کاستوم هوک دقیقاً چیست؟ (به زبان ساده و ملموس)
تصور کن در ساخت یک خانه یا در یک کارگاه تولیدی، دستگاهی داری که «ترکیبی از چند ابزار» است. مثلاً یک دستگاه دریل-پیچ‌گوشتی شارژی که خودش هم چراغ‌قوه دارد هم موتور چرخشی!

در ری‌اکت، ابزارهای پایه‌ای وجود دارند که به آن‌ها Hook استاندارد می‌گوییم:

useState (برای نگهداری اطلاعات/حافظه)
useEffect (برای انجام کارهای جانبی مثل ارتباط با سرور یا تایمر)
useRef (برای ارجاع مستقیم به المان‌ها)
Custom Hook چیست؟ یک تابع ساده است که چند تا از این هوک‌های پایه‌ای ری‌اکت را داخل خودش ترکیب کرده و مثل یک دستگاه ابزارِ چندکاره‌ی آماده تحویل کامپوننت می‌دهد!

۲. کاربرد Custom Hook چیست و چه دردی را دوا می‌کند؟
بیا با یک مثال برنامه‌نویسی ملموس پیش برویم:

فرض کن در یک پروژه ری‌اکت، ۳ صفحه متفاوت داری:

صفحه داشبورد: باید لیست آخرین اخبار را از سرور بگیرد، لودینگ (Loading) نشان دهد و اگر اینترنت قطع بود ارور (Error) بدهد.
صفحه فروشگاه: باید لیست محصولات را از سرور بگیرد، لودینگ نشان دهد و اگر خطا داد، دکمه «تلاش مجدد» بدهد.
صفحه پروفایل: باید اطلاعات کاربر را بگیرد، لودینگ نشان دهد و خطاها را مدیریت کند.
❌ روش اول (بدون Custom Hook):
شما مجبورید در هر ۳ صفحه خط به خط کد زیر را تکرار کنید:


Apply
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetch(url)
    .then(...)
    .catch(...);
}, []);
مشکل: اگر فردا بخواهی نحوه‌ی گرفتن خطاها یا لودینگ را کمی تغییر دهی، باید کدهای هر ۳ صفحه را دستی ویرایش کنی! کدت شلوغ و تکراری می‌شود.

✅ روش دوم (با Custom Hook):
تمام این منطقِ تکراری (گرفتن داده + مدیریت لودینگ + مدیریت ارور) را یک‌بار در فایلی به نام useFetch.js می‌نویسی.

حالا در هر صفحه، فقط یک خط می‌نویسی:


Apply
const { data, loading, error } = useFetch('https://api.example.com/products');
💡 چکیده کاربردهای اصلی Custom Hook:
پاکسازی کامپوننت (Clean UI): کامپوننت فقط مسئول نمایش ظاهر (HTML/JSX) می‌شود و کدهای پیچیده‌ی منطقی از داخل کامپوننت به هوک منتقل می‌شوند.
کاهش تکرار کد (Reusability): یک منطق را یک‌بار می‌نویسی و در ده‌ها کامپوننت مختلف استفاده می‌کنی.
تست‌پذیری آسان (Testability): می‌توانی منطق برنامه‌ات را جداگانه بدون درگیر شدن با ظاهر صفحه تست کنی.
