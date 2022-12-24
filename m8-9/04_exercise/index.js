console.log('M 8-9: 4');

/**
 * ЗАВДАННЯ 4
 * 
 * part 1
 * щосекунди збільшувати значення на 1
 * - або при відкритті сторінки
 * - або після першого натискання на кнопку "increment"
 * Спробувати підходи setInterval, а також setTimeout(recursively)
 */


/**
 * part 2
 * Кнопка 'increment' повинна щосекунди збільшувати значення на 1
 * Кнопка 'decrement' повинна щосекунди зменшувати значення на 1
 * Кнопка 'stop' зупиняє відлік
 */
const refs = {
    incBtn: document.querySelector('[data-action="increment"]'),
    decBtn: document.querySelector('[data-action="decrement"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    text: document.querySelector('span'),
};
