var year=require("readline-sync").questionInt("Enter your year:")
if (year%4==0){
    console.log("Leap Year!")
}
else{
    console.log("Not leap year!")
}