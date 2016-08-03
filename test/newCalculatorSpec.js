import NewCalculator from '../src/newCalcualtor'

describe('new calculator', function () {

  beforeEach(function () {
    this.calculator = new NewCalculator()
  })

  it('should add numbers', function () {
    expect(this.calculator.add(1, 1)).toBe(2);
  });

  it('should multiple numbers', function () {
    expect(this.calculator.multiply(2, 2)).toBe(4);
  });
})