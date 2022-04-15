var char=require("readline-sync").question("Enter your character:")
if(char>="A" && char<="Z"){
    console.log("Uppercase!")
}
else if (char>="a" && char<="z"){
    console.log("Lowercase!")
}