// Input: a string of comma-separated numbers
// Output: an integer, sum of the numbers
// Examples:

// Input: “”, Output: 0
// Input: “1”, Output: 1
// Input: “1,5”, Output: 6

function add(numbers) {
    // If the input is empty, return 0
    if (!numbers) return 0;
  
    // Split the string by commas, parse them into integers, and calculate the sum
    return numbers
      .split(",")
      .map(Number)
      .reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;
  