function duplicates(l){
    var i=0
    var k=[]
    while (i<l.length){
        if (!k.includes(l[i])){
            k.push(l[i])
        }
        i++
    }
    return k
}
console.log(duplicates([1,2,3,3,3,3,4,5]))