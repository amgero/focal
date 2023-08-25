// take args from input
const args = process.argv.slice(2);

// change args from string to numbers
const num1 = Number(args[0]);
const num2 = Number(args[1]);

// define sum function
const calculateSum = function(num1, num2) {
  return num1 + num2;
};

//calculate the sum using the sum function
const result = calculateSum(num1, num2);

// display result
console.log(result);