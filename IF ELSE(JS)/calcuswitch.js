num1=require("readline-sync").questionInt("Enter first no:")
num2=require("readline-sync").questionInt("Enter second no:")
operator=require("readline-sync").question("Enter operator:")
switch(operator){
    case "+":
        console.log(num1+num2)
        break
    case "-":
        console.log(num1-num2)
        break
    case "*":
        console.log(num1*num2)
        break
    case "/":
        console.log(num1/num2)
        break
}


