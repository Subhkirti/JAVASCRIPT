var l=[[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
var max=0
for (i=0;i<l.length;i++){
    for (j=0;j<l[i].length;j++){
        a=l[i].length
        if (max<a){
            max=a
            t=l[i]
        }
        j++
    }
    i++
}
console.log("Max List:",t,"count:",a)
