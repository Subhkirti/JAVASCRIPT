function even_odd(num1,num2){
    if (num1%2==0 && num2%2==0){
        console.log("Both are even!!")
    }
    else{
        console.log("Not even!!")
    }
}
even_odd(require("readline-sync").questionInt("Enter first no:"),require("readline-sync").questionInt("Enter second no:"))