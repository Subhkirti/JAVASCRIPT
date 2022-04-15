var fs = require("fs");
fs.mkdirSync("kirti")// create folder
fs.writeFileSync("kirti.txt","My name is kirti.")//write text
fs.appendFileSync("kirti.txt","I am from punjab")//append data
const a=fs.readFileSync("kirti.txt","utf8")//read file
// console.log(a);
fs.unlinkSync("kirti.txt")//delete file
