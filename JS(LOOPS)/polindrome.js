var name=require("readline-sync").question("Enter :")
name1=name
s=""
for (i=name1.length-1;i>=0;i--){
    s=s+name[i]}

if(s==name){
    console.log(name,"is Polindrome")
}
else{
    console.log(name,"is NOT Polindrome")
}
