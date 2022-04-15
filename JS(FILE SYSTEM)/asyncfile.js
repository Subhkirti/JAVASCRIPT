var fs = require("fs");
// Asynchronous - Opening File//because we use callback in it...
console.log("opening file!");
fs.open('m1.txt', 'r+', function(err, fd) {
   if (err) {
       console.log(err);
   }
   else {
     console.log(fd);
 }
   console.log("File open successfully");     
});