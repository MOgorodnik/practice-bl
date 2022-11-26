console.log('M 5-6: 11');

// 11.
// Напиши функцію конструктор User для створення користувача з такими властивостями
// a. userName - ім'я, рядок
// b. age - вік, число
// c. numbersOfPost - кількість постів, число
// d. клас* очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

// Додай метод getInfo(), який повертає рядок:
// `Користувачеві ${} ${} років, в нього ${} публікацій.`

const User = function (userObj) {}

// code for check
const polly = new User({ userName: 'Polly', age: 30, numbersOfPost: 15 });

console.table(polly);
polly.getInfo();