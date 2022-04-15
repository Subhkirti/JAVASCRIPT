var k={1:24,2:56,3:54,4:67};
var max=0;
var min=k[1];
for (var i in k){
    if (k[i]>max){
        max=k[i]
    }
    else if (k[i]<min){
        min=k[i]
    }
}
console.log("Minimum value:",min)
console.log("Maximum value:",max)
