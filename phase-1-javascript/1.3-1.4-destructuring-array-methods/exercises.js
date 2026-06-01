/**
 * 🎯 تمرین مهندسی: مدیریت پیشرفته فروشگاه (Destructuring & Array Methods)
 */

const storeData = {
    storeName: "TechBrox",
    location: "Tehran",
    inventory: [
        { id: 101, name: "Laptop", price: 1200, category: "Electronics", stock: 5 },
        { id: 102, name: "Mouse", price: 25, category: "Accessories", stock: 12 },
        { id: 103, name: "Monitor", price: 300, category: "Electronics", stock: 0 },
        { id: 104, name: "Keyboard", price: 80, category: "Accessories", stock: 8 },
        { id: 105, name: "Headphones", price: 150, category: "Electronics", stock: 3 },
    ]
};

// ۱. با استفاده از Destructuring، نام فروشگاه و لیست موجودی (inventory) را استخراج کنید.
// const { storeName, inventory } = storeData;

// ۲. تابعی بنویسید (getAvailableProducts) که فقط محصولاتی که در انبار موجود هستند (stock > 0) را برگرداند. (استفاده از .filter)

// ۳. تابعی بنویسید (calculateTotalValue) که مجموع ارزش کل انبار را محاسبه کند. (استفاده از .reduce)
// فرمول: sum of (price * stock)

// ۴. تابعی بنویسید که یک محصول را با استفاده از ID از لیست حذف کند (Immutable Delete). (استفاده از .filter)

// ۵. (چالش ری‌اکتی): تابعی بنویسید که قیمت تمام محصولات دسته "Electronics" را با ۲۰ درصد تخفیف برگرداند،
// اما بقیه محصولات تغییر نکنند. (ترکیب .map و Spread Operator)

console.log("--- Store Analysis ---");
// تست توابع خود را اینجا لاگ بگیرید
