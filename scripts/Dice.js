class Dice {
  constructor(value)
  {
    this.value = value;
  }

  getPath() {
    const value = this.value;

    return 'images/dice_' + value + '.png'
  }
}
export default Dice;