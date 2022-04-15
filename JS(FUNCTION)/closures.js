//CLOSURE MEANS INNER AND OUTER
// var i=0;
// console.log(j)//Outer cannot access inner variable
// function show(){
//   var j=20;
//     console.log(i)//Inner can access both inner and also outer variable
//     console.log(j)
//   }
// show()

function outer(){
  var j="outer"
  function inner(){
    var k="Inner"
    console.log(k)//Inner can access both inner and also outer variable
    console.log(j)
  }
  
  inner()
  console.log(k)//Outer cannot access inner variable
  
}
outer()
  

