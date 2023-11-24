import Player from './Player.js';

const buttonNewGame = $('#newGame');
const buttonRoll = $('#roll');

const playerDiceImage1 = $('#dice1');
const playerDiceImage2 = $('#dice2');
const computerDiceImage1 = $('#dice3');
const computerDiceImage2 = $('#dice4');

let User = new Player();
let Computer = new Player();

buttonNewGame.on('click', function() {
  User = new Player();
  Computer = new Player();

  playerDiceImage1.attr('src', 'images/dice_blank.png');
  playerDiceImage2.attr('src', 'images/dice_blank.png');
  computerDiceImage1.attr('src', 'images/dice_blank.png');
  computerDiceImage2.attr('src', 'images/dice_blank.png');

  User.handScore = 0;
  Computer.handScore = 0;

  User.score = 0;
  Computer.score = 0;

  console.log('New game started!');
});

buttonRoll.on('click', function() {
  User.rollDice();
  Computer.rollDice();

  playerDiceImage1.attr('src', User.getFirstDice().getPath());
  playerDiceImage2.attr('src', User.getSecondDice().getPath());
  computerDiceImage1.attr('src', Computer.getFirstDice().getPath());
  computerDiceImage2.attr('src', Computer.getSecondDice().getPath());

  console.log('roll');
});
