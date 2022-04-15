let readlineSync = require("readline-sync");
console.log("!!WELCOME TO THE ROCK, PAPER, SCISSOR GAME!!")
console.log("PAPER, ROCK, SCISSOR")
var user1=readlineSync.question("User1 enter your thing:")
var user2=readlineSync.question("User2 enter your thing:")
if (user1=="paper" && user2=="stone"){
    console.log("user2 You are loss")
}
else if (user1=="stone" && user2=="paper"){
    console.log("user1 is winner!")
}
else if (user1=="scissor" && user2=="paper"){
    console.log("user1 is winner")
}
else if (user1=="paper" && user2=="scissor"){
    console.log("user2 is winner")
}
else if(user1=="scissor" && user2=="paper"){
    console.log("user1 is  winner")
}
else if (user1=="stone" && user2=="scissor"){
    console.log("user1 is winner")
}
else if (user1=="scissor" && user2=="stone"){
    console.log("user2 is winner")
}
else if (user1=="rock" && user2=="paper"){
    console.log("user2 is winner")
}
else if (user1=="paper" && user2=="rock"){
    console.log("user1 is winner")
}
else if (user1=="rock" && user2=="scissor"){
    console.log("user1 is winner")
}
else if (user1=="scissor" && user2=="rock"){
    console.log("user2 is winner")
}
else if (user1=="rock" && user2=="rock"){
    console.log("Both are winner!!")
}
else if (user1=="scissor" && user2=="scissor"){
    console.log("Both are winner!!")
}
else if (user1=="paper" && user2=="paper"){
    console.log("Both are winner!!")
}