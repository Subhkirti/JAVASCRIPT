function max_len(num1,num2){
    if (num1.length>num2.length){
        console.log(num1)
    }
    else if (num1.length<num2.length){
        console.log(num2)
    }
    else{
        console.log(num1,num2)
    }
}
max_len(require("readline-sync").question("Enter:"),require("readline-sync").question("Enter:"))