var num1=require("readline-sync").questionInt("Enter your first number:")
var num2=require("readline-sync").questionInt("Enter your second number")
if (num1>=num2){
    console.log("Number1 is maximum!!")
}
else{
    console.log("Number2 is maximum!!")
}