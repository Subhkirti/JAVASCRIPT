var dic = {'Alex': ['subj1', 'subj2', 'subj3'],'David': ['subj1', 'subj2']}
for (var i in dic){
    var c=0;
    for (j in dic[i]){
        c+=1
    }
}
console.log(c)