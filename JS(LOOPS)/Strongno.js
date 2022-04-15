var n=require("readline-sync").questionInt("Enter no:")
var a=n;
var sum=0;
while(n>0){
    var i=1;
    var f=1;
    var b=n%10
while(i<=b){

    f=f*i
    i++
}
sum=sum+f
n=parseInt(n/10)
}
if (a==sum){
    console.log(a+" "+"Strong no!")
}
else{
    console.log(a+" "+"Not Strong no!")
}

