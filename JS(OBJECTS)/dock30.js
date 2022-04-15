var l={'S  001': ['Math', 'Science'], 'S    002': ['Math', 'English']}
var k=" ";
var r={};
for (var i in l){
    var st=""
    for (var j in i){
        if (i[j]!=k){
            st+=i[j]}
    }
    r[st]=l[i]
}
console.log(r)
  



