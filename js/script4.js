var dice4 = {
    sides: 100,
    roll: function () {
        var randomNumber4 = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber4;
    }
}

function printNumber4(number4) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = (number4);
}

var button4 = document.getElementById('button4');

button4.onclick = function () {
    var result4 = dice4.roll();
    printNumber4(result4);
};

var button4 = document.getElementById("button4");
button4.addEventListener("click", function () {
  var audio4 = document.querySelector("audio");
  audio4.currentTime = 0.1;
  audio4.play();
});