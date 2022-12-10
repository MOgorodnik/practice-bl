console.log('M 7-8: 2');

// 2.
// Напишіть функцію для отримання
// значень Імені та Прізвища в output
// з наступної форми. Якщо хоч одне поле пусте
// вивести повідомлення - 'Both fields should be filled!'

// Додайте послідовно функціонал:
// - кнопка дізейблед якщо поля порожні
// - при зміні велью інпутів данні оновлюються
//   в полі під формою
// - перші букви імен завжди мають бути заглавними
// - застосуйте локальне сховище щоб данні зберігались
//   до виконання сабміту

const introduceForm = document.forms['introduce-form'];
const introduceFormIndex = document.forms[0];

// console.log(introduceForm);
// console.log(introduceFormIndex);

// const {fname: fnameInput, lname: lnameInput} = introduceForm.elements;
// console.log(fnameInput, lnameInput);

const textInputs = introduceForm.querySelectorAll('[type="text"]');
// console.log(textInputs);

const output = document.getElementById('output');