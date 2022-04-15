var List = [6,1,3,5,6,3,1];
l=[]
multy=1
for(i=0;i<List.length;i++){
    if (!l.includes(List[i])){
        l.push(List[i])
    }
}
for (var i in l){
    multy=multy*l[i]
}
console.log(multy)
