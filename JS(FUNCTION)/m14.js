function even_odd(num1){
    if (num1>=18){
        console.log("Eligible for vote!!")
    }
    else{
        console.log("Not elegible!!")
    }
}
even_odd(require("readline-sync").questionInt("Enter your age:"))