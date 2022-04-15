var my_dict = {'C1':[1,2,3],'C2':[5,6,7],'C3':[9,10,11]}
var st=""
for (var j in my_dict){
    st=st+" "+j
    
}
console.log(st)
var str="";
for (i in my_dict){
    var f=0;
    while(f<my_dict[i].length){
        for (k in my_dict){
            str=str+" "+my_dict[k][f]
        }
        console.log(str)
        console.log(" ")
        f+=1
    
  }
  

  
}

