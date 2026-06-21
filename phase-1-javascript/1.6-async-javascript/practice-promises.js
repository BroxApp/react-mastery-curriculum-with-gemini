// ۱. تعریف تابع fetchUserData
function fetchUserData(isSuccess) {
    return new Promise((resolve, reject) => {
        // شبیه‌سازی تأخیر ۲ ثانیه‌ای (۲۰۰۰ میلی‌ثانیه)
        setTimeout(() => {
            if (isSuccess) {
                // در صورت true بودن، آبجکت کاربر فرستاده می‌شود
                resolve({ id: 1, name: 'Brox' });
            } else {
                // در صورت false بودن، خطا فرستاده می‌شود
                reject("User not found");
            }
        }, 2000);
    });
}

// ۲. فراخوانی تابع و مدیریت آن با then و catch

// حالت اول: پاس دادن مقدار true (موفقیت‌آمیز)
fetchUserData(true)
    .then((data) => {
        console.log("داده کاربر با موفقیت دریافت شد:", data);
    })
    .catch((error) => {
        console.error("خطا:", error);
    })
    .finally(() => {
        console.log("درخواست اول خاتمه یافت.");
    });

// حالت دوم: پاس دادن مقدار false (رخداد خطا)
fetchUserData(false)
    .then((data) => {
        console.log("داده کاربر:", data);
    })
    .catch((error) => {
        console.error("خطا:", error); // این بخش اجرا می‌شود
    })
    .finally(() => {
        console.log("درخواست دوم خاتمه یافت.");
    });