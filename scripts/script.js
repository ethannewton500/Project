import Player from './Player.js';

const buttonNewGame = $('#newGame');
const buttonRoll = $('#roll');

const playerDiceImage1 = $('#dice1');
const playerDiceImage2 = $('#dice2');
const computerDiceImage1 = $('#dice3');
const computerDiceImage2 = $('#dice4');

let User = new Player();
let Computer = new Player();

let roundNumber = 0;
$('#displayRound').text("Press ROLL to start");

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

  roundNumber = 0;
  $('#displayRound').text("Press ROLL to start");

  $('#roll').attr('disabled', false);
});

buttonRoll.on('click', function() {
  User.rollDice();

  console.log(User.getFirstDiceValue());

  if (User.getFirstDiceValue() == User.getSecondDiceValue())
    {
      console.log('You rolled a double!');
      console.log(User.handScore);
    }

  $('#playerHandScore').text(User.getHandScore());
  $('#playerScore').text(User.score);

  Computer.rollDice();

  $('#computerHandScore').text(Computer.getHandScore());
  $('#computerScore').text(Computer.score);

  playerDiceImage1.attr('src', User.getFirstDice().getPath());
  playerDiceImage2.attr('src', User.getSecondDice().getPath());
  computerDiceImage1.attr('src', Computer.getFirstDice().getPath());
  computerDiceImage2.attr('src', Computer.getSecondDice().getPath());

  console.log('roll');

  roundNumber++;
  $('#displayRound').text('Round: ' + roundNumber);

  if (roundNumber >= 3)
  {
    $('#roll').attr('disabled', true);
  }
});


