
let n =require("readline-sync").question('Enter name:');
let dict={"name":"Raju", "marks":56}
for (i in dict){
if (i==n){
console.log("exists");
break
}else{
console.log("not exist");
break
}
}