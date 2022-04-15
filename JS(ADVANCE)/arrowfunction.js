// ARROW FUNCTION COMES IN ES6. We can create more concise , cleaner and more readable functions by using  => (fat arrow) operator.
var myCampus = (campus,area) =>{ console.log(`My campus is ${campus} ${area}`); }
myCampus("Sarjapur","Bangelore")

// WE CAN ALSO OMMITTED THE () IF WE HAVE ONLY ONE PARAMETERl:-
var myCampus = campus => console.log(`My campus is ${campus}`);
myCampus("Sarjapur");
