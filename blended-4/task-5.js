console.log('Blended-4. Practice.: 5');

// 5.
// Навісьте слухач за кліком і визначте,
// коли клік відбувається всередині елемента з id "place"
// і коли клік припадає поза зоною елемента
// https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
console.log('You clicked outside the place!');
console.log('You clicked inside the place!');

const place = document.querySelector(`#place`);

window.addEventListener(`click`, checkClickPace);

function checkClickPace() {
  // ...
}
