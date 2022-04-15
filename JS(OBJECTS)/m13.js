var l1=['one','two','three','four','five'];
var l2=[1,2,3,4,5];
dic={}
for ( var i in l1){
    for (var j in l2){
        dic[l1[i]]=l2[j]
        l2.shift(j)
        break

    }
}
console.log(dic)