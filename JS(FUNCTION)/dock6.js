function uplow(l){
    var cu=0;
    var cl=0;
    for (i=0;i<l.length;i++){
        if (l[i]>="A" && l[i]<="Z"){
            cu++
        }
        else{
            cl++
        }
        i++
    }
    console.log("Lowercase:"+cl)
    console.log("Uppercase:"+cu)
}
uplow("The quick Brown Fox")