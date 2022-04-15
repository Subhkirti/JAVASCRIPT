var char=require("readline-sync").question("Enter your character:")
if (char>="A" && char<="Z"){
    console.log("It is an Alphabet!")}
else{
    console.log("It is a digit!")}