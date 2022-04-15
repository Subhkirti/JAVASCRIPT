var my_dict = {
    'a':50,
    'b':58,
    'c':56,
    'd':400,
    'e':100,
    'f':20
    }
var l=[]
var max=0;
for (var i in my_dict){
    if (my_dict[i]>max){
        max=my_dict[i]
    }
}
var smax=0;
for (var i in my_dict){
    if (my_dict[i]<max){
        if (my_dict[i]>smax)
        smax=my_dict[i]
    }
}
var tmax=0;
for (var i in my_dict){
    if (my_dict[i]<smax){
        if (my_dict[i]>tmax)
        tmax=my_dict[i]
    }
    
}
l.push(tmax)
l.push(smax)
l.push(max)
console.log(l)