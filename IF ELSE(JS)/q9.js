let readlineSync = require("readline-sync");
var num1=readlineSync.questionInt("Enter first:")
var num2=readlineSync.questionInt("Enter second:")
if (num1%num2==0){
    console.log("Divisible!")
}
else{
    console.log("Not divisible!")
}