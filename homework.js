var player1;
var player2;
var player1_score = 0;
var player2_score = 0;
var gameBeingPlayed = true;

while (gameBeingPlayed) {

player1 = Math.floor(Math.random()*3+1);
player2 = Math.floor(Math.random()*3+1);

// Rock = 1
// Paper = 2
// Scissors = 3

if (player1 == player2) {
console.log("Tie");
}
else if ((player1 == 1 && player2 == 2) || (player1 == 2 && player2 == 3) || (player1 == 3 && player2 == 1))
{
console.log("Player 2 wins this round!");
player2_score +=1
}
else {

console.log("Player 1 wins this round!")
player1_score +=1
}

if (player1_score == 3 || player2_score == 3)  {

if (player1_score > player2_score) {

console.log("Player 1 wins!")
gameBeingPlayed = false;
}

else {
console.log("Player 2 wins!")
gameBeingPlayed = false;
}
}
}