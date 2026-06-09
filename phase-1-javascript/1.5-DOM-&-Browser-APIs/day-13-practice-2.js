/**
 * 📝 تمرینات روز سیزدهم - شماره ۲ (سطح متوسط تا پیشرفته)
 * هدف: ترکیب متدهای آرایه با DOM، مدیریت فرم‌ها و استفاده حرفه‌ای از LocalStorage.
 */

// --- تمرین ۱: شمارشگر کاراکتر (Input Event & Live Feedback) ---
// سناریو: یک کادر متن (textarea) داریم. کدی بنویس که همزمان با تایپ کاربر، 
// تعداد کاراکترهای باقی‌مانده از ۱۰۰ کاراکتر را در یک المان span نمایش دهد.
// راهنمایی: از ایونت 'input' استفاده کن و اگر تعداد از ۱۰۰ گذشت، رنگ متن را قرمز کن.

//پاسخ تمرین: 1
const span = document.querySelector ('.spantext');
const textarea = document.querySelector ('#text');
span.textContent = 'Remaining characters: 100'
textarea.addEventListener ('input', ()=>{
    const count = textarea.value.length;
    const remaining = 100 - count;
    span.textContent = `Remaining characters: ${remaining}`;
   if (remaining < 0){
    span.style.color = 'red';
   }else{
    span.style.color = 'black';
   }
}
)

// --- تمرین ۲: فیلتر کردن لیست (Array Methods + DOM) ---
// سناریو: یک لیست از اسامی در DOM داری (مثلاً ۵ تا li). یک Input برای جستجو بالای آن قرار بده.
// کدی بنویس که با تایپ در اینپوت، فقط آیتم‌هایی که شامل آن حروف هستند نمایش داده شوند و بقیه مخفی (display: none) شوند.
// راهنمایی: از .querySelectorAll و .forEach استفاده کن.

//پاسخ تمرین: 2
const searchinput = document.querySelector ('.searchinput');
const searchbtn = document.querySelector ('.searchbtn');
const data = document.querySelectorAll ('.dataul li');

searchbtn.addEventListener ('click', ()=>{
    // searchinput.addEventListener ('input', ()=>{
        const forSearch = searchinput.value;
        data.forEach (item=>{
            if(item.textContent.toLowerCase().includes(forSearch.toLowerCase())){
                item.style.display = '';
            }else{
                item.style.display = 'none';
            }
        })
    // })
})

// --- تمرین ۳: مدیریت فرم و جلوگیری از ری‌فرش (Form Handling) ---
// سناریو: یک فرم ساده با دو اینپوت (نام و سن) و یک دکمه Submit بساز.
// کدی بنویس که موقع کلیک روی دکمه، صفحه ری‌فرش نشود، اطلاعات را در کنسول نمایش دهد و فرم را ریست (clear) کند.
// راهنمایی: event.preventDefault() کلید حل این تمرین است.

//پاسخ تمرین : 3
const userForm = document.querySelector ('#myForm');
const userName = document.querySelector ('#name');
const userAge = document.querySelector ('#age');

userForm.addEventListener ('submit', (event)=>{
    event.preventDefault();
    console.log(`Name: ${userName.value}, Age: ${userAge.value}`);
    userName.value = "";
    userAge.value = "";
})

// --- تمرین ۴: سیستم لایک ساده (Data Attributes) ---
// سناریو: ۳ دکمه داری که روی هر کدام نوشته شده "Like". 
// کدی بنویس که با کلیک روی هر کدام، عددِ کنار آن دکمه یک واحد زیاد شود.
// راهنمایی: برای هر دکمه یک عدد در حافظه نگه ندار! از dataset یا textContent استفاده کن.

//پاسخ تمرین: 4
const buttons = document.querySelectorAll('.likeBtn');
buttons.forEach((button)=>{
    const spanNum = button.querySelector ('span');
    let currentNumber = Number (spanNum.textContent);
    button.addEventListener('click', ()=>{
        currentNumber++;
        spanNum.textContent = currentNumber;

    })
})

// const likeBtn1 = document.querySelectorAll ('.likeBtn');
// console.log(likeBtn1);
// likeBtn1.forEach((btn)=>{
// btn.addEventListener('click', ()=>{
// const span = btn.querySelector ('span');
// let currentLikes = Number(span.textContent);
// currentLikes++;
// span.textContent = currentLikes;
// })
// })

// --- تمرین ۵: مدیریت وضعیت پیشرفته با LocalStorage ---
// سناریو: می‌خواهیم تنظیمات کاربر را ذخیره کنیم.
// ۱. یک شیء (Object) بساز شامل: { theme: 'dark', fontSize: '16px', notifications: true }
// ۲. این شیء را در LocalStorage ذخیره کن.
// ۳. تابعی بنویس که این شیء را بخواند و بر اساس آن، استایل‌های body را در بدو ورود کاربر تنظیم کند.
// راهنمایی: یادت باشد که برای ذخیره شیء باید از JSON.stringify استفاده کنی.

