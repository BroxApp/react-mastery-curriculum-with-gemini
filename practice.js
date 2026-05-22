let car={
    brand: "toyota",
    model: "camry"
};

// ۱. استفاده از Destructuring برای استخراج مقادیر از شیء
const { brand, model } = car;

// ۲. تابع پیکانی (Arrow Function)
const displayCarInfo = (b, m) => `this car is a ${b} ${m}`;

// ۳. فراخوانی تابع با مقادیر استخراج شده
console.log(displayCarInfo(brand, model));
