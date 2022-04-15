var f=require("fs")
var d=f.readFileSync("m1.txt","utf8")
var s=d.split("\n")
// console.log(s);
var i=0;
while (i<s.length){
    if (s[i].includes("delhi")){
        f.writeFileSync("delhi.txt",s[i])
    }
    else if (s[i].includes("shimla")){
        f.writeFileSync("shimla.txt",s[i])
    }
    else{
        f.writeFileSync("other.txt",s[i])
    }
    i+=1
}
