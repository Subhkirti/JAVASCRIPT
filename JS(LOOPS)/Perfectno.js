var a=require("readline-sync").questionInt("Enter no:")
var i=1;
var sum=0;
while(i<a){
    if (a%i==0){
        sum+=i
    }
    i++
}
if (sum==a){
    console.log(i+" "+"is perfect no!")
}
else{
    console.log(i+" "+"is not perfectno!")
}
