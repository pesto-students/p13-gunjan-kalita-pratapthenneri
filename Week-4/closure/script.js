// Function to create a counter
function counter() {
  let count = 0;

  // Inner function that accesses and modifies the count variable
  return function () {
    count++;
    return count;
  };
}

// Create two instances of the counter function
const firstCounter = counter();
const secondCounter = counter();

// Arrays to store returned values
const firstValues = [];
const secondValues = [];

// Call the firstCounter function five times
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}

// Call the secondCounter function three times
for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

// Print the arrays
console.log("firstValues array: ", firstValues);
console.log("secondValues array: ", secondValues);
// console.log(`firstValues array: [${firstValues}]`);
// console.log(`secondValues array: [${secondValues}]`);
