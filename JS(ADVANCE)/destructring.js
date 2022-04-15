// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,or properties from objects, into distinct variables.
var a, b;
[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...c] = [10, 20, 30, 40, 50];
console.log(c)//[30,40,50]
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...c] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(c); // [30, 40, 50]

({ a,b } = { a: 10, b: 20 });
console.log(a); //10
console.log(b); // 20
//same eaxmple;-
({ c,d } = { a: 10, b: 20 });
console.log(c); //undefined
console.log(d); // undefined

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); //{c:30,d:40}