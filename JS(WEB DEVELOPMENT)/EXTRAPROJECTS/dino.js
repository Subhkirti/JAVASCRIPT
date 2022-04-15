var  dino=document.getElementById("dino");
var cactus=document.getElementById("cactus")
var score=document.getElementById("score")
function jump(){
  if (dino.classList!="jump"){
  dino.classList.add("jump");
  setTimeout(function(){
    dino.classList.remove("jump");}
    ,800);
  }
}
//cactus
setInterval(function(){
score.innerText++
let dinotop=parseInt(window.getComputedStyle(dino).getPropertyValue("top"))//150
let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))//50
if (cactusLeft<50 && cactusLeft>0 && dinotop>=140){
  alert("You got a score of: "+score.innerText+" play again!!!")
}
},10);
document.addEventListener("keypress",function(){
  jump();
});