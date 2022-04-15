var num=require("readline-sync").questionInt("Enter a no.:")
var i=num;
var sum=0;
while (i!=0){
    digit=i%10
    sum=sum+digit
    i=Math.floor(sum/10)
}
if (num%sum==0){
    console.log(num+" "+"harshad no")
}
else{
    console.log(num+" "+" not  harshad")
}

// var i=1;
// var c=0;
// while (i<=100){
//     var b=i
//     var sum=0
//     while (b>0){
//         var c=b%10;
//         sum+=c
//         b=Math.floor(b/10)
//     }
//     if (i%sum==0){
//         console.log(i+" "+"Harshad no")
//     }
//     i++
// }
