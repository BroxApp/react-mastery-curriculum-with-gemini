// ۱. المان‌های اصلی ساختار صفحه
const noteForm = document.querySelector('#note-form');
const notesGrid = document.querySelector('#notes-grid');
const emptyMessage = document.querySelector('.empty-message');

// ۲. فیلدهای ورودی (برای اعتبارسنجی لحظه‌ای)
const titleInput = document.querySelector('#note-title');
const contentInput = document.querySelector('#note-content');

// ۳. باکس‌های نمایش خطا
const titleError = document.querySelector('#title-error');
const contentError = document.querySelector('#content-error');

