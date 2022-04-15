dic={}
for (i=0;i<=2;i++){
    var name=require("readline-sync").question("Enter your name:")
    var age=require("readline-sync").questionInt("Enter your age:")
    dic[name]=age
}
console.log(dic)