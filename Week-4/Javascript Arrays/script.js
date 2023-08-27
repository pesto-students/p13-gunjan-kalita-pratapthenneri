function divideArray(arr) {
  console.log(arr);
  let evenNumbers = [];
  let oddNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      // console.log('Even number',arr[i])
      evenNumbers.push(arr[i]);
    } else {
      // console.log('Odd number',arr[i])
      oddNumbers.push(arr[i]);
    }
  }
  console.log("Even Numbers are :");
  if (evenNumbers.length > 0) {
    for (let i = 0; i < evenNumbers.length; i++) {
      console.log(evenNumbers[i]);
    }
  } else {
    console.log("None");
  }

  console.log("Odd Numbers are :");
  if (oddNumbers.length > 0) {
    for (let i = 0; i < oddNumbers.length; i++) {
      console.log(oddNumbers[i]);
    }
  } else {
    console.log("None");
  }
}
let nums = [4, 2, 9, 1, 8];
//let nums = [4, 2, 9, 1, 8, 6, 12, 23, 55, 66, 11, 33, 99];
// let nums = [4, 2, 8];
divideArray(nums);
