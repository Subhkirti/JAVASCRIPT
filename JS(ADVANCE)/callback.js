// // CALLBACK:-
// function dispaly(some){
//     console.log(some)
// }
// function cal(num1,num2,callback){
//     let sum=num1+num2
//     callback(sum)
// }
// cal(5,5,dispaly)

 
// function Gurukul(){
//     console.log("I am Navgurukul");
//  }
//  function Nav(callback){
//     console.log("I am Nav");
//     callback();
//  }
//  Nav(Gurukul);  


function callback(){
    console.log("hi from callback after 1 second")
 }
 setTimeout(callback, 1000)  
 const tenSecondsLater = () => console.log('10 seconds passed!')
 setTimeout(tenSecondsLater, 10000)
 console.log('Start!')
 