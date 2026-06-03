// 1. Selection: شکار کردن المان‌ها
const title = document.querySelector('#main-title');
const themeBtn = document.querySelector('#theme-btn');
const body = document.body;

const addBtn = document.querySelector('#add-btn');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');

// 2. Logic: تابعی برای تغییر وضعیت
function handleInteractions() {
    // تغییر متن
    title.textContent = "DOM is under control! 🚀";
    
    // استفاده از کلاس به جای استایل مستقیم برای مدیریت بهتر در CSS
    title.classList.toggle('highlight-text');
    body.classList.toggle('dark-theme');
    
    console.log("Button was clicked and DOM updated.");
}

// اصلاح غلط املایی و نام‌گذاری استاندارد
function updateButtonOnHover() {
    themeBtn.textContent = "Ready?";
}
function resetButtonText() {
    themeBtn.textContent = "Toggle Theme";
}

// --- بخش جدید: ساخت المان‌های داینامیک ---
function createListItem(text) {
    const li = document.createElement('li');
    li.className = 'list-item';
    
    // استفاده از Text Node برای جدا نگه داشتن متن از دکمه
    const textNode = document.createTextNode(text);
    li.appendChild(textNode);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    deleteBtn.onclick = () => {
        li.remove();
        saveToLocalStorage(); // ذخیره تغییرات بعد از حذف
    };

    li.appendChild(deleteBtn);
    return li;
}

function saveToLocalStorage() {
    const items = [];
    document.querySelectorAll('.list-item').forEach(li => {
        // برداشتن متن از گره اول (textNode)
        items.push(li.childNodes[0].textContent);
    });
    localStorage.setItem('myTodoList', JSON.stringify(items));
}

function loadFromLocalStorage() {
    const savedItems = JSON.parse(localStorage.getItem('myTodoList') || '[]');
    savedItems.forEach(text => {
        const li = createListItem(text);
        itemList.appendChild(li);
    });
}

function addNewItem() {
    const value = itemInput.value.trim();
    if (value === "") return;

    const li = createListItem(value);
    itemList.appendChild(li);

    saveToLocalStorage(); // ذخیره آیتم جدید در حافظه
    itemInput.value = "";
}

// 3. Event Listener: گوش دادن به کاربر
themeBtn.addEventListener('click', handleInteractions);
themeBtn.addEventListener('mouseenter', updateButtonOnHover);
themeBtn.addEventListener('mouseleave', resetButtonText);
addBtn.addEventListener('click', addNewItem);

// گوش دادن به کلیدهای کیبورد داخل اینپوت
itemInput.addEventListener('keydown', (event) => {
    // اگر کلید فشار داده شده Enter بود
    if (event.key === 'Enter') {
        addNewItem(); // همان تابعی که آیتم می‌سازد را صدا بزن
    }
});

// لود کردن داده‌ها هنگام بالا آمدن صفحه
loadFromLocalStorage();

// Task for Brox: سعی کن یک Event Listener از نوع 'mouseenter' هم اضافه کنی.