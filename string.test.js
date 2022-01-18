const stringLength = require('./string');
const capitalizedString = require('./capitalize');
const reverseString = require('./reverseString');
const Calculator = require('./calculator');

test('Should return length of string', () => {
  const text = 'hello';

  const recivedLength = stringLength(text);

  expect(recivedLength).toEqual(5);
  expect(recivedLength).toBeGreaterThanOrEqual(1);
  expect(recivedLength).toBeLessThanOrEqual(10);
});

test('String should be reversved', () => {
  const text = 'help';

  const receivedReverse = reverseString('help');

  expect(receivedReverse).toEqual('pleh');
});

test('Capitalization', () => {
  const text = 'nice';

  const recievedResult = capitalizedString(text);

  expect(recievedResult).toBe('Nice');
});

describe('Calculation', () => {
  const calculator = new Calculator(5, 4);
  const calEmpty = new Calculator(null, 5);
  const calSecond = new Calculator(4, null);

  test('Addition expected', () => {
    expect(calculator.add()).toBe(9);
    expect(calEmpty.add()).toBe('First number empty');
    expect(calSecond.add()).toBe('Second number empty');
  });

  test('Subtraction', () => {
    expect(calculator.subtract()).toBe(1);
    expect(calEmpty.subtract()).toBe(-5);
    expect(calSecond.subtract()).toBe(4);
  });

  test('Multiplication', () => {
    expect(calculator.multiple()).toBe(20);
    expect(calSecond.multiple()).toBe('Second number empty');
    expect(calEmpty.multiple()).toBe('First number empty');
  });

  test('Division', () => {
    expect(calculator.divide()).toBe(1.25);
    expect(calSecond.divide()).toBe('undefind');
    expect(calEmpty.divide()).toBe(0);
  });
});
