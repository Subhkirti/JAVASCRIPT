var l=[1, 2, 2, 5, 8, 4, 4, 8]
max=0;
for (i=0;i<l.length;i++){
    if (l[i]>max){
        max=l[i]
    }
}
var smax=0;
for (j=0;j<l.length;j++){
    if (l[j]<max){
        if (l[j]>smax){
            smax=l[j]
        }
    }
}
var tmax=0;
for (k=0;k<l.length;k++){
    if (l[k]<max){
        if (l[k]<smax){
            if (l[k]>tmax){
            tmax=l[k]
            }
        }
    }
}
console.log("First max:",max)
console.log("Second max:",smax)
console.log("Third max:",tmax)
