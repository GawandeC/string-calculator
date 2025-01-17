// Input: a string of comma-separated numbers
// Output: an integer, sum of the numbers
// Examples:

// Input: “”, Output: 0
// Input: “1”, Output: 1
// Input: “1,5”, Output: 6
// Input: "1\n2,3", Output:6
// Input: "//;\n1;2", Output: 3
// Input: "//;\n1;-2;3", Output: throw error
// Input: "2,1001", Output: 2
// Input: "//***\n1***2***3", Output: 6

function add(numbers) {
    // Handle the empty string case
    if (!numbers) {
        return 0;
    }
    
    let delimiter = /,|\n/; // Default delimiters: comma and newline
    let negatives = []; // Array to store negative numbers

    // Check for custom delimiter with any length and characters
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2); // Split the first line (delimiter definition) and the rest
        let customDelimiter = parts[0].slice(2); // Get the custom delimiter after "//"

        // Handle square bracket custom delimiters, e.g., [!!!]
        if (customDelimiter.startsWith("[") && customDelimiter.endsWith("]")) {
            customDelimiter = customDelimiter.slice(1, -1); // Remove the square brackets
        }

        // Escape special characters for regex compatibility
        const escapedDelimiter = customDelimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

        delimiter = new RegExp(escapedDelimiter); // Create a regular expression using the custom delimiter
        numbers = parts[1]; // Update the numbers string to exclude the delimiter line
    }

    // Split the numbers string by the delimiter(s)
    const numberArray = numbers.split(delimiter).map(Number);

    // Filter out numbers greater than 1000
    const validNumbers = numberArray.filter(num => num <= 1000);

    // Check for negative numbers
    validNumbers.forEach(num => {
        if (num < 0) {
            negatives.push(num);
        }
    });

    // If there are negative numbers, throw an error
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
    // Sum up the numbers in the array
    return validNumbers.reduce((sum, num) => sum + num, 0);
}

module.exports = add;

  