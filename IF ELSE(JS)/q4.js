let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("Enter:")
if (number<10){
    console.log("Number is less than 10!")
}
else if(number>=10 && number<20){
    console.log("Number is greater than 10 and number is less than 20!")
}
else{
    console.log("Number is not less than 20!")
}

console.log(number);