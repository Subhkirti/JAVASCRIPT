l1=['S001', 'S002', 'S003', 'S004']
l2=['Adina Park', 'Leyton Marsh', 'Duncan Boyle', 'Saim Richards']
l3=[85, 98, 89, 92]
d={}
for (var i in l1){
    for (var j in l2){
        for (var n in l3){
            d[i]={j:n}
            delete l2[j]
            break}
        }
        delete l3[n]

        break
    }
    

console.log(d)


