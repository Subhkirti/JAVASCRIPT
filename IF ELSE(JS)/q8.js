let readlineSync = require("readline-sync");
var varx=readlineSync.questionInt("enter number:")
if (varx%2==0){
    console.log("Divisible!")
}
else{
    console.log("Not divisible!")
}