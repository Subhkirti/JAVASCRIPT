var l= [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var even_sum=0
var odd_sum=0
var even_count=0
var odd_count=0
while (i<l.length){
    if (l[i]%2==0){
        even_sum+=l[i]
        even_count+=1

    }
    else{
        odd_sum+=l[i]
        odd_count+=1
    }
    i+=1
}
console.log("Sum of Even no:",even_sum)
console.log("Sum of Odd No:",odd_sum)
console.log("Count of Even no:",even_count)
console.log("Count of Odd No:",odd_count)
console.log("Average of Even no:",even_sum/even_count)
console.log("Average of Odd No:",odd_count)