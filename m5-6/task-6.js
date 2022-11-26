console.log('M 5-6: 6');

// 6.
// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// Яка застосовується до кожного елементу масиву.

// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback

// callback функції повинна множити елементи на 2

// write code here
const each = (arr, cb) => {}

// code for check
const array = [3, 5, 6, 34, 8, 83, 12, 34];
console.log(each(array, (value) => value * 2));
console.log(each(array, (value) => value * 10));
