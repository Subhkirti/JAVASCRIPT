let readlineSync = require("readline-sync");
var num1=readlineSync.questionInt("Enter first:")
var num2=readlineSync.questionInt("Enter second:")
if (num1>num2){
    console.log("Number1 is greater than!")
}
else{
    console.log("number2 is greater!")
}
