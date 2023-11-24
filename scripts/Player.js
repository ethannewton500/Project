class Player {
  constructor() {
    this.hand = [];
    this.score = 0;
  }

  rollDice() {
    index = 0;

    while (index < 2)
    {
      let diceValue = Math.floor(Math.random() * 6) + 1;
      let dice = new Dice(diceValue); 
      this.hand.push(dice);
    }

    let dice = new Dice();
    dice.roll();

    return dice;
  }

  getFirstDice() {
    return this.hand[0];
  }

  getSecondDice() {
    return this.hand[1];
  }

  getHandScore() {
    let score = 0;

    this.hand.forEach(dice => {
      score += dice.value;
    });

    return score;
  }
}