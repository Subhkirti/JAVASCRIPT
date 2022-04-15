var List= [1, 2, 2, 5, 8, 4, 4, 8]
l=[]
for(i=0;i<List.length;i++){
    if (!l.includes(List[i])){
        l.push(List[i])
    }
}
c=0
for (var i in l){
    c++
}
console.log(c)