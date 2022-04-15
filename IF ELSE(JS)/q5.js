let readlineSync = require("readline-sync");
var num1 = 300 - 123
var number=readlineSync.questionInt("Enter:")

if (number==num1){
    console.log("Equal!")
}
else{
    console.log("Not equal!")
}