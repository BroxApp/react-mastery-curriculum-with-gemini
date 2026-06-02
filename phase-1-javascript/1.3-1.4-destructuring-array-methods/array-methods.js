/**
 * 🎯 تمرین مهندسی: مدیریت پیشرفته فروشگاه (Destructuring & Array Methods)
 */

const storeData = {
    storeName: "TechBrox",
    location: "Canada",
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

//جواب سوالات
//سوال اول: استخراج نام فروشگاه و لیست موجودی
const {storeName, inventory}=storeData;
//تست پاسخ سوال اول
console.log(`Store Name: ${storeName}`,
    inventory);
console.log(`Store Name: ${storeName}`);
console.table(inventory);

//سوال دوم: تابعی که فقط محصولات موجود را بر میگرداند
const getAvailableProducts = (productsArray) =>{
    const availableProducts = productsArray.filter(
        product=>product.stock > 0)
    return availableProducts;
}
//تست پاسخ سوال دوم
console.log ("Available Products:",
    getAvailableProducts(storeData.inventory));

//سوال سوم: تابعی که مجموع ارزش کل انبار را محاسبه می‌کند
const calculateTotalValue = (productsArray)=>{
    const totalValue = productsArray.reduce((total, currentValue)=>{
       return total + (currentValue.price*currentValue.stock);
    }, 0 );
    return totalValue;
}
//تست پاسخ سوال سوم
console.log("Total Value:", calculateTotalValue(storeData.inventory));

//سوال چهارم: تابعی که یک محصول رو با استفاده از آی دی حذف میکند
const deleteProductById = (productArray, productId)=>{
    return productArray.filter(item=>item.id!==productId)
}

//تست پاسخ سوال چهارم
console.log("Deleted Product List:", deleteProductById(storeData.inventory, 102));

//سوال پنجم: تابعی که محصولات دسته‌ی الکترونیک را با بیست درصد تخفیف برمی‌گرداند، اما باقی محصولات بدون تغییر می‌مانند
const electronicProducts = (electronicArry, discount) =>{
    return electronicArry.map(item=>
        item.category === "Electronics"
        ? {...item, price:item.price-(item.price*discount/100)}
        : item
    )
}

//تست پاسخ سوال پنجم
console.log(electronicProducts(storeData.inventory, 20));

//متد .find()
const products = [
    {id:1, name:"laptop", price:1000},
    {id:2, name:"phone", price:500}
]

const findedProduct = products.find(product => product.id === 2);
console.log(findedProduct);
const finedProduct2 = products.find(product => product.id === 1);
console.log(finedProduct2);

//متد .sort()
const prices = [10, 5, 80, 2]

//روش غلط برای اعداد
const sortedPrices2 = prices.sort();

//روش درست برای اعداد (نزولی)
const sortedPrices = [...prices].sort((a , b)=> b - a);

console.log (sortedPrices2);
console.log (sortedPrices);

