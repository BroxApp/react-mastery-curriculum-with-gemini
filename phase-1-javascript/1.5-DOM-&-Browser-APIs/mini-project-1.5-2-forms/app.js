let notes = [];

const form = document.querySelector ('.noteForm');
const title = document.querySelector ('.title');
const content = document.querySelector ('.content');
const titleError = document.querySelector ('.title-error');
const contentError = document.querySelector ('.content-error');
const cardsContainers = document.querySelector ('.note-cards');
const forbiddenChars = /[<>{}]/;

const renderNotes = ()=>{
    cardsContainers.innerHTML = "";

    notes.forEach((note)=>{
        const card = document.createElement('div');
        card.classList.add('note-card');
        card.innerHTML = `
        <h3>${note.title}</h3>
        <span>${note.category}</span>
        <p>${note.content}</p>
        `;
        cardsContainers.appendChild(card);
    })

}

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
    if (titleError.textContent === "" && contentError.textContent === ""){
        const isImportant = checkbox === 'on';
        const newNote = {
            id : Date.now(),
            title : title,
            content : content,
            category : category,
            isImportant : isImportant
        }
       notes.push(newNote);
       form.reset();
       renderNotes();
    }
})

title.addEventListener ('input', ()=>{
    if (title.value.trim()=== ""){
        titleError.textContent = 'Title Cannot Be Impty';
    }else{
        titleError.textContent = '';
    }
})

content.addEventListener ('input', ()=>{
    if (content.value.trim()==="" || forbiddenChars.test(content)){
        contentError.textContent = 'This Content Is Invalid';
    }else{
        contentError.textContent = '';
    }
})

const seveToStorage = ()=>{
    localStorage.setItem('notes',JSON.stringify(notes));
}

const loadFromStorage = ()=>{
    const saved = localStorage.getItem('notes');
    notes = saved ? JSON.parse (saved) : [];
}

