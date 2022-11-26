console.log('M 5-6: 13');

// 13.
// Напиши клас Client який створює об'єкт
// з властивостями:
//   login,
//   email

// Оголоси приватні властивості:
//   #login
//   #email,

// доступ до яких зробити через геттер та сеттер:
//   getClientData // повертає об'єкт кліента
//   changeEmail

// code below
class Client {}

// code for check
const client = new Client('mango', 'mango@gmail.com');
client.changeEmail = 'mango@gmail.com';

console.log(client.getClientData.login);
console.log(client.getClientData.email);

//  const client2 = new Client({email: "bob@gmail.com", login: "Bob"});
//  console.log(client2.getClientData.login);
//  console.log(client2.getClientData.email);
