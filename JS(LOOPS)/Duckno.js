var num=require("readline-sync").question('Enter no:')
var a="0";
var i=0;
while (i<num.length){
    if (num.includes(a) && num[0]!=a){
        console.log(num+" "+"Duck no!")
        break
    }
    else{
        console.log(num+" "+"Not Duck no!")
        break
    }
    i++
}
