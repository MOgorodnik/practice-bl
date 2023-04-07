console.log('Blended-4. Practice.: 4');

// 4.
// Кнопка "Зменшити" робить квадрат меншим на 10 пікселів,
// кнопка "Збільшити" - більшим на 10 пікселів.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// https://toruskit.com/blog/how-to-get-element-bounds-without-reflow/

const box = document.getElementById('box');
const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const parentEl = document.querySelector('.task-4');

parentEl.addEventListener('click', changeSize);

let size = 0;

function changeSize() {
  // ...
}

function inc() {
  // ...
}
function dec() {
  // ...
}

// `IntersectionObserver`
