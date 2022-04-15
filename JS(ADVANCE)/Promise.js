function myDisplayer(some) {
  console.log(some);
}
let myPromise = new Promise(function(myResolve, myReject){
  // "Producing Code" (May take some time)
  let x = 0;
  if (x == 5){
    myResolve("OK");
  } else {
    myReject("Error");
  }
});
 // "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function(v) {myDisplayer(v);})
  .catch(
  function(e) {myDisplayer(e);}
  )


