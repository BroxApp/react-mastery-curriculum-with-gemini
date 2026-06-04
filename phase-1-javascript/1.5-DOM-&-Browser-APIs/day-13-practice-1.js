/**
 * 📝 تمرینات روز سیزدهم - فاز ۱.۵ (DOM & Browser APIs)
 * هدف: تسلط بر انتخاب المان‌ها، رویدادها، تغییر در ساختار DOM و ذخیره‌سازی.
 */

// --- تمرین ۱: انتخاب و تغییر متن (Selection & Text) ---
// ۱. یک المان h1 در HTML با آی‌دی 'header' فرض کن.
// ۲. آن را با querySelector انتخاب کن.
// ۳. متنی که داخل آن است را به "Hello Engineering World!" تغییر بده.
// راهنمایی: از ویژگی .textContent استفاده کن.

//پاسخ تمرین شماره‌ی: 1
const h1 = document.querySelector (".header");
h1.textContent = "Hello Engineering World!"

// --- تمرین ۲: مدیریت رویداد کلیک (Click Event) ---
// ۱. یک دکمه (button) انتخاب کن.
// ۲. یک Event Listener اضافه کن که با کلیک روی آن، رنگ پس‌زمینه (body) را به "cyan" تغییر دهد.
// راهنمایی: document.body.style.backgroundColor

//پاسخ تمرین شماره‌ی: 2
const changeColorBtn = document.querySelector ("button");
changeColorBtn.addEventListener ("click", ()=>{
document.body.style.background = "cyan";
})

// --- تمرین ۳: کلاس‌ها و هوور (Class Toggle & Mouse Events) ---
// ۱. دکمه‌ای را انتخاب کن.
// ۲. وقتی موس روی دکمه می‌رود (mouseenter)، کلاس 'active' را به آن اضافه کن.
// ۳. وقتی موس از روی آن خارج می‌شود (mouseleave)، کلاس 'active' را حذف کن.
// راهنمایی: از element.classList.add و .remove استفاده کن.

//پاسخ تمرین شماره‌ی: 3
const activeBtn = document.querySelector (".no-active-btn");
activeBtn.addEventListener ("mouseenter", ()=>{
activeBtn.classList.add ("active");
activeBtn.textContent = "I am Active now !!!";
});
activeBtn.addEventListener ("mouseleave", ()=>{
activeBtn.classList.remove ("active");
activeBtn.textContent = "I am not Active !";
});

// --- تمرین ۴: ساخت المان جدید (DOM Manipulation) ---
// ۱. یک لیست خالی (ul) در HTML داری.
// ۲. تابعی بنویس که یک متن بگیرد، یک li جدید بسازد، متن را داخل آن بگذارد و به ul اضافه کند.
// راهنمایی: document.createElement('li') و parent.appendChild(child)

//پاسخ تمرین شماره‌ی: 4
const input = document.querySelector ("input");
const ul = document.querySelector ("ul");
const ulBtn = document.querySelector ("#ulBtn");

function addTextToList (){
    const newText = input.value;
    const newLi = document.createElement ('li');
    newLi.textContent = newText;
    ul.appendChild (newLi);
    input.value = "";
}
ulBtn.addEventListener ('click', ()=>{
    addTextToList();
})


// --- تمرین ۵: کار با کیبورد (Keyboard Events) ---
// ۱. یک Input داری.
// ۲. کدی بنویس که وقتی کاربر کلید "Escape" را فشار داد، محتوای داخل Input پاک شود.
// راهنمایی: از ایونت 'keydown' استفاده کن و چک کن event.key === 'Escape' باشد.

//پاسخ تمرین شماره‌ی: 5
const newInput = document.querySelector ('.newInput');
document.addEventListener ("keydown", ()=>{
    if (event.key === 'Escape'){
        newInput.value = "";
    }
})

// --- تمرین ۶: ذخیره‌سازی ساده (LocalStorage) ---
// ۱. مقدار "Brox" را با کلید "username" در LocalStorage ذخیره کن.
// ۲. سپس آن را بخوان و در کنسول نمایش بده.
// راهنمایی: localStorage.setItem و localStorage.getItem

//پاسخ تمرین شماره‌ی: 6
const localStoraegInput = document.querySelector (".localStorage");
localStorage.setItem ("username", "Brox");
console.log(localStorage.getItem ("username"));
localStoraegInput.textContent = localStorage.getItem ("username");

// --- تمرین ۷: چالش نهایی (ترکیبی) ---
// ۱. تابعی بنویس که هر بار دکمه‌ای زده شد، ساعت فعلی سیستم را بگیرد و به لیست (ul) اضافه کند.
// ۲. همچنین لیست ساعت‌ها را در یک آرایه در LocalStorage ذخیره کند که با رفرش صفحه پاک نشود.
// راهنمایی: 
// - برای ساعت: new Date().toLocaleTimeString()
// - برای ذخیره آرایه: JSON.stringify(myArray)

//پاسخ تمرین شماره‌ی: 7
// اگر داده‌ای از قبل بود آن را به آرایه تبدیل کن، در غیر این صورت یک آرایه خالی بساز
let timeList = JSON.parse(localStorage.getItem('savedTimes')) || [];
const myTime = new Date().toLocaleTimeString();
const currentTime = document.querySelector ('.currentTime');
const currentTimeUl = document.querySelector ('.currentTimeUl');
const addTimeBtn = document.querySelector ('.addTimeBtn');

function addCurrentTimeToUl(timeText){
    const newLi = document.createElement ('li');
    newLi.textContent = timeText;
    currentTimeUl.appendChild (newLi);

}

addTimeBtn.addEventListener('click', () => {
    // ۱. گرفتن زمان دقیق لحظه کلیک
    const newTime = new Date().toLocaleTimeString();
    
    // ۲. اضافه کردن به آرایه
    timeList.push(newTime);
    
    // ۳. ذخیره آرایه به‌روز شده در لوکال استوریج
    localStorage.setItem('savedTimes', JSON.stringify(timeList));
    
    // ۴. نمایش در UI
    addCurrentTimeToUl(newTime);
});

// پیمایش روی زمان‌های ذخیره شده قبلی و نمایش آن‌ها در صفحه
timeList.forEach(time => {
    addCurrentTimeToUl(time);
});
console.log("تمرینات آماده است. موفق باشی برآکس!");