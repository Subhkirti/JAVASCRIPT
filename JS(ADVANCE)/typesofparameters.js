//IN JS TWO TYPES OF PARAMERTERS:-
//1) DEFAULT PARAMETER
function add(a=4,b,c){
    console.log(a+b+c)
}
add(2,3,1)

//2) REST PARAMETER
function sum(a,b,...c){
    console.log(a,c)
    console.log(c[1])
}
sum(1,2,3,4,5,6)
