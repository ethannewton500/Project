const buttonNewGame = $('#newGame');
const buttonRoll = $('#roll');

const playerDiceImage1 = $('#dice1');
const playerDiceImage2 = $('#dice2');
const computerDiceImage1 = $('#dice3');
const computerDiceImage2 = $('#dice4');


buttonNewGame.on('click', function() {
  let player = new Player();
  let computer = new Player();

  playerDiceImage1.attr('src', 'images/dice-blank.png');
  playerDiceImage2.attr('src', 'images/dice-blank.png');
  computerDiceImage1.attr('src', 'images/dice-blank.png');
  computerDiceImage2.attr('src', 'images/dice-blank.png');

  console.log("New game started");
});
