console.log('M 8-9: 3');

/**
 * ЗАВДАННЯ 3
 *
 * Якщо імейл і пароль користувача збігаються,
 * при сабміті зберігай дані з форми в локальне сховище
 * змінюй кнопку 'log in' на 'log out' і роби поля введення
 * недоступними для зміни.
 *
 * При перезавантаженні сторінки, якщо користувач залогінений,
 * ми повинні бачити 'log out'-кнопку
 * і поля з даними користувача недоступні для зміни.
 *
 * Клік по кнопці 'log out' повертає все в первісний вигляд
 * і видаляє дані користувача з локального сховища.
 *
 * Якщо введені дані не збігаються з потрібними даними,
 * викликати аlert/console і повідомляти про помилку.
 */

const USER_DATA = {
    email: 'user@ukr.io',
    password: 'qwerty',
};