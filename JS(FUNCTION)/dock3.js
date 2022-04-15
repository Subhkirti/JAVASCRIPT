function string(l){
    var st=""
    for (var i of l){
        st=i+st
    }
    return st
}
console.log(string("1234abcd"))

