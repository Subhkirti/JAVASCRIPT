function myname(s){
    console.log(s)
}
var computer=new Promise(function(resolve,reject){
    let a=2;
    if(a==2){
        resolve("Nice one!!")
    }
    else{
        reject("Bad one!!")
    }
})
computer.then(
    function(right){myname(right)},
    function(wrong){myname(wrong)}

        )
    // .catch(
    // function(wrong){myname(wrong)}
    //     )
