// Initialize logic here
console.log("Random User Explorer Loaded!");
const url = "https://randomuser.me/api/?results=5";
const gridContainer = document.querySelector(".grid-container");
const userBtn = document.querySelector(".fetchRandomUsers");

async function fetchRandomUsers(){
    try{
        const response =await fetch(url);
        if(!response.ok){
            throw new Error ('خطا در دریافت اطلاعات از سرور!');
        }
        const data = await response.json();
        renderUsers(data.results);
    }catch(error){
        console.log(error);
    }
}

const renderUsers =(usersData)=>{
    gridContainer.innerHTML="";
    const users = usersData;
    users.forEach((user)=>{
        const userDiv = document.createElement ('div');
        userDiv.classList.add('user-card');
        userDiv.innerHTML= `
    <img src="${user.picture.medium}" alt="user image">
    <h3>${user.name.first} ${user.name.last}</h3>
    <p>${user.email}</p>
    `;
        gridContainer.appendChild(userDiv);
    })
}


userBtn.addEventListener('click', ()=>{
fetchRandomUsers();
})