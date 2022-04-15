var day=require("readline-sync").question("Enter your day:")
var meal=require("readline-sync").question("Enter your meal time:")
if (day=="Monday" || day=="monday"){
    if (meal=="Breakfast" || meal=="breakfast"){
        console.log("Pasta")
    }
    else if(meal=="Lunch" || meal=="lunch"){
        console.log("Pulao")
    }
    else{
        console.log("Rajmah chawal")
    }
}
else{
    if (meal=="Breakfast" || meal=="breakfast"){
        console.log("Maggie")
    }
    else if(meal=="Lunch" || meal=="lunch"){
        console.log("Daal Roti")
    }
    else{
        console.log("Cholle Chawal")
    }
    
}
