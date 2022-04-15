var i=require("readline-sync").questionInt("Enter no:")
var org=i
var sum=0
while(i>0){
    sum=sum+(i%10)*(i%10)*(i%10)
    i=Math.floor(i/10)
    //i=parseInt(i/10)
}
if (org===sum){
    console.log("Armstrong no!")
}
else{
    console.log("not Armstrong!")
}
