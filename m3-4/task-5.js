console.log('M 3-4: 5');

// 5.
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначеного параметра
// Очікуваний результат ({a: 1, b: 2}, 'b') => {a: 1}

const updateObject = (obj, removeKey) => {
// code here
};

console.log(updateObject({a: 1, b: 2}, 'b'));

//https://coderoad.ru/208105/%D0%9A%D0%B0%D0%BA-%D1%83%D0%B4%D0%B0%D0%BB%D0%B8%D1%82% D1%8C-%D1%81%D0%B2%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%BE-%D0%B8%D0%B7-%D0%BE %D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%B0-JavaScript
//=======================

//5.1 Напишіть функцію updateObject, яка приймає об'єкт та повертає
//новий об'єкт без зазначених параметрів
//Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

const updateObject2 = (obj, ...removeKeys) => { // obj, [b, a]
    // code here
};

const res = updateObject2({a: 1, b: 2, c: 3}, 'b', 'a')
console.log(res);