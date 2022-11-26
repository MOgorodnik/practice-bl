console.log('M 5-6: 2');

// 2. 
// Напишіть дві функції
// makeProduct(name, price, callback) - приймає:
//    назву,
//    ціну товару,
//    callback.

// Функція створює об'єкт товара, додаючи йому унікальний
// значення в властивість id і викликає callback
// передаючи йому створений об'ект.
// https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID

// showProduct(product) - це коллбек що приймає
//  об'ект продукта і виводить його в консоль

// code below
const makeProduct = (name, price, callback) => {}

const showProduct = product => console.table(product);

// code for check
makeProduct("Fish", 350, showProduct)
makeProduct("Tea", 50, showProduct)