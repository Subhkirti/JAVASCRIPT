let readlineSync = require("readline-sync");
var water=readlineSync.questionInt("Enter your number:")
if (water<1){
     console.log("More water need to be fill!")
}
else if(water >1 && water<=10){
    console.log("There is no need to fill water.")
}
else if(water>10){
    console.log("Water is overflow")
}