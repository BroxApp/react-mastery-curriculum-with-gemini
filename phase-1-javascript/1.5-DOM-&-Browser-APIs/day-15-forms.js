//تمرین اول بخش فرم‌ها
// یک فرم ساده شامل یک input متن و یک دکمه submit بساز.
// با استفاده از addEventListener برای submit فرم، از event.preventDefault() استفاده کن تا صفحه ریلود نشود.
// سعی کن مقدار تایپ شده در اینپوت را در کنسول لاگ کنی.
// سپس سعی کن یک ولیدیشن ساده اضافه کنی: اگر طول متن کمتر از ۳ کاراکتر بود، یک پیام خطا در صفحه نمایش بده (بدون ریلود).

//پاسخ تمرین اول بخش فرم‌ها
const myForm = document.querySelector ('#myForm');
const firstName = document.querySelector ('#firstName');
const lastName = document.querySelector ('#lastName');
const skill = document.querySelector ('#skill');
const submit = document.querySelector ('#submit');
const formErrorMessage = document.querySelector ('#formErrorMessage');

myForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    const skillValue = skill.value;

    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(skillValue);
    
    if (firstNameValue.length < 3 || lastNameValue.length < 3 || skillValue.length < 3){
        formErrorMessage.textContent = 'Your text is too short.';
        console.log(formErrorMessage.innerHTML);

    }else{
        formErrorMessage.textContent = "";
    }
})