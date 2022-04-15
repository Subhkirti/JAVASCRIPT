var marks= [[8,3,4],[1,5,9],[6,7,2]]
var i=0;
while (i<marks.length){
    var sum1=0;
    var j=0;
    while (j<marks[i].length){
        sum1+=marks[i][j]
        j++
    }
    i++
}
var sum2=0;
var i=0;
while (i<marks.length){
    var sum2=0;
    var j=0;
    while (j<marks[i].length){
        sum2+=marks[j][i]
        j++
    }
    i++
}
var p=0;
var s=0;
var i=0
while (i<marks.length){
    var j=0;
    while (j<marks[i]){
        if(i==j){
            p+=marks[i][j]
        }
        if((i+j)==(marks.length-1)){
            s+=marks[i][j]
        
        }
      j++  
    }
    i++
    
}
if (sum1==sum2==p==s){
    console.log("Magic Square!")
}
else{
    console.log("Not magic square!")
}

