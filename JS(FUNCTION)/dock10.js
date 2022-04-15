function weird_number(num){
    var n=list(num)
    if (n[-1]=="0"){
        n.remove(n[-1])
        i=0
        while (i<n.length){
            console.log(n[i])
            i++
        }
    }
}
weird_number(require("readline-sync").question("Enter no:"))

