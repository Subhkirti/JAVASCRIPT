function even(limit){
    for(i=0;i<=limit;i++){
        if (i%3==0 || i%5==0){
            console.log(i)
        }

    }
}
even(require("readline-sync").questionInt("Enter your limit:"))
