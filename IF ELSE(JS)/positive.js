var user=require('readline-sync').questionInt("Enter no:")
switch (user>0){
    case false:
        console.log("Negative");
        break
    case true:
        console.log("positive");
        break
}