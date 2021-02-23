var dice = {
  sides: 20,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
};

function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function () {
  var result = dice.roll();
  printNumber(result);
};

var button = document.getElementById("button");
button.addEventListener("click", function () {
  var audio = document.querySelector("audio");
  audio.currentTime = 0.1;
  audio.play();
});
