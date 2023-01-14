console.log('tests.js');

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: 'mango@mail.com' });

console.log(User.isEmailTaken('poly@mail.com'));
console.log(User.isEmailTaken('mango@mail.com'));
