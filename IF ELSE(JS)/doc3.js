var num=require("readline-sync").questionInt("Enter your first number:")
if (num%5==0 && num%11==0){
    console.log("Divisible by Both!")
}
else{
    console.log("Not Divisible!!")
}