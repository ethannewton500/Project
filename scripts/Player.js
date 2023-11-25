/* eslint-disable require-jsdoc */
import Dice from './Dice.js';

class Player {
  constructor() {
    this.hand = [];
    this.score = 0;
    this.handScore = 0;
  }

  rollDice() {
    let index = 0;

    this.hand = [];

    while (index < 2) {
      // Math.floor(Math.random() * 6) + 1
      const diceValue = Math.floor(Math.random() * 6) + 1;
      const dice = new Dice(diceValue);
      this.hand.push(dice);

      this.handScore += diceValue;

      index++;
    }
  }

  getFirstDice() {
    return this.hand[0];
  }

  getSecondDice() {
    return this.hand[1];
  }

  getFirstDiceValue() {
    return this.hand[0].value;
  }

  getSecondDiceValue() {
    return this.hand[1].value;
  }

  getHandScore() {
    let score = 0;

    this.hand.forEach((dice) => {
      score += dice.value;
    });

    return score;
  }
}
export default Player;
