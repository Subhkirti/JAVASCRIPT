// REDUCE METHOD:- IT REDUCE THE ARRAY TO A SINGLE VALUE AND EXECUTES A PROVIDED FUNCTION FOR EACH VALUE OF THE ARRAY(FROM LEFT-TO-RIGHT.)
// Normal Way
var number = [2, 4, 6, 8, 12, 14];
var sum = number.reduce(function(total, element){
   return total + element;})
console.log(sum);//46
console.log(number);//[2,4,6,8,12,14]

// es6 way
var sum = number.reduce((total, value) => total + value)
console.log(sum);//46

