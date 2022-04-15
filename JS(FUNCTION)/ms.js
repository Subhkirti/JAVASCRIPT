function square(user){
var i=1;
var dic={}
while (i<=user){
    dic[i]=i*i
    i++
}
return dic
}
console.log(square(require("readline-sync").questionInt("Enter your no:")))