var a="banana";
var s=new Promise((resolve,reject)=>{
    if (a=="banana"){
        resolve()
    }
    else{
        reject()
    }
})  
var c="raddish"
var h=new Promise((resolve,reject)=>{
    if (c=="radd"){
        resolve()
    }
    else{
        reject()
    }
})
Promise.all([s,h]).then(()=>console.log("It's matched")).catch(()=>console.log("It's not matched"))