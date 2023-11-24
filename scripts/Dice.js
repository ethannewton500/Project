class Dice {
  constructor(value)
  {
    this.value = value;
  }

  describeSelf() {
    const value = this.value;

    return '<img src="images/dice' + value + '.png" alt="dice-' + value + '">'
  }
}