/**
 * PROJECT: Product Filtering Engine
 * PHASE: 1.4 - Array Methods Deep Dive
 * STUDENT: Brox
 * 
 * هدف: پیاده‌سازی یک موتور جستجو و فیلتر برای محصولات یک فروشگاه فرضی.
 * تو در این پروژه باید با استفاده از متدهای آرایه، داده‌ها را پردازش کنی.
 */

// 1. Mock Data (دیتای فرضی)
const products = [
    { id: 1, name: "MacBook Pro", price: 2500, category: "Electronics", stock: 5, rating: 4.8 },
    { id: 2, name: "iPhone 15", price: 1200, category: "Electronics", stock: 12, rating: 4.7 },
    { id: 3, name: "Gaming Chair", price: 350, category: "Furniture", stock: 0, rating: 4.2 },
    { id: 4, name: "Mechanical Keyboard", price: 150, category: "Electronics", stock: 20, rating: 4.5 },
    { id: 5, name: "Coffee Maker", price: 80, category: "Kitchen", stock: 15, rating: 4.0 },
    { id: 6, name: "Office Desk", price: 500, category: "Furniture", stock: 3, rating: 4.6 },
    { id: 7, name: "Running Shoes", price: 120, category: "Sports", stock: 25, rating: 4.3 },
];

/**
 * TASK 1: فیلتر کردن محصولات موجود
 * خروجی: آرایه‌ای از محصولاتی که stock آن‌ها بیشتر از 0 است.
 */
const getAvailableProducts = (items) => {
    return items.filter(item => item.stock > 0);
};
console.log("پاسخ سوال اول");
console.log(getAvailableProducts(products));

/**
 * TASK 2: پیدا کردن یک محصول خاص با نام
 * ورودی: نام محصول (مثلاً "iPhone 15")
 * خروجی: شیء مربوط به آن محصول.
 */
const findProductByName = (items, productName) => {
    return items.find (item => item.name === productName);
};
console.log("پاسخ سوال دوم");
console.log(findProductByName(products, "MacBook Pro"));

/**
 * TASK 3: دسته‌بندی محصولات (Filtering by Category)
 * ورودی: نام دسته‌بندی
 * خروجی: تمام محصولات آن دسته.
 */
const filterByCategory = (items, category) => {
    return items.filter (item => item.category === category);
};
console.log("پاسخ سوال سوم");
console.log(filterByCategory(products, "Electronics"));


/**
 * TASK 4: مرتب‌سازی بر اساس قیمت (Sorting)
 * ورودی: نوع مرتب‌سازی ('asc' برای صعودی، 'desc' برای نزولی)
 */
const sortByPrice = (items, order) => {
    if(order === 'desc'){
        return [...items].sort ((a, b)=> b.price - a.price);
    }else{
        return [...items].sort ((a, b)=> a.price - b.price);
    }
};
console.log("پاسخ سوال چهارم/حالت اول");
console.log(sortByPrice(products, 'desc'));
console.log(sortByPrice(products, 'esc'));

const sortByPrice2 = (items, order) => {
    return (order === 'desc')
    ? [...items].sort ((a, b)=> b.price - a.price)
    : [...items].sort ((a, b)=> a.price - b.price)
};
console.log("پاسخ سوال چهارم/حالت دوم");
console.log(sortByPrice2(products, 'desc'));
console.log(sortByPrice2(products, 'esc'));

/**
 * TASK 5: محاسبه ارزش کل موجودی انبار (Reduce)
 * هدف: مجموع (قیمت * تعداد موجودی) تمام محصولات.
 */
const calculateTotalInventoryValue = (items) => {
    return items.reduce ((total, currentValue)=> {
        return total + (currentValue.price * currentValue.stock);
    }, 0)
};
console.log("پاسخ سوال پنجم");
console.log(calculateTotalInventoryValue(products));

/**
 * TASK 6: ساخت لیست نمایش (Map)
 * خروجی: آرایه‌ای از رشته‌ها به فرمت: "Product: [Name] - Price: $[Price]"
 */
const generateProductSummary = (items) => {
  return items.map(item=>`product:${item.name} - price:${item.price}`)
};
console.log("پاسخ سوال ششم");
console.log(generateProductSummary(products));


/**
 * 🔥 CHALLENGE (ADVANCED):
 * تابعی بنویس که محصولات با امتیاز (rating) بالای 4.5 را پیدا کرده، 
 * آن‌ها را از ارزان به گران مرتب کند و فقط نام آن‌ها را برگرداند.
 * (ترکیب filter, sort, map)
 */
const getTopRatedProductNames = (items) => {
    return items.filter (item => item.rating > 4.5)
                .sort ((a, b) => a.price - b.price)
                .map (item => `Product Name: ${item.name}`)
};
console.log("پاسخ بخش چلنج/حالت اول");
console.log(getTopRatedProductNames(products));

console.log("پاسخ بخش چلنج/حالت دوم");
const getTopRatedProductNames2 = items => items
    .filter (item => item.rating > 4.5)
    .sort ((a, b) => a.price - b.price)
    .map (item => `Product Name:${item.name}`)
console.log(getTopRatedProductNames2(products));
    

// --- بخش تست (فردا این‌ها را اجرا می‌کنیم) ---
/*
console.log("Available Products:", getAvailableProducts(products));
console.log("Find iPhone:", findProductByName(products, "iPhone 15"));
console.log("Electronics:", filterByCategory(products, "Electronics"));
console.log("Sorted Asc:", sortByPrice(products, 'asc'));
console.log("Total Value:", calculateTotalInventoryValue(products));
console.log("Summaries:", generateProductSummary(products));
console.log("Top Rated Names:", getTopRatedProductNames(products));
*/

/**
 * 💡 راهنمایی مهندسی برای مطالعه تا فردا:
 * 1. در متد filter، دقت کن که آرایه‌ی اصلی تغییر نمی‌کند (Immutability).
 * 2. در متد sort، به یاد داشته باش که این متد آرایه‌ی اصلی را تغییر می‌دهد (Mutate). 
 *    بهتر است قبل از آن از [...items] استفاده کنی تا یک کپی داشته باشی.
 * 3. در reduce، همیشه مقدار اولیه (Initial Value) را صفر قرار بده.
 * 4. زنجیره‌سازی (Chaining): می‌توانی بنویسی products.filter(...).sort(...).map(...)
 */
 