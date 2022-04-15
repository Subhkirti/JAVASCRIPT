var n=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var i=0;
var max=0;
while (i<n.length){
    if (n[i]>max){
        max=n[i]
        }
    i++
}
var sec_max=0;
var j=0;
while (j<n.length){
    if (n[j]<max){
        if (n[j]>sec_max){
            sec_max=n[j]
        }    
    }
    j++   
}
console.log("first max:",max)
console.log("Second max:",sec_max);
