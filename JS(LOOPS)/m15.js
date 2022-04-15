var choose_ascii=require("readline-sync").questionInt("enter a no:");
var ascii_char=97+choose_ascii
var st=""
for (var i=97;i<=ascii_char-1;i++) {
       st=st+String.fromCharCode(i);
       
}
console.log(st);