var list = [1, 2, 6, 4]
var e={};
var dic=e;
for (i in list){
    e[list[i]]={}
    e=e[list[i]]
}
console.log(dic)

