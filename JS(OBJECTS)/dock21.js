var d=[{"V":"S001"}, {"V": "S002"}, {"VI": "S001"}, {"VI": "S005"}, {"VII":"S005"}, {"V":"S009"},{"VIII":"S007"}]
var i=0;
var empty=[];
while(i<d.length){
    for (var key in d[i]){
        if (!empty.includes(d[i][key])){
            empty.push(d[i][key])
        }
        i++

    }
}
console.log(empty)
