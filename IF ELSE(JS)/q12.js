let readlineSync = require("readline-sync");
var age=readlineSync.questionInt("Enter :")
if (age>5){
    console.log("He can go to school!")
}
if (age>18){
    console.log("He can vote!")
}
if (age>21){
    console.log("He can drive!")
}
if (age>24){
    console.log("He can marry!")
}
if (age>25){
    console.log("He can legally drink!")
}