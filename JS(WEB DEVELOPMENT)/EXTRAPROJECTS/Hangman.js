// Secret words"
var l=["pig","tortoise","spider","elephant","bunny"]
var s=Math.floor(Math.random()*l.length)

word=l[s]

// Secret Clues
var cl=["He is pink and he likes to eat waste food","He is green and he have a shell","He have eight legs and he can spin a web","He is big, grey and he have a Trunk","He is fluffy and he can hop"]
clue=cl[s]
document.getElementById("clue").innerHTML="CLUE- "+clue
main=""
    for (i=0;i<word.length;i++){
        main+="_ " 
    }
document.getElementById("guess").innerHTML="Guess now: "+main
var a=document.getElementById("main_div").innerText
var l=[]
l.push(a.split("\n"))


var btn=document.querySelectorAll(".letter")
// console.log(btn.innerText)
function show(){
    console.log(btn.innerText)
}

btn.addEventListener("click",show)

