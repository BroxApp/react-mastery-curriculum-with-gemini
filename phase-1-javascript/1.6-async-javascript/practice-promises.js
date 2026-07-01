// const userObject = {id: 1, name: 'Brox'};

// const fetchUserData = (isSuccess)=>{

// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if (isSuccess){
//            resolve(userObject);
//         }else{
//             reject("User Not Found");
//         }
//     }, 2000)
// })
// }

// fetchUserData(false)
// .then((data)=>console.log("Success:", data))
// .catch((error)=>console.log("Error:", error))
// .finally(()=>console.log("Did it."))


const checkBalance =(balance)=>{
return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        if(balance>1000){
            resolve("پرداخت با موفقیت انجام شد.");
        }else{
            reject("خطا: موجودی کافی نیست.")
        }
    }, 1500)
})
}

checkBalance(500)
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
.finally(()=>console.log("موفق باشی"))

checkBalance(1500)
.then((data)=>console.log(data))
.catch((error)=>console.log(error))
.finally(()=>console.log("موفق باشی"))