var char=require("readline-sync").question("Enter your character:")
if (char>="A" && char<="Z" || char>="a" && char<="z"){
    console.log("Character!")
}
else if(char>="0" && char<="9"){
    console.log("Digit!")
}
else{
    console.log("Special Character!")
}