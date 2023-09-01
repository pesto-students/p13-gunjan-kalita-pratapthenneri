// Calculator class
class Calculator {
  // Add method
  add(a, b) {
    return a + b;
  }

  // Subtract method
  subtract(a, b) {
    return a - b;
  }

  // Multiply method
  multiply(a, b) {
    return a * b;
  }

  // Divide method
  divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Cannot divide by zero");
    }
  }
}

// ScientificCalculator class extending Calculator class
class ScientificCalculator extends Calculator {
  // Square method
  square(a) {
    return a * a;
  }

  // Cube method
  cube(a) {
    return a * a * a;
  }

  // Power method
  power(a, b) {
    return Math.pow(a, b);
  }
}

// Create an instance of ScientificCalculator
const scientificCalc = new ScientificCalculator();

// Using call to invoke add method of Calculator
const addResult = Calculator.prototype.add.call(scientificCalc, 10, 5);
console.log("Using 'call' method to add:", addResult);

// Using apply to invoke subtract method of Calculator
const subtractResult = Calculator.prototype.subtract.apply(
  scientificCalc,
  [10, 5]
);
console.log("Using 'apply' method to subtract:", subtractResult);

// Using bind to create multiplyByTwo method
const multiplyByTwo = Calculator.prototype.multiply.bind(scientificCalc, 2);
console.log("Using 'bind' method for multiplyByTwo:", multiplyByTwo(5));

// Using bind to create powerOfThree method
const powerOfThree = scientificCalc.power.bind();
console.log("Using 'bind' method for powerOfThree:", powerOfThree(2, 3));
