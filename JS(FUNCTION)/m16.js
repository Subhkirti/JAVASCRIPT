function average(num1,num2,num3){
    
    var sum=num1+num2+num3
    var average=Math.floor(sum/3)
    console.log(average)
}
average(require("readline-sync").questionInt("Enter First no:"),require("readline-sync").questionInt("Enter second no:"),require("readline-sync").questionInt("Enter third no:"))