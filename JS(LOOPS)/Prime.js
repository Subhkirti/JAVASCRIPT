var n=require("readline-sync").questionInt("Enter your no:")
var c=0;
var i=1;
while (i<=n){
    if (n%i==0){
        c++
    }
    i++
}
if (c==2){
    console.log(n+" "+"Prime no!")
}
else{
    console.log(n+" "+"Not prime no!")
}


