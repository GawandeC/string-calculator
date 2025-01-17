String Calculator

A simple Node.js project that implements a string calculator capable of summing numbers with customizable delimiters. The calculator can handle multiple delimiters and handle edge cases such as negative numbers and numbers greater than 1000. The goal of this project is to implement the String Calculator Kata in Node.js.

Features
Handles empty input ("") and returns 0.
Handles input with a single number, returning the same number.
Supports both comma , and newline \n as default delimiters.
Supports custom delimiters with the following syntax:
A single delimiter: //[delimiter]\n[numbers]
Supports cases for:
Summing the numbers.
Ignoring numbers larger than 1000.
Throwing errors for negative numbers and listing all of them in the error message.
Can handle any length of delimiters (e.g., //[***]\n1***2***3).
Installation
To run and use the string calculator, follow the steps below.

Prerequisites
Node.js (version 12 or higher) should be installed on your system.
Git should be installed for version control (optional).
Clone the repository
Clone the repository to your local machine.

bash
Copy
Edit
git clone https://github.com/GawandeC/string-calculator.git
Install Dependencies
Navigate to the project directory and install the necessary dependencies.

bash
Copy
Edit
cd string-calculator
npm install
Running the Application
To run the application (just the basic usage or entry point):

bash
Copy
Edit
npm start
You can add a //[delimiter] or //[delim1][delim2] section in the input to see how the calculator works with custom delimiters.

How to Use
The core functionality of the calculator is available via the add function.

javascript
Copy
Edit
const { add } = require('./src/calculator/calculator');

// Test cases
console.log(add("//|\n10|20|30"));   // Output: 60 (Custom delimiter: |)
console.log(add("//[*][%]\n1*2%3"));   // Output: 6 (Custom delimiters: *, %)
console.log(add("1,2,3"));             // Output: 6 (Default delimiter: ,)
console.log(add("//[!!!]\n1!!!2!!!3")); // Output: 6 (Custom delimiter: [!!!])
Example Input and Output
Input: ""
Output: 0

Input: "1"
Output: 1

Input: "1,2"
Output: 3

Input: "1\n2,3"
Output: 6

Input with a custom delimiter (//[*][%]\n1*2%3):
Output: 6

Input with a negative number (//;\n1;-2;3):
Throws error: Negative numbers not allowed: -2

Handling Edge Cases
Negative Numbers: If the input contains negative numbers, the calculator will throw an error with a list of the negative numbers:

javascript
Copy
Edit
add("//;\n1;-2;3");  // Throws error: Negative numbers not allowed: -2
Numbers greater than 1000: Any numbers greater than 1000 will be ignored in the calculation.

javascript
Copy
Edit
add("2,1001");  // Output: 2
Tests
We use Jest for testing the functionality of the string calculator. The tests are located in the /tests directory and can be run using the following command:

Running Tests
bash
Copy
Edit
npm test
Test Cases Example:
Empty string:

javascript
Copy
Edit
test('returns 0 for an empty string', () => {
   expect(add("")).toBe(0);
});
Custom delimiters:

javascript
Copy
Edit
test('supports multiple delimiters', () => {
   expect(add("//[*][%]\n1*2%3")).toBe(6); // Custom delimiters: *, %
});
Negative numbers:

javascript
Copy
Edit
test('throws error for negative numbers', () => {
   expect(() => add("//;\n1;-2;3")).toThrow("Negative numbers not allowed: -2");
});
Ignoring numbers greater than 1000:

javascript
Copy
Edit
test('ignores numbers greater than 1000', () => {
   expect(add("1000,1001")).toBe(1000);
});
File Structure
Here is the layout of the project:

bash
Copy
Edit
/string-calculator
├── /node_modules             # Node modules, automatically generated
├── /src                      # Application source code
│   ├── /calculator           # String calculator logic
│   │   └── stringCalculator.js     # Add function
├── /tests                    # Unit tests
│   ├── stringCalculator.test.js    # Tests for calculator logic
└── package.json              # Project metadata and dependencies
Contributing
If you'd like to contribute, feel free to submit an issue or a pull request! You can also help improve the project by:

Fixing bugs or adding new features
Writing additional tests
Updating documentation
License
This project is licensed under the MIT License - see the LICENSE file for details.
