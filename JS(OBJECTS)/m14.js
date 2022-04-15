var d=[
    {"first":"1"},
    {"second": "2"},
    {"third": "1"},
    {"four": "5"},
    {"five":"5"},
    {"six":"9"},
    {"seven":"7"}
    ]
var i=0
l=[]
while (i<d.length){
    for (j in d[i]){
        if (!l.includes(d[i][j])){
            l.push(d[i][j])
        }

    }
    i++
}
console.log(l)

