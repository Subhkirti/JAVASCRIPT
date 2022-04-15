function even(limit){
    for(i=0;i<=limit;i++){
        if (i%2==0){
            console.log(i+" "+"Even no")
        }
        else{
            console.log(i+" "+"Odd no")
        }
    }
}
even(require("readline-sync").questionInt("Enter your limit:"))
