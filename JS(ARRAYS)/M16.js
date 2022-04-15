var l=[10, 11, 12, 13, 14, 17, 18, 19]
var num=30;
var i=0
var x=[]
while(i<l.length){
    var j=i
    var y=[]
        while (j<l.length){
            if (l[i]+l[j]==num){
                y.push(l[i])
                y.push(l[j])
                x.push(y)}
            j+=1
        }
        i+=1
}
console.log(x)
