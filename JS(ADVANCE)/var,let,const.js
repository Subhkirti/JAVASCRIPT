//VAR
var t=09
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
// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
// They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
// While var and let can be declared without being initialized, const must be initialized during declaration

