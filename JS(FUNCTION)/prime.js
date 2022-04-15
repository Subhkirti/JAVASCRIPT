var n=require("readline-sync").questionInt("Enter your no:")
i=1
c=0
while (i<=n){
    if (n%i==0){
        c+=1
    i+=1
    }
}
if (c==2){
    console.log("It is prime no")}
else{
    console.log("not prime no")
}


