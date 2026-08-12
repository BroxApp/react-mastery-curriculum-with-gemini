| ابزار         | شوک / پیچیدگی | مناسب برای...                                          | نیازمند نصب کتابخانه؟        |
| :------------ | :------------ | :----------------------------------------------------- | :--------------------------- |
| Context API   | بسیار ساده    | تم، زبان، داده‌های ثابت و عمومی                        | ❌ خیر (بومی ری‌اکت)         |
| useReducer    | متوسط         | منطق پیچیده تغییر استیت محلی (مثل فرم‌های چندمرحله‌ای) | ❌ خیر (بومی ری‌اکت)         |
| Redux Toolkit | متوسط تا بالا | پروژه‌های بسیار بزرگ و سازمانی (Enterprise)            | بله (npm i @reduxjs/toolkit) |
| Zustand       | ساده و سریع   | استیت سراسری در ۹۰٪ پروژه‌های مدرن و فریلنسری          | بله (npm i zustand)          |

۱. Context API (بومی ری‌اکت)
🔹 سینتکس پایه (Syntax)

import { createContext, useContext, useState } from 'react';

// ۱. ساخت کانتکست
const ThemeContext = createContext();

// ۲. ساخت Provider
export function ThemeProvider({ children }) {
const [theme, setTheme] = useState('light');

const toggleTheme = () => {
setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
};

return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
}

// ۳. هوک اختصاصی برای مصرف آسان
export const useTheme = () => useContext(ThemeContext);
🔹 مثال عملی (Example)
استفاده در کامپوننت دکمه تغییر تم:

import { useTheme } from './ThemeContext';

export function ThemeToggler() {
const { theme, toggleTheme } = useTheme();

return (
<button onClick={toggleTheme}>
تم فعلی: {theme} (برای تغییر کلیک کن)
</button>
);
}
🧠 تفسیر و تحلیل منطق (Explanation)
createContext(): یک لوله یا کانال انتقال داده در حافظه ایجاد می‌کند.
ThemeContext.Provider: مثل یک چتر بالای سر کامپوننت‌ها عمل می‌کند. هر کامپوننتی که زیر این چتر باشد (داخل {children}) به مقادیر value دسترسی دارد.
useContext(ThemeContext): شیر خروجی این کانال است! هر کامپوننتی بدون داشتن Prop مستقیم از والدش، می‌تواند مقادیر درون value را ببافد و استفاده کند.
📝 تمرین شما (Exercise 1)
تمرین AuthContext: یک Context بسازید که استیت user (شامل { name: 'Brox', isLoggedIn: true }) و دو تابع login() و logout() را به کل اپلیکیشن ارائه دهد. سپس یک کامپوننت Navbar بسازید که نام کاربر را در صورت لاگین بودن نشان دهد و دکمه خروج داشته باشد.

۲. useReducer (بومی ری‌اکت)
🔹 سینتکس پایه (Syntax)

// ۱. تابع Reducer (محاسبه‌گر استیت جدید)
function reducer(state, action) {
switch (action.type) {
case 'INCREMENT':
return { count: state.count + 1 };
case 'DECREMENT':
return { count: state.count - 1 };
case 'RESET':
return { count: 0 };
default:
return state;
}
}

// ۲. فراخوانی در کامپوننت
const [state, dispatch] = useReducer(reducer, { count: 0 });
🔹 مثال عملی (Example)

import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
switch (action.type) {
case 'INCREMENT':
return { count: state.count + action.payload };
case 'DECREMENT':
return { count: state.count - action.payload };
case 'RESET':
return { count: 0 };
default:
throw new Error('Action نا معتبر است');
}
}

export function CounterApp() {
const [state, dispatch] = useReducer(reducer, initialState);

return (

<div>
<h2>تعداد: {state.count}</h2>
<button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+۵</button>
<button onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}>-۱</button>
<button onClick={() => dispatch({ type: 'RESET' })}>ریست</button>
</div>
);
}
🧠 تفسیر و تحلیل منطق (Explanation)
dispatch({ type, payload }): شما مستقیم استیت را دستکاری نمی‌کنید! فقط یک پیغام (Action) می‌فرستید که بگویید «چه اتفاقی افتاد» و داده‌های همراه آن را در payload می‌گذارید.
reducer(state, action): یک تابع خالص (Pure) است که استیت قبلی و پیغام جدید را می‌گیرد و یک استیت کاملاً جدید تولید کرده و برمی‌گرداند.
مزیت: منطق تغییر داده از ظاهر UI جدا می‌شود و تست و دیباگ آن بسیار ساده‌تر است.
📝 تمرین شما (Exercise 2)
تمرین Todo Reducer: یک useReducer بنویسید که یک آرایه لیست کارها (todos) را مدیریت کند. اکشن‌های آن باید شامل ADD_TODO (افزودن)، TOGGLE_TODO (تغییر وضعیت انجام شده/نشده) و DELETE_TODO (حذف) باشد.

