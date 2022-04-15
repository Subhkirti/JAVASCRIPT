var a=["apple","mango","red","orange","hen","papaya"]
// o/p:-{5:2,6:2}
var dic={}
var c=0;
var k=[]
var t=a.map((e)=>{
    k.push(e.length)
    }
)
var j=k.map((i)=>{
    if (i in dic){
        c+=1
    }
    else{
        c=1
    }
    dic[i]=c
})

console.log(dic)
