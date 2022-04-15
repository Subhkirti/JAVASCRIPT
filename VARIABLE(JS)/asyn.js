// ASYNCRONOUS:-
console.log("Hi");
setTimeout(() => {
    console.log("Let us see what happens");
    }, 2000);


function fun1(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function call() {
    console.log('I am callback function');
}

fun1('KIRTI', call);    
        




// SYNCRONOUS:-
function abc()
{console.log('abc');}
function xyz()
{abc()
console.log('xyz');}
xyz();

console.log('a');
function callMe() {
   console.log('b');
}
callMe()
console.log('c');



// CALLBACK:-
function myDisplayer(some) {
    console.log("Hello!",some)
  }
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    console.log(sum)
    myCallback(2);
  }
myCalculator(5, 5, myDisplayer);

function pop(a){
    return "I am from"+" "+a
}
function del(call){
    return call("Punjab")

}
console.log(del(pop))

function fun1(callback){
    return callback
}
function fun2(a){
    console.log(a)
}
fun1(fun2("Kirti"))

function fun1(a,b){
    return a+b
}
function fun2(d){
    console.log(d)
    return "My age is 12"   
}
console.log(fun2(fun1(2,3)))

function calculator(a,b,op){
    if (op=="+"){
        return a+b
    }
    else if(op=="-"){
        return a-b
    }
    else if(op=="*"){
        return a*b
    }
    else if(op=="/"){
        return a/b
    }}
function operation(callback){
    console.log(callback)

}
user=require("readline-sync").question("Enter your opetator:")
operation(calculator(5,3,user))





