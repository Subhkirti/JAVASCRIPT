var a=[14,7,9,10,11,19]
var i=0
var j=a.length-1
var sum=[]
while (i<a.length && j>=0){
    if (j==2){
        break
    }
    else{
        sum.push(a[i]+a[j])
    }
    j-=1
    i+=1
}
console.log(sum)


