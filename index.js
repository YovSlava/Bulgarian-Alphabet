var buttonLength = document.querySelectorAll(".letter").length;

//

for (i = 0; i < buttonLength; i++) {
  document
    .querySelectorAll(".letter")
    [i].addEventListener("click", function () {
      var switchButtonHTML = this.innerHTML;

      makeSound(buttonInnerHTML);

      buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//

function makeSound(key) {
  switch (key) {
    case "a":
      var am4a = new Audio("audio/a.mp3");
      am4a.play();
      break;

    case "b":
      var tom1 = new Audio("audio/tom-1.mp3");
      tom1.play();
      break;

    case "v":
      var tom1 = new Audio("audio/tom-1.mp3");
      tom1.play();
      break;

    case "g":
      var tom1 = new Audio("audio/tom-1.mp3");
      tom1.play();
      break;

    case "d":
      var tom1 = new Audio("audio/tom-1.mp3");
      tom1.play();
      break;

    case "e":
      var tom1 = new Audio("audio/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom1 = new Audio("audio/tom-1.mp3");
      tom1.play();
      break;

    default:
      console.log(switchButtonHTML);
      break;
  }
}
