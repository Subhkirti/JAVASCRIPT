function login(){
    var a=document.getElementById("input1").value
    var b=document.getElementById("input2").value
    if (a===""){
        alert("You have must write Username!")
    }
    if (b===""){
        alert("You have must write Password!")
    }
    else{
        var d=document.createElement("button")
        d.innerHTML="You are Login Succesfully!!"
        document.getElementById("imp").innerHTML=d
        
    }
}