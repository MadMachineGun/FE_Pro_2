'use strict';

// Запитати у користувача два числа
let operand1 = parseFloat(prompt('Введіть перше число:'));
let operand2 = parseFloat(prompt('Введіть друге число:'));

// Перевірка, чи введені коректні числа
if (isNaN(operand1) || isNaN(operand2)) {
    alert('Будь ласка, введіть коректні числа.');
} else {
    // Складання
    console.log(`${operand1} + ${operand2} = ${operand1 + operand2}`);

    // Віднімання
    console.log(`${operand1} - ${operand2} = ${operand1 - operand2}`);

    // Множення
    console.log(`${operand1} * ${operand2} = ${operand1 * operand2}`);

    // Ділення
    if (operand2 !== 0) {
        console.log(`${operand1} / ${operand2} = ${operand1 / operand2}`);
    } else {
        console.log('Ділення на нуль неможливе.');
    }
}
