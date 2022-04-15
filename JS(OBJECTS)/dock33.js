var d1={'key1': 1, 'key2': 3, 'key3': 2}
d2={'key1':1 ,'key2':2}
for (var i in d1){
    for (var j in d2){
        w=d1[i]
        r=d2[j]
        if (i==j && w==r){
            console.log(i,":",w,"is present in both!")

        }
    }
}

