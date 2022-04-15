function greater(a,b){
    if (a>b){
        console.log(a,"is greater!",b,"is smaller")
    }
    else{
        console.log(b,"is greater!",a,"is smaller")
    }
}
greater(require('readline-sync').questionInt("First no:"),require('readline-sync').questionInt("First no:"))
