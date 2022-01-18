class Calculator {
  constructor(a, b) {
    this.numOne = a;
    this.numTwo = b;
  }

  add() {
    if (this.numOne === null) {
      return 'First number empty';
    } else if (this.numTwo === null) {
      return 'Second number empty';
    } else return this.numOne + this.numTwo;
  }

  subtract() {
    return this.numOne - this.numTwo;
  }

  divide() {
    if (this.numTwo <= 0) {
      return 'undefind';
    } else if (this.numOne === '') {
      return 'First number empty';
    } else return this.numOne / this.numTwo;
  }

  multiple() {
    if (this.numOne === null) {
      return 'First number empty';
    } else if (this.numTwo === null) {
      return 'Second number empty';
    } else return this.numOne * this.numTwo;
  }
}

module.exports = Calculator;
