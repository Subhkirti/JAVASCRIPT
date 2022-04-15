// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code. 
var b=false;
const a=new Promise(function(resolve,reject){
    if (b){
        resolve()
    }
    else{
        reject()
    }
}
)
a.then(()=>console.log("I am resolve")).catch(()=>console.log("I am not resolved"))
