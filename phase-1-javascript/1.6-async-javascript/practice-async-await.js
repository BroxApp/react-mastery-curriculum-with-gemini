//سیستم دریافت اطلاعات کاربر از دیتابیس
const getUserById = (id)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (id === 1){
                resolve({ id: 1, name: "Brox", role: "Frontend Engineer" });
            }else{
                reject("Error: User not found")
            }
        }, 2000)
    })
}

async function displayUserProfile (id) {
    try{
        console.log('Fetching data ...');
        const result = await getUserById (id);
        console.log (`Result: ${result.name}, ${result.role}`)
    }catch(error){
        console.log(error)
    }
}

displayUserProfile(1);
displayUserProfile(2);