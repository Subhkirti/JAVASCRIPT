var l=[1,1,1,7,8,9,9];
var unique=[]
var i=0
while(i<l.length){
    if (!unique.includes(l[i])){
        unique.push(l[i])
    }
    i++
}
console.log(unique)


