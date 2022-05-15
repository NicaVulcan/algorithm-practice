var expect = chai.expect;

describe("Addition - add(num1, num2)", function() {
  it("Two numbers, should add two numbers", function() {
    var num1 = 10;
    var num2 = 24;

    var result = add(num1, num2);

    expect(result).to.eql(34);
  });

  it("One not a number, should return false", function() {
    var num1 = "a";
    var num2 = 24;

    var result = add(num1, num2);

    expect(result).to.eql(false);
  });
});

describe("Subtraction - subtract(num1, num2)", function() {
  it("should subtract the second number from the first number", function() {
    var num1 = 100;
    var num2 = 91;

    var result = subtract(num1, num2);

    expect(result).to.eql(9);
  });

  it("One not a number, should return false", function() {
    var num1 = "a1";
    var num2 = 91;

    var result = subtract(num1, num2);

    expect(result).to.eql(false);
  });
});

describe("Multiplication", function() {
  it("should multiply the two numbers", function() {
    var num1 = 7;
    var num2 = 70;

    var result = multiply(num1, num2);

    expect(result).to.eql(490);
  });

  it("One not a number, should return false", function() {
    var num1 = "a1";
    var num2 = 91;

    var result = multiply(num1, num2);

    expect(result).to.eql(false);
  });
});

describe("Division", function() {
  it("should divide the first number by the second number", function() {
    var num1 = 33;
    var num2 = 11;

    var result = divide(num1, num2);

    expect(result).to.eql(3);
  });

  it("One not a number, should return false", function() {
    var num1 = "a1";
    var num2 = 91;

    var result = divide(num1, num2);

    expect(result).to.eql(false);
  });

});
