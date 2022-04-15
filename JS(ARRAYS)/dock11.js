var a=[1, 1, 2, 3, 4, 4, 5, 1]
var l1=[]
for (i=0;i<a.length;i++){
    var c=0;
    var l=[]
    for (j=1;j<a.length;j++){
        if (a[i]==a[j]){
            c++}
    if (c==2){
        l.push(c)
        l.push(a[i])
        if (!l1.includes(l)){
            l1.push(l)}
    else{
        l1.push(a[i])
            }
            
        }
    }
}
console.log(l1)

