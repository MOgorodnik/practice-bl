console.log('M 5-6: 9');

// 9.
// Напишіть функцію зберігання знижки.

// Функція повертає іншу функцію, яка приймає суму покупки
// і повертає фінальну суму з віднятою знижкою.

// code below

const saveDiscount = (val) => {}

// code for check
const discountSilver = saveDiscount(5);
const discountGold = saveDiscount(10);
const discountPlatinum = saveDiscount(15);

console.log(discountSilver(1000)); // 950
console.log(discountGold(1000)); // 900
console.log(discountPlatinum(1000)); // 850
