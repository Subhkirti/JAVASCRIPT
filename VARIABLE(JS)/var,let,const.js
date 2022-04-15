//VAR
var t//declarattion
var t=9//intialisatiom
t=945
console.log(t)//945

var t=90
var t=780
console.log(t)//780

//LET
let t=90
t=789
console.log(t)//789

let t=90
let t=899
console.log(t)//error: t has already declared

//CONST
const t=89
t=567
console.log(t)//error:assignment to constant variable

const t=789
const t=5577
console.log(t)//error:t has already declared

// Differece btween let,const,var
// var declarations are globally scoped or function scoped while let and const are block(local)scoped.
// var variables can be updated but let and const values are not updated.
// var can be redeclared but let and const will not redeclared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// In var and let , without declaration we can intialize. but in const, we declared a variale during the initialization