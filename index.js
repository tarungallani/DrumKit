document.querySelector(".w").addEventListener("click", myfunction);
document.querySelector(".a").addEventListener("click", myfunction);
document.querySelector(".s").addEventListener("click", myfunction);
document.querySelector(".d").addEventListener("click", myfunction);
document.querySelector(".j").addEventListener("click", myfunction);
document.querySelector(".k").addEventListener("click", myfunction);
document.querySelector(".l").addEventListener("click", myfunction);

function myfunction() {

  var clickedButton = this.innerHTML;
  makeSound(clickedButton);
  makeAnimation(clickedButton);
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  makeAnimation(event.key);
});



function makeSound(valuegiven)
{
  switch (valuegiven) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio1 = new Audio("sounds/kick-bass.mp3");
      audio1.play();
      break;
    case "s":
      var audio2 = new Audio("sounds/snare.mp3");
      audio2.play();
      break;
    case "d":
      var audio3 = new Audio("sounds/tom-1.mp3");
      audio3.play();
      break;
    case "j":
      var audio4 = new Audio("sounds/tom-2.mp3");
      audio4.play();
      break;
    case "k":
      var audio5 = new Audio("sounds/tom-3.mp3");
      audio5.play();
      break;
    case "l":
      var audio6 = new Audio("sounds/tom-4.mp3");
      audio6.play();
      break;
    default:
      break;
  }
}

function makeAnimation(valuegiven){

  var activeButton= document.querySelector("."+valuegiven);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
