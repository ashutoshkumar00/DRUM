for(var i=0;i<7;i++){
document.querySelectorAll(".drum")[i].addEventListener("mouseover",function (){

var btninnerhtml=this.innerHTML;

sound(btninnerhtml);
buttonAnimation(btninnerhtml);

});}


document.addEventListener("keypress",function (event){

sound(event.key);
buttonAnimation(event.key);


});


function sound(key){

  switch(key){

  case "w" :
  var audio=new Audio("crash.mp3");
  audio.play();
  break;


  case "a" :
  var tom2=new Audio("tom-1.mp3");
  tom2.play();
  break;

  case "s" :
  var tom3=new Audio("tom-2.mp3");
  tom3.play();
  break;

  case "d" :
  var tom4=new Audio("tom-3.mp3");
  tom4.play();
  break;

  case "j" :
  var tom1=new Audio("tom-4.mp3");
  tom1.play();
  break;

  case "k" :
  var sn=new Audio("snare.mp3");
  sn.play();
  break;

  case "e" :
  var k=new Audio("kick_bass.mp3");
  k.play();
  break;


  default:console.log(btninnerhtml);

  }
}

function buttonAnimation(key){

var activebtn=document.querySelector("."+key);

activebtn.classList.add("pressed");

setTimeout(function(){

activebtn.classList.remove("pressed");


},100);
}
