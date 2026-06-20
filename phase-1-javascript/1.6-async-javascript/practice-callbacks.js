//سوال اول
function greetUser (username, callback){
setTimeout(()=>{
console.log(username);
callback();
}, 1000)
}
greetUser('Ahmad', userAge);
function userAge (){
    console.log('is 42');
}

//سوال دوم
function greeting(callback){
    callback();
}
greeting(greetingCompleted);

function greetingCompleted(){
    console.log("Greeting Completed");
}

//سوال سوم
function calculate(callback){
    setTimeout(()=>{
        callback(3, 5);
    }, 500)
}
calculate(sum);
calculate(multiply);


function sum(a, b){
console.log(a + b);
}

function multiply(a, b){
console.log(a * b);
}