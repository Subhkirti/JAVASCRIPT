var sum=0
for (i=1;i<=10;i++){
    num=require("readline-sync").questionInt("Enter your no:")
    sum=sum+num
}
console.log(sum)