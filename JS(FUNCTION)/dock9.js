function st(min,max,step){
    var j=min;
    var k=[];
    while(j<=max){
        k.push(j)
        j+=step
    }
    console.log(k)
}
st(min=require("readline-sync").questionInt("Enter a min no:"),max=require("readline-sync").questionInt("Enter a no:"),step=require("readline-sync").questionInt("Enter a no:"))

