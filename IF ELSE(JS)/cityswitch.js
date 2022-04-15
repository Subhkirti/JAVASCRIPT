console.log("delhi/agra/jaipur:-  these are the cities")
var city=require("readline-sync").question("Enter your city:")
switch(city){
    case "delhi":
        console.log("Red Fort")
        break
    case "agra":
        console.log("Taj Mahal")
        break
    case "jaipur":
        console.log("Jal Mahal")
        break
}