//پاسخ تمرین: 5
const userSettings = { theme: 'dark', fontSize: '14px', notifications: true };
const showSavedSettings = document.querySelector('.savedSettings');

localStorage.setItem('setting', JSON.stringify(userSettings));

const applySettings = ()=> {
    const savedSettings = JSON.parse(localStorage.getItem('setting'));
    showSavedSettings.textContent = localStorage.getItem('setting');
    if (savedSettings.theme === 'dark'){
        document.body.style.backgroundColor = '#2f2c77';
        document.body.style.color = '#ffffff';
    }
    document.body.style.fontSize = savedSettings.fontSize;
}
applySettings();

// --- تمرین ۶: Event Delegation (چالش مهندسی) ---
// سناریو: یک جدول (table) با ۱۰ ردیف داری. 
// به جای اینکه برای هر ردیف یک Listener بنویسی، فقط یک Listener برای کلِ Table بنویس.
// کدی بنویس که با کلیک روی هر ردیف، رنگ پس‌زمینه "همان ردیف" تغییر کند.
// راهنمایی: از event.target برای پیدا کردن المانی که واقعاً روی آن کلیک شده استفاده کن.

//پاسخ تمرین: 6
const myTable = document.querySelector ('.styled-table');
myTable.addEventListener('click', (event)=>{
    const myRow = event.target.closest('tr');
    if(myRow){
    myRow.classList.toggle('highlight-row');
    }
})

// --- تمرین ۷: چالش نهایی - لیست وظایف با وضعیت "انجام شد" ---
// ۱. برنامه لیست وظایف (Todo) را طوری ارتقا بده که وقتی روی متنِ یک وظیفه کلیک می‌شود، 
// یک کلاس CSS به نام 'completed' به آن اضافه/حذف شود (خط خوردن متن).
// ۲. این وضعیت (که کدام آیتم انجام شده و کدام نه) باید در LocalStorage ذخیره شود تا با رفرش صفحه از بین نرود.
// راهنمایی: به جای ذخیره فقط متن در آرایه، آرایه‌ای از اشیاء ذخیره کن: [{ text: 'Learn DOM', done: true }]

//پاسخ تمرین: 7 // بار دوم
const todos = JSON.parse(localStorage.getItem('task-list')) || [
    { text: 'مطالعه جاوااسکریپت', done: false },
    { text: 'تمرین کدنویسی با کمک هوش مصنوعی', done: true },
    { text: 'تمرین و مطالعه‌ی ری‌اکت', done: true },
    { text: 'انجام پروژه‌های کوچک جاوااسکریپت', done: true },
    { text: 'انجام پروژه‌های فریلنسری', done: false },
];

const todoList = document.querySelector ('.todo-list');

const todo = ()=>{
    todoList.innerHTML = "";
    todos.forEach ((task, index)=>{
        const newLi = document.createElement ('li');
        newLi.dataset.index = index;
        newLi.textContent = task.text;
        todoList.appendChild (newLi);
         if (task.done === true){
            newLi.classList.add('completed');
         }
    })
    localStorage.setItem('task-list', JSON.stringify(todos))
}
todo();


    todoList.addEventListener ('click', (event)=>{
    const clickedItem = event.target;
    clickedItem.classList.toggle ('completed');
    const indexData = clickedItem.dataset.index;
    todos[indexData].done = !todos[indexData].done;
    todo();
}) 












// //پاسخ تمرین: 7// بار اول
// const todos = JSON.parse(localStorage.getItem('myTodoList')) || [
//     { text: 'مطالعه جاوااسکریپت', done: false },
//     { text: 'تمرین کدنویسی با کمک هوش مصنوعی', done: true },
//     { text: 'تمرین و مطالعه‌ی ری‌اکت', done: true },
//     { text: 'انجام پروژه‌های کوچک جاوااسکریپت', done: true },
//     { text: 'انجام پروژه‌های فریلنسری', done: false },
// ];
// const todoList = document.querySelector('.todo-list');

// const renderTodos = ()=>{
//     todoList.innerHTML = '';
//     todos.forEach((task, index)=>{
//         const taskLi = document.createElement ('li');
//         taskLi.textContent = task.text;
//         taskLi.dataset.index = index;
//         todoList.appendChild(taskLi);
//         if (task.done === true){
//             taskLi.classList.add('completed');
//         }
//     })

// }
// todoList.addEventListener ('click', (event)=>{
//     const clickedLi = event.target.closest ('li');
//     if (clickedLi) {
//     const index = clickedLi.dataset.index;
//     todos[index].done = !todos[index].done;
//     localStorage.setItem('myTodoList', JSON.stringify(todos));
//     renderTodos();
//     }
// })
// renderTodos();



console.log("تمرینات سطح ۲ آماده است. این‌ها پایه و اساس ری‌اکت هستند، با دقت انجامشان بده!");