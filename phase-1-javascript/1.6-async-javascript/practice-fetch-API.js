const url = "https://jsonplaceholder.typicode.com/users/1";

async function fetchRealUser(){
    try{
        const response = await fetch(url);
        if (!response.ok)throw new Error ("مشکل در دریافت داده!");
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
}
fetchRealUser();