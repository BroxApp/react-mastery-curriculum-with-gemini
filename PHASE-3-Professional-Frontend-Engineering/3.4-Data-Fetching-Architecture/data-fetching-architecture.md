 Phase 3.4 — Data Fetching Architecture (مدیریت حرفه‌ای داده‌های سرور با TanStack Query)
تا به امروز ما با useEffect یا با هوک‌های اختصاصی مثل useFetch داده‌ها را از سرور دریافت می‌کردیم. اما در پروژه‌های بزرگ صنعتی و مقیاس‌پذیر، مدیریت دستی درخواست‌ها با چالش‌های بزرگی روبروست:

عدم وجود Caching خودکار: اگر کاربر بین صفحات جابجا شود، داده‌ها دوباره بی‌جهت دانلود می‌شوند.
مدیریت پیچیده‌ی وضعیت‌های موازی: مدیریت لودینگ اولیه، رفرش در پس‌زمینه (Background Refetching)، خطایابی و تلاش مجدد (Retry).
پیچیدگی صفحه‌بندی (Pagination) و اسکرول بی‌نهایت (Infinite Scroll).
💡 راه‌حل استاندارد صنعت فرانت‌اند: کتابخانه TanStack Query (React Query) که به عنوان استاندارد شماره یک مدیریت Server-State در ری‌اکت شناخته می‌شود.

🏗️ ۱. مفاهیم بنیادی TanStack Query
در React Query تفکیک مهمی بین دو نوع State وجود دارد:

Client State: وضعیت‌های محلی UI (مثل باز/بسته بودن مودال یا فرم‌ها).
Server State: داده‌هایی که متعلق به سرور هستند و ما فقط یک کپی از آن‌ها را کش می‌کنیم.
⚙️ ۲. راه‌اندازی اولیه و ساختار Provider
برای استفاده از TanStack Query، کل برنامه را با QueryClientProvider احاطه می‌کنیم:


import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

// ۱. ساخت کلاینت مرکزی برای مدیریت کش
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // داده‌ها تا ۵ دقیقه تازه (Fresh) می‌مانند و دوباره درخواست نمی‌شوند
      retry: 2,                 // در صورت بروز خطا، ۲ بار تلاش مجدد خودکار
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
🔍 ۳. دریافت داده با هوک طلایی useQuery
برای گرفتن داده‌ها از سرور، از هوک useQuery استفاده می‌کنیم:


import { useQuery } from '@tanstack/react-query';

// تابع خالص برای Fetch داده
const fetchProducts = async () => {
  const res = await fetch('https://dummyjson.com/products');
  if (!res.ok) throw new Error('خطا در دریافت لیست محصولات');
  return res.json();
};

export function ProductList() {
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ['products'], // ۱. کلید منحصربه‌فرد کش (Cache Key)
    queryFn: fetchProducts, // ۲. تابعی که Promise برمی‌گرداند
  });

  if (isLoading) return <p>در حال بارگذاری اولیه...</p>;
  if (isError) return <p>خطا: {error.message}</p>;

  return (
    <div>
      <h2>لیست محصولات {isFetching && '🔄'}</h2>
      <ul>
        {data?.products.map((product) => (
          <li key={product.id}>{product.title} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
}
🔑 درک ۳ مفهوم بسیار مهم:
queryKey (کلید کش): آرایه‌ای از کلمات یا شناسه‌ها که مثل کلید یک دیکشنری در کش عمل می‌کند. اگر پارامتری عوض شود (مثل ['products', page])، ری‌اکت کوئری خودکار داده‌های صفحه جدید را کش می‌کند.
queryFn: تابعی که عملیات Async را انجام داده و دیتا برمی‌گرداند.
تفاوت isLoading و isFetching:
isLoading: فقط اولین باری که هیچ دیتایی در کش نیست true است.
isFetching: هر زمان که یک درخواست در پس‌زمینه در جریان باشد (حتی هنگام رفرش مجدد با وجود دیتای قبلی) true است.