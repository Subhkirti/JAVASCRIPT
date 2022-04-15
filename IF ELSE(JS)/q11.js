let readlineSync = require("readline-sync");
var num1=readlineSync.questionInt("Enter :")
if (num1%5==0 && num1%15==0){
    console.log("it is divisible by both!")
}
else{
    console.log("It is not divisible by both!")}
