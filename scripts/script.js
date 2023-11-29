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
$('#displayRound').text('Press ROLL to start');

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

  playerScore = 0;
  playerHandScore = 0;
  computerScore = 0;
  computerHandScore = 0;

  $('#playerHandScore').text(0);
  $('#playerScore').text(0);

  $('#computerHandScore').text(0);
  $('#computerScore').text(0);

  console.log('New game started!');

  roundNumber = 0;
  $('#displayRound').text('Press ROLL to start').removeClass('winner');

  $('#roll').attr('disabled', false);
});

let playerHandScore = 0;
let playerScore = 0;

let computerHandScore = 0;
let computerScore = 0;

buttonRoll.on('click', function() {
  User.rollDice();

  if (User.getFirstDiceValue() == 1 || User.getSecondDiceValue() == 1) {
    console.log('Player rolled a 1!');
    playerHandScore = 0;
  } else {
    if (User.getFirstDiceValue() === User.getSecondDiceValue()) {
      console.log('Player Double!');
      playerHandScore = User.getHandScore() * 2;
      playerScore += User.getHandScore() * 2;
    } else {
      playerHandScore = User.getHandScore();
      playerScore += User.getHandScore();
    }
  }

  $('#playerHandScore').text(playerHandScore);
  $('#playerScore').text(playerScore);

  Computer.rollDice();

  if (Computer.getFirstDiceValue() == 1 || Computer.getSecondDiceValue() == 1) {
    console.log('Computer rolled a 1!');
    computerHandScore = 0;
  } else {
    if (Computer.getFirstDiceValue() === Computer.getSecondDiceValue()) {
      console.log('Computer Double!');
      computerHandScore = Computer.getHandScore() * 2;
      computerScore += Computer.getHandScore() * 2;
    } else {
      computerHandScore = Computer.getHandScore();
      computerScore += Computer.getHandScore();
    }
  }

  $('#computerHandScore').text(computerHandScore);
  $('#computerScore').text(computerScore);


  playerDiceImage1.attr('src', User.getFirstDice().getPath());
  playerDiceImage2.attr('src', User.getSecondDice().getPath());

  animateDiceSpin(playerDiceImage1);
  animateDiceSpin(playerDiceImage2);

  computerDiceImage1.attr('src', Computer.getFirstDice().getPath());
  computerDiceImage2.attr('src', Computer.getSecondDice().getPath());

  animateDiceSpin(computerDiceImage1);
  animateDiceSpin(computerDiceImage2);

  console.log('roll');

  roundNumber++;
  $('#displayRound').text('Round: ' + roundNumber);

  if (roundNumber >= 3) {
    $('#roll').attr('disabled', true);
    if (playerScore > computerScore) {
      $('#displayRound').text('Player wins!').addClass('winner');
    } else if (playerScore < computerScore) {
      $('#displayRound').text('Computer wins!').addClass('winner');
    } else {
      $('#displayRound').text('Tie!').addClass('winner');
    }
  }
});

function animateDiceSpin(diceImageElement) {
  let rotation = 0;
  const rotationSpeed = 10;

  const rotationInterval = setInterval(() => {
    rotation += rotationSpeed;
    diceImageElement.css('transform', `translate(-50%, -50%) rotate(${rotation}deg)`);

    if (rotation >= 360) {
      clearInterval(rotationInterval);
      diceImageElement.css('transform', 'translate(-50%, -50%) rotate(0deg)');
    }
  }, 10);
}
