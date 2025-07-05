/****************
 * LOOPS IN JAVASCRIPT
 * 1. For Loop
 * 2. While Loop
 * 3. Do-While Loop
 * 4. forEach Loop (Arrays)
 * 5. for...of Loop (Arrays)
 * 6. for...in Loop (Objects)
 ****************/

// 1. For Loop - Basic counting
console.log("FOR LOOP EXAMPLE:");
for (let i = 0; i < 5; i++) {
    console.log(`Count: ${i}`);
}

// 2. While Loop - Runs while condition is true
console.log("\nWHILE LOOP EXAMPLE:");
let count = 0;
while (count < 3) {
    console.log(`While count: ${count}`);
    count++;
}

// 3. Do-While Loop - Runs at least once
console.log("\nDO-WHILE LOOP EXAMPLE:");
let i = 0;
do {
    console.log(`Do-While count: ${i}`);
    i++;
} while (i < 3);

// 4. forEach Loop (for Arrays)
console.log("\nFOREACH LOOP EXAMPLE:");
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(item, index) {
    console.log(`${index + 1}. ${item}`);
});

// 5. for...of Loop (for Arrays)
console.log("\nFOR...OF LOOP EXAMPLE:");
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color);
}

// 6. for...in Loop (for Objects)
console.log("\nFOR...IN LOOP EXAMPLE:");
const person = {
    name: 'dhruvi',
    age: 23,
    job: 'Developer'
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

/*
 * CALLBACK FUNCTIONS
 * 1. Basic Callback
 * 2. Callback with parameters
 * 3. Array methods with callbacks
*/

// 1. Basic Callback Example
console.log("\nBASIC CALLBACK EXAMPLE:");
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// 2. Callback with parameters
console.log("\nCALLBACK WITH PARAMETERS EXAMPLE:");
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    console.log(x + y);
}

function multiply(x, y) {
    console.log(x * y);
}

calculate(5, 3, add);       // Output: 8
calculate(5, 3, multiply);  // Output: 15

// 3. Array methods with callbacks (map, filter, reduce)
console.log("\nARRAY METHODS WITH CALLBACKS:");

const numbers = [1, 2, 3, 4, 5];

// Map - transforms each element
const squared = numbers.map(num => num * num);
console.log("Squared numbers:", squared);

// Filter - keeps only matching elements
const evens = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// Reduce - reduces to single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum of numbers:", sum);
