function match_words(words){
    var c=0;
    for (var i of words){
        if (i[0]==i[-1]){
            c++
        }
        
    }
    return c
}
console.log(match_words(['abc', 'xyz', 'aba', '1221']))

