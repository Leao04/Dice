var dice2 = {
    sides: 10,
    roll: function () {
        var randomNumber2 = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber2;
    }
}

function printNumber2(number2) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = (number2);
}

var button2 = document.getElementById('button2');

button2.onclick = function () {
    var result2 = dice2.roll();
    printNumber2(result2);
};

var button2 = document.getElementById("button2");
button2.addEventListener("click", function () {
  var audio2 = document.querySelector("audio");
  audio2.currentTime = 0.1;
  audio2.play();
});