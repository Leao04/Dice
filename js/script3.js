var dice3 = {
    sides: 6,
    roll: function () {
        var randomNumber3 = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber3;
    }
}

function printNumber3(number3) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = (number3);
}

var button3 = document.getElementById('button3');

button3.onclick = function () {
    var result3 = dice3.roll();
    printNumber3(result3);
};

var button3 = document.getElementById("button3");
button3.addEventListener("click", function () {
  var audio3 = document.querySelector("audio");
  audio3.currentTime = 0.1;
  audio3.play();
});