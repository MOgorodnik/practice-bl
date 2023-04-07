console.log('Blended-4. Practice.: 8');

// 8.
// При кліці на кожну з кнопок підсумовуються значення з data-атрибутів.
// Після натискання на кнопку "Вивести результат" виводиться сума значення,
// а також статистика з інформацією про те,
// яка кнопка була натиснута скільки разів.
// wrong decision - https://blog.kevinchisholm.com/javascript/javascript-closures-getters-setters/

const statList = document.querySelector('.statList');
const resultSection = document.querySelector('#resultSection');
const resultButton = document.querySelector('#resultButton');
let total = 0;

statList.addEventListener('click', onBtnClick);
resultButton.addEventListener('click', onResBtnClick);

function onBtnClick(e) {
  // ...
}

function onResBtnClick() {
  // ...
}