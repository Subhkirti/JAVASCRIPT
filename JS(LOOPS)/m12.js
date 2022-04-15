sum=0
for(i=50;i>=40;i--){
    var num=require("readline-sync").questionInt("Enter the no:")
    sum=sum+num
}
console.log(sum)