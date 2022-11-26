console.log('M 5-6: 10');

// 10.
// Напишіть функції використовуючи колбеки.
// Функція повертає результат іншої функції,
// якщо було прийнято колбек,
// або значення якщо параметр колбек відсутній.

function one(callback) {}
function two(callback) {}
function three(callback) {}
function four(callback) {}
function five(callback) {}
function six(callback) {}
function seven(callback) {}
function eight(callback) {}
function nine(callback) {}

function plus(a) {}
function minus(a) {}
function divide(a) {}
function mult(a) {}

console.log(one(plus(three()))); // 4
console.log(four(mult(three()))); // 12
console.log(four(divide(two())));
