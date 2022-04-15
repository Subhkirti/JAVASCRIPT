let readlineSync = require("readline-sync");
var num1 = 44*30
var num2=readlineSync.questionInt("Enter your number:")
if (num1>=num2){
    console.log("number1 is greater than and equal to!")
}
else{
    console.log("number1 is less than and equal to!")
}