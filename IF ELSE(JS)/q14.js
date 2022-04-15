let readlineSync = require("readline-sync");
var number=readlineSync.questionInt("Enter :")

if(number%3==0 && number%7==0){
    console.log("chocolate")
}
else if(number%7==0){
    console.log("late")
}
else if(nnumber%3==0) {
    console.log("Choco")
} 
else{
    console.log("Not divisible by 3 , 7")
}