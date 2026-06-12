// ==========================================
// ۱. انتخابگرهای DOM (DOM Selectors)
// ==========================================
const noteForm = document.querySelector('#note-form');
const notesGrid = document.querySelector('#notes-grid');
const emptyMessage = document.querySelector('.empty-message');

const titleInput = document.querySelector('#note-title');
const contentInput = document.querySelector('#note-content');

const titleError = document.querySelector('#title-error');
const contentError = document.querySelector('#content-error');

// ==========================================
// ۲. لایه‌ی وضعیت (State Layer)
// ==========================================
// متغیر باید let باشد تا در طول برنامه قابل تغییر و بروزرسانی باشد
let notes = JSON.parse(localStorage.getItem('notes') ?? "[]");

// ==========================================
// ۳. لایه‌ی ماندگاری داده (Persistence Layer)
// ==========================================
const saveToStorage = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
};

// ==========================================
// ۴. لایه‌ی رندر و نمایش (Render Layer)
// ==========================================
const renderNotes = () => {
    // خالی کردن باکس گرید برای جلوگیری از تکرار کارت‌ها
    notesGrid.innerHTML = "";

    // مدیریت وضعیت خالی بودن آرایه
    if (notes.length === 0) {
        notesGrid.appendChild(emptyMessage);
        return; 
    }

    // ساخت و تزریق کارت‌ها به ازای هر یادداشت
    notes.forEach((note) => {
        const card = document.createElement('div');
        card.classList.add('note-card', note.category);
        
        if (note.isImportant) {
            card.classList.add('important');
        }

        card.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <div class="note-meta">
                <span class="badge">${
                    note.category === 'work' ? 'کاری' : 
                    note.category === 'personal' ? 'شخصی' : 'ایده‌ها'
                }</span>
            </div>
        `;
        notesGrid.appendChild(card);
    });
};

// ==========================================
// ۵. لایه‌ی اعتبارسنجی فرم (Validation Layer)
// ==========================================
const validateTitle = () => {
    const value = titleInput.value.trim();
    if (value === "") {
        titleInput.classList.add('invalid');
        titleError.textContent = "⚠️ عنوان یادداشت نمی‌تواند خالی باشد.";
        return false;
    } else {
        titleInput.classList.remove('invalid');
        titleError.textContent = "";
        return true;
    }
};

const validateContent = () => {
    const value = contentInput.value.trim();
    const safePattern = /^[^<>]*$/; // جلوگیری از ورود تگ‌های مخرب HTML

    if (value === "") {
        contentInput.classList.add('invalid');
        contentError.textContent = "⚠️ محتوای یادداشت نمی‌تواند خالی باشد.";
        return false;
    } else if (!safePattern.test(value)) {
        contentInput.classList.add('invalid');
        contentError.textContent = "⚠️ کاراکترهای غیرمجاز (< یا >) کشف شد! لطفاً متن امن وارد کنید.";
        return false;
    } else {
        contentInput.classList.remove('invalid');
        contentError.textContent = "";
        return true;
    }
};

// شنود رویدادهای تایپ لحظه‌ای
titleInput.addEventListener('input', validateTitle);
contentInput.addEventListener('input', validateContent);

// ==========================================
// ۶. مدیریت ثبت فرم (Form Submission Handler)
// ==========================================
noteForm.addEventListener('submit', (event) => {
    // جلوگیری از رفرش شدن صفحه
    event.preventDefault();

    // بررسی نهایی اعتبارسنجی‌ها
    const isTitleValid = validateTitle();
    const isContentValid = validateContent();

    if (!isTitleValid || !isContentValid) {
        return; 
    }

    // استخراج اطلاعات با FormData
    const formData = new FormData(noteForm);

    const newNote = {
        id: Date.now(),
        title: formData.get('title').trim(),
        content: formData.get('content').trim(),
        category: formData.get('category'),
        isImportant: formData.get('isImportant') !== null
    };

    // ۱. تغییر وضعیت: اضافه کردن به آرایه اصلی
    notes.push(newNote);

    // ۲. ماندگاری داده: ذخیره در لوکال استوریج
    saveToStorage();

    // ۳. به‌روزرسانی رابط کاربری: رندر مجدد کارت‌ها
    renderNotes();

    // ۴. پاکسازی کامل فرم
    noteForm.reset();
});

// ==========================================
// ۷. اجرای اولیه (Initial Execution)
// ==========================================
// نمایش داده‌های قبلی به محض لود شدن صفحه
renderNotes();