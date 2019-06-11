// 1. What happens when you add a number and string together? Concatenation! Add/Concatenate the variables 'one', 'two' and 'three' in the correct order so that you can assign the value of sum to be '1081'.
let one = 10;
let two = '8';
let three = 1;

let sum = one + two + three


// ------------------------------------------


// 2. write a loop below that starts at 20 and ends at 100. Check each number,
// if the number is divisible by 3, add it to the 'threes' array.
let threes = []
for (i = 20; i < 100; i++) {
  // i starts at 20; i has to be LESS than 100; everytime i counts ++ moves it up;
  if (i % 3 === 0) {
    // if i modulus by 3 and returns 0 push it to the array. i feel like a moron.
    threes.push(i);
  }



}




// ------------------------------------------


// 3. write code to find the class average given the following test scores

let scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98];

let scores3 = [99, 34, 77]
let average;


// code below
//sum the values from the array
function findAverage(array) {
  let number = 0
  for (let index = 0; index < array.length; index++) {
    const score = array[index];
    console.log(score)
    number += score;
    console.log(number)
  }
  average = number / array.length
  return average;
}
//get the length of the array
//divide the sum by the the lenght of the array.

findAverage(scores);
