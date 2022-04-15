var char_list=["a","n","t","a","a","t","n","n","a","x","u","g","a","x","a"]
var uniques=[]
for(var i of char_list){
if(!uniques.includes(i)){
uniques.push(i)
}}
for(var j of uniques){
count=0
for(var k of char_list){
if (j === k){
count+=1
}
}
console.log(j,count," times");
}