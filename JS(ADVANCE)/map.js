// THE MAP METHOD CREATS AN ARRAY BY CALLING A SPECIFIC FUNCTION ON EACH ELELMENT PRESENT IN THE PARENT ARRAY. IT IS IMMUTABLE METHOD 
const myMarks= [1,4,6,8,10]
var s=myMarks.map((e) => e);
console.log(s)

// // // mutability
// // let numbers = [1, 2, 3, 4];
// // var result=numbers.map((val, index) =>val*val);
// // console.log(result);//[1,4,9,16]
// // console.log(numbers);//[1,2,3,4]

// //Ability to chain other methods
// const myArray = [1, 2, 3, 4, 5]
// let result =myArray.map(x => x * x).reduce((total, value) => total + value)
// console.log(result);//55 (1+4+9+16+25=55)


