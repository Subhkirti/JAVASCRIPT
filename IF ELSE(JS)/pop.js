var l=[1,2,3,4,5,6,34,23]
for (i in l){
    if (l[i]%2==0){
        l.splice(i,1,l[i]+1)
    }
}
console.log(l);

