console.log('M 5-6: 3');

// 3. 
// Виконай рефакторинг makeDish так, щоб не потрібно було
// Щоразу передавати ім'я шефа.

// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа під час її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Tom", "apple pie");
// makeDish("Poly", "muffins");

// code below
const makeShef = name => {}

// code for check
const tom = makeShef("Tom");
tom("apple pie"); // Tom is cooking apple pie
tom("beef stew"); // Tom is cooking beef stew

const poly = makeShef("Poly");
poly("pancakes"); // Poly is cooking pancakes
poly("eggs and bacon"); // Poly is cooking eggs and bacon
