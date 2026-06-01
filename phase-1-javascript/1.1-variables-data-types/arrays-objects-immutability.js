/**
 * Day 10: Arrays, Objects, and Immutability
 * Topic: Memory Management (Stack vs Heap) & Reference Types
 */

// 1. Primitive Types (Stored by Value in Stack)
let name = "Brox";
let newName = name; // یک کپی کاملاً مجزا ساخته می‌شود
newName = "Gemini";

console.log("Primitive:", { name, newName }); // name همچنان "Brox" است

// 2. Reference Types (Stored by Reference in Heap)
const user = {
    name: "Brox",
    role: "Developer"
};

const updatedUser = user; // اینجا کپی ساخته نمی‌شود، بلکه هر دو به یک آدرس در حافظه اشاره می‌کنند
updatedUser.role = "Senior Developer";

console.log("Mutation Warning:", { user, updatedUser }); 
// هر دو تغییر کردند! چون هر دو به یک Object در حافظه (Heap) اشاره می‌کنند.

// 3. The React Way: Immutability (Spread Operator)
const student = {
    id: 1,
    skills: ["JS", "CSS"]
};

// برای تغییر ایمن، باید یک کپی جدید با آدرس جدید بسازیم
const improvedStudent = {
    ...student,
    skills: [...student.skills, "React"], // کپی کردن آرایه داخلی هم الزامی است (Deep copy simple level)
    level: "Intermediate"
};

console.log("Immutability (Correct):", { student, improvedStudent });

/**
 * 📝 تمرین مهندسی امروز:
 * ۱. یک آرایه از اشیاء (Products) بسازید.
 * ۲. تابعی بنویسید که یک محصول جدید به آن اضافه کند بدون اینکه آرایه اصلی را تغییر دهد (استفاده از Spread).
 * ۳. تابعی بنویسید که قیمت یکی از محصولات را بر اساس ID تغییر دهد (با رعایت اصل Immutability).
 * 
 * راهنمایی: برای تغییر یک عضو در آرایه بدون تغییر نسخه اصلی، از متد .map() استفاده کنید.
 */

// مثال برای شروع تمرین:
const products = [{ id: 1, name: "Laptop", price: 1000 }];

// --- راه حل استاندارد مهندسی ---

// ۱. اضافه کردن محصول (Immutable)
const addProduct = (currentProducts, name, price) => {
    const newProduct = {
        id: currentProducts.length + 1,
        name,
        price
    };
    return [...currentProducts, newProduct]; // برگرداندن یک آرایه کاملاً جدید
};

// ۲. به‌روزرسانی قیمت با ID (Immutable)
const updatePrice = (currentProducts, productId, newPrice) => {
    return currentProducts.map(item => 
        item.id === productId 
            ? { ...item, price: newPrice } // ایجاد یک آبجکت جدید برای محصول مورد نظر
            : item // برگرداندن خودِ آبجکت قبلی اگر ID یکی نبود
    );
};

// تست عملکرد:
let myStore = addProduct(products, "Keyboard", 150);
myStore = updatePrice(myStore, 1, 950); // قیمت لپ‌تاپ را تغییر می‌دهیم

console.log("Original Products:", products); // باید همان ۱ مورد اول بماند
console.log("Current Store:", myStore);      // باید شامل ۲ مورد با قیمت اصلاح شده باشد

/**
 * 💡 نکته مهندسی:
 * در متد .map، وقتی شرط برقرار نیست و ما 'item' را برمی‌گردانیم، ری‌اکت متوجه می‌شود 
 * که این بخش از دیتا تغییر نکرده (Reference ثابت می‌ماند) و از رندر مجدد بیهوده 
 * جلوگیری می‌کند. این کلید اصلی Performance در پروژه‌های بزرگ است.
 */

// من دوباره تمرین را انجام دادم
const studentsList = [
    {id: 1, name: "Alice", grade: 90},
    {id: 2, name: "Reza", grade: 95},
    {id: 3, name: "Ahmad", grade: 80}
]

const addStudedntToList = (currentList, name, grade ) => {
    const newStudent = {
        id: currentList.length+1,
        name,
        grade
    }
    return [...currentList, newStudent];
}

const addNewGrade = (currentList, studentId, newGrade)=>{
    return currentList.map(item => 
        item.id === studentId
        ? {...item, grade: newGrade}
        : item
    )
}

let myClass = addStudedntToList (studentsList, "Sara", 98);
myClass = addNewGrade (myClass, 1, 97);

console.log("original studentsList:", studentsList);
console.log("myclassList:", myClass);

// من سه باره تمرین رو انجام دادم
const fruit = [{
    id:1,
    name: "apple",
    price: 100
}]

const addFruit = (currentFruitList, name, price)=>{
    const newFruit= {
        id: currentFruitList.length+1,
        name,
        price
    }
    return [...currentFruitList, newFruit]
}

const changePrice = (currentFruitList, fruitId, newPrice)=>{
    return currentFruitList.map(fruit =>
        fruit.id === fruitId
        ? {...fruit, price: newPrice}
        : fruit
    )
}

let myFruitShop = addFruit (fruit, "banana", 200);
myFruitShop = changePrice (myFruitShop, 1, 150);

console.log("original fruit list:", fruit);
console.log("my Shop fruit list:", myFruitShop);