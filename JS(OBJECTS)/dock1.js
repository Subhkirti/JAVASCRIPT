var str='w3resource';
var d=str.split("")
dic={}
for (i in d){
    if (d[i] in dic){
        dic[d[i]]+=1
    }
    else{
        dic[d[i]]=1
    }
}
console.log(dic)