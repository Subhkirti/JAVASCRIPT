// Hoisting
// JavaScript Hoisting refers to the process whereby the interpreter
// appears to move the declaration of functions, variables or classes 
// to the top of their scope, prior to execution of the code.
// function hoisting
catName("kitty");
function catName(name) {
  console.log("My cat's name is " + name);
}

// variable hoisting
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.

// class hoisting
// Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to
//  the class. However the class is not intialized by default, so any code that uses it before 
// the line in which it is initialized is executed will throw a ReferenceError. 