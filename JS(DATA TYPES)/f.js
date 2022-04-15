var nums=[2,5,5,11]
var target=10;
var l=[]
for (var i=0;i<nums.length;i++){
  for (var j=1;j<nums.length;j++){
      if (nums[i]+nums[j]==target && !l.includes(i) && !l.includes(j)){
        l.push(i)
        l.push(j)
      }  
  }
}

var k=[]
for (j of l){
    if (!k.includes(j)){
    k.push(j)
    }
}
console.log(k);