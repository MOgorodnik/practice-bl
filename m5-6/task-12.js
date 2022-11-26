console.log('M 5-6: 12');

// 12.
// Напиши функцію конструктор Storage який створює об'єкти
// Для управління складом товарів.

// При виклику отримуватиме один агрумент - початковий масив товарів,
// і записувати їх у властивість items.

// Додай методи класу:
//    getItems() - повертайте масив товарів
//    addItems(item) - отримує новий товар та додає його до поточних
//    removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних

// code below

const Storage = function (arr) {}

// code for check
const storage = new Storage(['apple', 'banana', 'mango']);

console.table(1, storage);
console.log(3, storage.addItem('kivi'));
console.log(2, storage.getItems());
// console.log(3, storage.addItems('kivi', 'grape'));
console.log(4, storage.removeItem("apple"));
