class Dice {
  constructor(value)
  {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  getPath() {
    const value = this.value;

    return 'images/dice_' + value + '.png'
  }
}
export default Dice;