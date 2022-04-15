var dic1={1:10, 2:20}
var dic2={3:30,2:40}
var dic3={5:50,6:60}
for (var i in dic1){
    for (var j in dic2){
        if (i==j){
            dic3[i]=dic1[i]+dic2[j]
            break
        }
        else{
            dic3[i]=dic1[i]
            dic3[j]=dic2[j]
        }
    }
}
console.log(dic3)



// {1: 10, 2: 60, 3: 30, 5: 50, 6: 60}
