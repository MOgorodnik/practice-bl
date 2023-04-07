console.log('Blended-4. Practice.: 3');

// 3.
// Кнопка "Приховати" ховає текст інпуту на (****)
// і замінює назву кнопки на "Розкрити",
// у разі повторного натискання текст знову
// стає доступним і кнопка набуває початкового вигляду.

const VISIBLE = 'Приховати';
const HIDDEN = 'Розкрити';
const TYPE_TEXT = 'text';
const TYPE_PASSWORD = 'password';
const passwordInput = document.getElementById('passwordInput');
const passwordButton = document.getElementById('passwordButton');

passwordButton.addEventListener('click', togglePasswordShow);

function togglePasswordShow() {
  // ...
}
