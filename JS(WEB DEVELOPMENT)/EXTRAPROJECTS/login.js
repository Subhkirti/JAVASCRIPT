function save(){
    var a = document.getElementById("content1").value
    var b = document.getElementById("content2").value
    var u=0;
    var l=0;
    var d=0;
    var s=0;
    for (i of b){
        if (i.toUpperCase()){
            u=1
        }
        if (i.toLowerCase()){
            l=1
        }
        if (i==="0" || i==="1"|| i==="2" || i==="3" || i==="4" || i==="5" || i==="6" || i==="7" || i==="8" || i==="9")
            d=1
        }
        if (b.includes("@") || b.includes("%") || b.includes("#") || b.includes("&") || b.includes(".") || b.includes("&")|| b.includes("*")|| b.includes("^")){
            s=1
        }
    var total=u+l+d+s
    if (a==="") {
        alert("Username must be given!")
    }
    if (b==="") {
        alert("Password must be given!")
    }
    if (total!=4){
        alert("Password should contain atleast one Uppercase, lowercase, digit and speacial Character!!")
    }
    else if (a !="") {
        if (b !="") {
            if(total===4){
            swal(a + " You are Login Succesfully!")
            }
        }
    }
}