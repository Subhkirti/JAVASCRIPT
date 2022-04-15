setInterval(start,1000)
function start(){
    var h=00;
    var m=00;
    var s=00;
    var f=document.getElementById("digits").innerHTML
    for (i=0;true;i++){
        f=(s+=i)
        console.log(f)
    }
}
