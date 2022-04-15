// const employees = {boss: 'Michael',secretary: 'Pam',sales: 'Jim',accountant: 'Oscar'};
// const keys = Object.keys(employees);
// console.log(keys);

// const values = Object.values(employees);
// console.log(values);
// const entries = Object.entries(employees);
// console.log(entries);

// var key= {firstName: 'Philip',lastName: 'Fry'};
// var details = {job: 'Delivery Boy',employer: 'Planet Express'};
// var character = Object.assign(key, details);
// console.log(character);


// const user = {username: 'AzureDiamond',password: 'hunter2'};
// const newuser = Object.freeze(user);
// user.password = '*******';
// console.log(newuser);

// const user = {username: 'AzureDiamond',password: 'hunter2'};
// const newUser = Object.seal(user);
// newUser.password = '*******';
// newUser.active = true;
// console.log(newUser);

const employees = ['Ron', 'April', 'Andy', 'Leslie'];
j=employees.slice(1,4)
var f=Object.getPrototypeOf(employees);
console.log(employees.splice(1,4))
console.log(employees)




