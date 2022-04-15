//With arrow function
// var myMarks= [1,4,6,8,10]
// s=myMarks.forEach((e) => console.log(e))

//normal function inside it
var myMarks= [1,4,6,8,10]
myMarks.forEach(function(e){
    console.log(e)
 });

// // mutability
// let numbers = [1, 2, 3, 4];
// var result=numbers.forEach((val, index) => val*val);
//console.log(result);//undefined
// console.log(numbers);//[1,2,3,4]

// No Ability to chain with other methods
// const myArray = [1, 2, 3, 4, 5]
// let result=myArray.forEach(x => x * x).reduce((total, value) => total + value);
// console.log(result);
// The above code will give error because you know that forEach returns undefined so whatever you perform on undefined will give error. We are asking to perform a reduce function on undefined. It didn’t understand that and threw an error.



 
