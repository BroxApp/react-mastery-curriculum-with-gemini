const laptop = {
  id: 101,
  specs: {
    cpu: "Core i7",
    ram: "16GB",
    storage: "512GB SSD"
  },
  brand: "Asus"
};

const { brand, specs: { cpu } } = laptop;

// استفاده از Implicit Return برای کوتاه‌تر شدن تابع
const laptopData = (brand, cpu) => `This laptop is a ${brand} and has ${cpu}`;

// حالا که متغیرها را استخراج کردیم، از خودشان استفاده می‌کنیم
console.log(laptopData(brand, cpu));