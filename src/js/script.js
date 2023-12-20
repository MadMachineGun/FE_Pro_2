'use strict';

let operand1 = parseFloat(prompt('Введіть перше число:'));
let operand2 = parseFloat(prompt('Введіть друге число:'));

if (isNaN(operand1) || isNaN(operand2)) {
    alert('Будь ласка, введіть коректні числа.');
} else {
    console.log(`${operand1} + ${operand2} = ${operand1 + operand2}`);
    console.log(`${operand1} - ${operand2} = ${operand1 - operand2}`);
    console.log(`${operand1} * ${operand2} = ${operand1 * operand2}`);

    if (operand2 !== 0) {
        console.log(`${operand1} / ${operand2} = ${operand1 / operand2}`);
    } else {
        console.log('Ділення на нуль неможливе.');
    }
}

