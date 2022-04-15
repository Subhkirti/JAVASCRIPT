var d={'c1': 'Red', 'c2': 'Green', 'c3': null}
for (var i in d){
    if (d[i]==null){
        delete d[i]
    }
}
console.log(d)