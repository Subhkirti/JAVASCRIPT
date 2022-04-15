function perfect(num){
    var sum=0
    for (i=1;i<num;i++){
        if (num%i==0){
            sum+=i
        }
        {
            
        }
    }
    if (sum==num){
        console.log(i+" "+"Perfect!")
    }
    else{
        console.log(i+" "+"Not Perfect!")
    }
}
perfect(6)

