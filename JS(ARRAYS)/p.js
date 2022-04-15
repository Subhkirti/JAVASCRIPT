var s=[1,2,22,78,9,"df","th","0","-4",-45]
var d=[]
for (i in s){
    if(typeof(s[i])!=""){
        d.push(s[i])
    }
}
console.log(d)