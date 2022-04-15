// // The switch statement is a part of JavaScript's "Conditional" Statements, which are used to perform
// //  different actions based on different conditions. Use switch to select one of many blocks of code to
// //  be executed. ... If break is omitted, the next code block in the switch statement is executed.
// var day=require("readline-sync").questionInt("Enter your day:")
// switch (day) {
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
//     break
//   case 7:
//     day = "Sunday";
      
// }
// console.log(day)

// IF I am not giving console in one case :
var day=require("readline-sync").questionInt("Enter your day:")
switch (day) {
  case 1:
    day = "Monday";
    break;
  case 2:
  case 3:
    day = "Wednesday";
    break;
  case 7:
    day = "Sunday";
      
}
console.log(day)