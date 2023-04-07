console.log('Blended-4. Practice.: 7');

// 7.
// Під час кліка на коло воно має слідувати за курсором.
// Під час повторного кліка він стає в початкове положення.
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
// https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY

const outerCircle = document.querySelector('.outerCircle');
const innerCircle = document.querySelector('.innerCircle');

outerCircle.addEventListener('click', startMove);

function startMove(e) {
    // ...
}

function onInnerCircleClick(e) {
    // ...
}

function throttle(callback, delay = 1000) {
  let shouldWait = false;

  return (...args) => {
    if (shouldWait) return;

    callback(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delay);
  };
}
function debounce(callback, delay = 1000) {
  var time;
  return (...args) => {
    clearTimeout(time);
    time = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
