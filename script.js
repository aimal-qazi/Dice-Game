// Text
var text = document.getElementById("text");

// Player 1
var player1 = Math.floor(Math.random() * 6) + 1;
var player1img = document.getElementById("p1");
var player1Src = "images/dice" + player1 + ".png";
player1img.setAttribute("src", player1Src);

// Player 2
var player2 = Math.floor(Math.random() * 6) + 1;
var player2img = document.getElementById("p2");
var player2Src = "images/dice" + player2 + ".png";
player2img.setAttribute("src", player2Src);

// Condition
if (player1 > player2) {
  text.innerHTML = "&#128681 Player 1 is winner";
} else if (player1 < player2) {
  text.innerHTML = "&#128681 Player 2 is winner";
} else {
  text.innerHTML = "&#127937 Draw !";
}
