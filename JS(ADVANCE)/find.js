//FIND METHOD:-The find() method is used to get the value of the first element in the array that satisfies the provided condition. It will start checking the elements of the array and whichever the first element satisfies the condition is going to print and after that the loop ends it won’t continue further.

var numbers= [-0.20,-10, 0.2, -40,1,2,3, -25];
var found = numbers.find((element) =>
   element > 1);
console.log(found);//it gives only single answer
