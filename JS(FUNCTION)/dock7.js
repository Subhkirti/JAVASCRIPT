function square(){
    var k=[]
    var p=[]
    var n=[]
    for (i=1;i<=6;i++){
        k.push(i*i)
    }
    for (j=25;j<=30;j++){
        p.push(j*j)
    }
    n.push(k)
    n.push(p)
    console.log(n)
}
square()