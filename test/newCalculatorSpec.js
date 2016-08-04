import NewCalculator from '../src/newCalcualtor'

describe('new calculator', function () {
  let calculator

  beforeEach(function () {
    calculator = new NewCalculator()
  })

  it('should add numbers', function () {
    expect(calculator.add(1, 1)).toBe(2);
  });

  it('should multiple numbers', function () {
    expect(calculator.multiply(2, 2)).toBe(4);
  });
})