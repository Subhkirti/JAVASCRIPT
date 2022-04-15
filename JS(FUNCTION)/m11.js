function sum_lists(l1,l2){
    var i=0;
    while(i<l1.length){
        var j=0
        while(j<l2.length){
            sum=l1[i]+l2[j]
            console.log(sum)
            j++
            i++
            
        }
    }
}
sum_lists([50, 60, 10],[10, 20, 13])