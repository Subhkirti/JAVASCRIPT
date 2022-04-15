function table(num){
    var i=1;
    while (i<=num){
        var j=1
            while (j<=10){
                console.log(i+"*"+j+"="+i*j)
                j++
            }
        i++
        
    }
}
table(require("readline-sync").questionInt("Enter the no:"))

        