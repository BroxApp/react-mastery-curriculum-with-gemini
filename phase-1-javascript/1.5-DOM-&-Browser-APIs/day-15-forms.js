//تمرین اول بخش فرم‌ها
// یک فرم ساده شامل یک input متن و یک دکمه submit بساز.
// با استفاده از addEventListener برای submit فرم، از event.preventDefault() استفاده کن تا صفحه ریلود نشود.
// سعی کن مقدار تایپ شده در اینپوت را در کنسول لاگ کنی.
// سپس سعی کن یک ولیدیشن ساده اضافه کنی: اگر طول متن کمتر از ۳ کاراکتر بود، یک پیام خطا در صفحه نمایش بده (بدون ریلود).

// پاسخ تمرین اول بخش فرم‌ها
const myForm = document.querySelector ('#myForm');
const formErrorMessage = document.querySelector ('#formErrorMessage');

myForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    formErrorMessage.textContent = "";
    const formData = new FormData (myForm);

    for (const [name, value] of formData.entries()){

        if (value.length < 3 && name!== 'checkbox' && name !== 'selectbox'){
            formErrorMessage.textContent = 'Your text is too short.';
            console.log(formErrorMessage.innerHTML);
            break;
        }else{
            console.log(name, value);
        }
    }
})

// تمرین دوم: از بخش مفاهیم پیشرفته‌ی فرم
//۱. فایل day-15-forms.html را باز کن و به هر کدام از اینپوت‌ها ویژگی name (با همان مقدارِ id) اضافه کن.  
//۲. در فایل day-15-forms.js، با استفاده از new FormData(myForm)، داده‌ها را استخراج کن. 
//۳. به جای لاگ کردنِ تک‌تکِ مقادیر، سعی کن با استفاده از متد formData.entries() و یک حلقه for...of یا forEach روی تمامِ فیلدهای فرم پیمایش کنی و آن‌ها را در کنسول چاپ کنی.

// // پاسخ تمرین دوم
// const myForm = document.querySelector ('#myForm');
// myForm.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     const formData = new FormData (myForm);
//     for (const [name, value] of formData.entries()){
//         console.log(name, value);
//     };
// })
