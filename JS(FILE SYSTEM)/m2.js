var f=require("fs")
const d=f.readFileSync("m1.txt","utf8")
var c=1;
var i=0;
while (i<d.length){
    if (d[i]=="\n"){
        c+=1
    }
    i+=1
}
console.log(c);
