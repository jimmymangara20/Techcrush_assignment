const path = require('path');

const colors = require('colors');

const calculator = require('./my_module/calculator.js');


const currentFile = __filename;
const baseName = path.basename(currentFile);
console.log(colors.yellow(`Base filename: ${baseName}`));

// Use calculator module with colored outputs
const a = 20;
const b = 5;

console.log(colors.red(`Addition (${a} + ${b}): ${calculator.add(a, b)}`));
console.log(colors.blue(`Subtraction (${a} - ${b}): ${calculator.subtract(a, b)}`));
console.log(colors.green(`Multiplication (${a} * ${b}): ${calculator.multiply(a, b)}`));
console.log(colors.cyan(`Division (${a} / ${b}): ${calculator.divide(a, b)}`));