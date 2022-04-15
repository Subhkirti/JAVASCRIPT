var data=[{"item": 'item1','amount': 400},{'item': 'item2', 'amount': 300},{'item': 'item1', 'amount': 750}]
var sum=0;
var tax=0;
var dic={};

for (var d in data){
    
    if (data[d]["item"]=="item1"){
        sum+=data[d]["amount"]
        dic["item1"]=sum
    }
    else{
        tax=tax+data[d]["amount"]
        dic["item2"]=tax
    }
}
console.log(dic)



// sum =0
// tax=0
// dic={}
// for d in list:
//     if d["item"]=="item1":
//         sum=sum+ d['amount']
//         dic["item1"]=sum
//     else: 
//         tax=tax+d["amount"]
//         dic["item2"]=tax
// print(dic)