۳. Redux Toolkit - RTK (کتابخانه خارجی)
🔹 سینتکس پایه (Syntax)

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
name: 'cart',
initialState: { items: [], total: 0 },
reducers: {
addItem: (state, action) => {
// کتابخانه Immer پشت صحنه استیت را غیرمستقیم Immutable بهینه‌سازی می‌کند
state.items.push(action.payload);
},
removeItem: (state, action) => {
state.items = state.items.filter(item => item.id !== action.payload);
}
}
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
🔹 مثال عملی (Example - چیدمان کامل RTK)

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
reducer: {
cart: cartReducer
}
});
مصرف در کامپوننت:

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './cartSlice';

export function ProductCard({ product }) {
const dispatch = useDispatch(); // برای فرستادن دستور
const cartItems = useSelector((state) => state.cart.items); // برای خواندن استیت

return (

<div>
<h3>{product.name}</h3>
<button onClick={() => dispatch(addItem(product))}>
افزودن به سبد (تعداد فعلی: {cartItems.length})
</button>
</div>
);
}
🧠 تفسیر و تحلیل منطق (Explanation)
createSlice: ترکیب توابع Reducer و Actionها در یک فایل. دیگر نیازی به نوشتن سواِئیچ‌کیس‌های طولانی نیست.
useSelector: یک گیرنده حساس است! فقط بخش خاصی از Store را که نیاز دارید به کامپوننت متصل می‌کند تا از رندرهای بی‌پایان جلوگیری شود.
useDispatch: پل ارتباطی کامپوننت با Store برای اجرای اکشن‌های درون Slice.
📝 تمرین شما (Exercise 3)
تمرین Notification Slice: یک اسلایس به نام notificationSlice بسازید که دارای دو اکشن showNotification (دریافت پیام و نوع پیام مثل success/error) و clearNotification باشد. سپس با useSelector آن را در یک باکس پیغام بالای صفحه نمایش دهید.

۴. Zustand (کتابخانه مدرن، سبک و محبوب)
🔹 سینتکس پایه (Syntax)

import { create } from 'zustand';

export const useCartStore = create((set) => ({
cart: [],
addToCart: (product) =>
set((state) => ({ cart: [...state.cart, product] })),
clearCart: () => set({ cart: [] }),
}));
🔹 مثال عملی (Example)

import { useCartStore } from './useCartStore';

export function ShoppingCart() {
// ۱. استخراج مستقیم داده و تابع بدون هیچ Provider یا Boilderplate!
const cart = useCartStore((state) => state.cart);
const addToCart = useCartStore((state) => state.addToCart);
const clearCart = useCartStore((state) => state.clearCart);

return (

<div>
<h2>سبد خرید ({cart.length})</h2>
<button onClick={() => addToCart({ id: 1, name: 'لپ‌تاپ' })}>
افزودن لپ‌تاپ
</button>
<button onClick={clearCart}>خالی کردن سبد</button>
</div>
);
}
🧠 تفسیر و تحلیل منطق (Explanation)
عدم نیاز به Provider: برخلاف Context و Redux، هیچ نیازی نیست دور کل فایل main.jsx یک <Provider> بگذارید.
create((set) => ...): یک Custom Hook خروجی می‌دهد که خودش تمام استیت‌ها و توابع تغییر استیت (set) را نگهداری می‌کند.
انتخاب‌گر اتمی (Atomic Selector): وقتی می‌نویسید useCartStore(state => state.cart)، این کامپوننت فقط و فقط در صورتی رندر مجدد می‌شود که آرایه cart تغییر کند، حتی اگر هزار استیت دیگر درون همان store تغییر کنند!
📝 تمرین شما (Exercise 4)
تمرین Favorites Store با Zustand: یک استور با Zustand بسازید به نام useFavoritesStore که لیست محصولات علاقه‌مندی (favorites) را نگه می‌دارد. توابع آن: addFavorite(id), removeFavorite(id) و isFavorite(id).
