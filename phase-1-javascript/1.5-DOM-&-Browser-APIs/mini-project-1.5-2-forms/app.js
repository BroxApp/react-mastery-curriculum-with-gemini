let notes = [];

const form = document.querySelector ('.noteForm');
const titleError = document.querySelector ('.title-error');
const contentError = document.querySelector ('.content-error');
const forbiddenChars = /[<>{}]/;

form.addEventListener ('submit', (event)=>{
    event.preventDefault ();

    const formData = new FormData (form);
    const title = formData.get ('title');
    if (title.trim()=== ""){
        titleError.textContent = 'Title Cannot Be Impty';
    }else{
        titleError.textContent = '';
    }
    const content = formData.get ('content');
    if (content.trim()==="" || forbiddenChars.test(content)){
        contentError.textContent = 'This Content Is Invalid';
    }else{
        contentError.textContent = '';
    }
    const category = formData.get ('category');
    const checkbox = formData.get ('checkbox');
})

const seveToStorage = ()=>{
    localStorage.setItem('notes',JSON.stringify(notes));
}

const loadFromStorage = ()=>{
    const saved = localStorage.getItem('notes');
    notes = saved ? JSON.parse (saved) : [];
}

