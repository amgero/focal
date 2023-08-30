//write a program that takes a single parameter from command line, a number, and rolls that many six-sided dice
// node dice-rolle.js 3 --> Rolled 3 dice: output 2, 6, 5
//Math.random

const args = process.argv.slice(2);

if (args.length !== 1) { //to ensure that there is only one argument passed
  console.log("Please enter only one argument");
} else {
  const numDice = Number(args[0]);
  
  if (isNaN(numDice) || numDice <= 0) { //if it isnt a valid int, ie; less than 1, ask to provide positive int input
    console.log("Please provide a positive integer.");
  } else {
    const rolls = [];
    for (let i = 0; i < numDice; i++) {
      const roll = Math.floor(Math.random() * 6) + 1; //math.floor to round the randomly generated number between 1-6 up
      rolls.push(roll); //to add each roll to an array to be outputted to console
    }
    console.log(`Rolled ${numDice} dice: ${rolls.join(', ')}`);
  }
}


