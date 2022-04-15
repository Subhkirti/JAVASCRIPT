function sum_lists(l1,l2){
    var i=0;
    while(i<l1.length){
        var j=0
        while(j<l2.length){
            if (l1[i]%2==0 && l2[j]%2==0){
                console.log("Both are even!!")
            }
            else{
                console.log("Not even!!")
            }
           
            j++
            i++
            
        }
    }
}
sum_lists( [2, 6, 18, 10, 3, 75],[6, 19, 24, 12, 3, 87] )