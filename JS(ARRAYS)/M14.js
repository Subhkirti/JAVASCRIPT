var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
var l=[]
i=0
while (i<list1.length){
    if (!list2.includes(i)){
        l.push(i)}
    i++
}
console.log(l)