// Input: a string of comma-separated numbers
// Output: an integer, sum of the numbers
// Examples:

// Input: “”, Output: 0
// Input: “1”, Output: 1
// Input: “1,5”, Output: 6
// Input: "1\n2,3", Output:6
// Input: "//;\n1;2", Output: 3
// InputL "//;\n1;-2;3", Output: throw error

function add(numbers) {
    // Handle the empty string case
    if (!numbers) {
        return 0;
    }
    
    let delimiter = /,|\n/; // Default delimiters: comma and newline
    let negatives = []; // Array to store negative numbers

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2); // Split the first line (delimiter definition) and the rest
        delimiter = new RegExp(parts[0].slice(2)); // Extract the delimiter from "//[delimiter]"
        numbers = parts[1]; // Update the numbers string to exclude the delimiter line
    }

    // Split the numbers string by the delimiter(s)
    const numberArray = numbers.split(delimiter).map(Number);
    // Check for negative numbers
    numberArray.forEach(num => {
        if (num < 0) {
            negatives.push(num);
        }
    });

    // If there are negative numbers, throw an error
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
    // Sum up the numbers in the array
    return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = add;

  