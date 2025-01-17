// Input: a string of comma-separated numbers
// Output: an integer, sum of the numbers
// Examples:

// Input: “”, Output: 0
// Input: “1”, Output: 1
// Input: “1,5”, Output: 6
// Input: "1\n2,3", Output:6

function add(numbers) {
    // Handle the empty string case
    if (!numbers) {
        return 0;
    }
    
    // Replace newlines (\n) with commas and split the string by commas
    const numberArray = numbers.replace(/\n/g, ',').split(',').map(Number);
    
    // Sum up the numbers in the array
    return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;

  