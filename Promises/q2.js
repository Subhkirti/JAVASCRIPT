function a(b){
    return new Promise(function(resolve,reject){
    if (b){
        resolve()
    }
    else{
        reject()
    }
});
}
a(false).then(()=>console.log("I am reolved")).catch(()=>console.log("I am rejected"))