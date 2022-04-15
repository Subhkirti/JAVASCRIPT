// let namesArray = ['kumar','shwetha','komal'];
// let arr2 = namesArray;
// console.log(arr2); // [ 'kumar', 'shwetha', 'komal' ]
// arr2.push("Kunal"); // adding a new string into arr2
// console.log(arr2); // [ 'kumar', 'shwetha', 'komal', 'Kunal' ] arr2 changed
// console.log(namesArray); //[ 'kumar', 'shwetha', 'komal', 'Kunal' ] original array also changed

// let namesArray = ['kumar','shwetha','komal'];
// let arr2 = [...namesArray]; // using spread operator
// arr2.push("Kunal"); // adding a new name
// console.log(arr2); //[ 'kumar', 'shwetha', 'komal', 'Kunal' ]
// console.log(namesArray); //[ 'kumar', 'shwetha', 'komal' ]

// // normally used expand method without spread operator
// let arr1 = ['x','y'];
// let arr2 = [arr1,'c','d'];
// console.log(arr2); // [ [ 'x', 'y' ], 'c', 'd' ]

// let arr1 = ['x','y'];
// let arr2 = [...arr1,'c','d'];
// console.log(arr2); // [ 'x','y','c','d' ]

// // spread operator doing the concat job
// let arr = [1,2,3];
// let arr2 = [4,5];
// arr = [...arr,...arr2];
// console.log(arr); // [ 1, 2, 3, 4, 5 ]

 
// // also doing split work
// var myName="kumar"
// var lettersOfMyName=[...myName]

// let array1 = [1,2,3,4,4,4,4,2,3,3,4,6]
// let mySet = new Set(array1)
// let arr=[...mySet]
// console.log(arr)

// var myName="kumar"
// console.log({...myName})
// place={name:"paris",country:"France"}
// var duplicate ={...place}
// console.log(duplicate)

 
// With a spread operator
var mynewCar={newCarName:"ROlls Royce",newCarColour:"brown"}
var myOldCar={oldCarName:"Lamborghini",oldCarColour:"grey"}
var allCars={...mynewCar,...myOldCar}
console.log(allCars);







 
