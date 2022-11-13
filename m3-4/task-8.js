console.log('M 3-4: 8');

// 8. 
// Масив об'єктів
const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
// Task 1

// Отримать масив імен всіх юзерів (поле - name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getItemsNames = data => {
  // code here
}
// console.log(getItemsNames(users));


// Task 2

// Отримать масив об`єктiв юзерів за кольором очей (поле - eyeColor).
// console.log(getUsersWithEyeColor(users, 'blue')); 
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithEyeColor = (data, color) => {
  // code here
}
// console.table(getUsersWithEyeColor(users, 'blue'), ['name', 'eyeColor']);


// Task 3

// Отримать масив імен юзерів по статі (стать - gender)
// console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getUsersByGender = (data, gen) => {
  // code here
}
// console.table(getUsersByGender(users, 'male'))


// Task 4

// Отримать масив неактивних юзерів (поле - isActive).
// console.log(getInactiveUsers(users)); 
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getInactiveUsers = data => {
  // code here
}
// console.table(getInactiveUsers(users), ['name', 'isActive']); 


// Task 5

// Отримать юзера (не масив) за email (поле email, унікальний).
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}

const getUserWithEmail = (data, email) => {
  // code here
}
// console.table(getUserWithEmail(users, 'shereeanthony@kog.com').name);
// console.table(getUserWithEmail(users, 'elmahead@omatom.com').name);


// Task 6

// Отримать масив юзерів віком від min до max

// console.log( getUsersWithAge( users, 20, 30 ) );
// [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log( getUsersWithAge( users, 30, 40 ) );
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const getUsersWithAge = (data, min, max ) => {
  // code here
}
// console.log( getUsersWithAge( users, 20, 30 ));
// console.table( getUsersWithAge( users, 20, 30 ), ['name', 'age', 'gender']);
// console.table( getUsersWithAge( users, 30, 40 ), ['name', 'age']);


// Task 7

// Отримать загальний баланс (поле balance) всіх юзерів.
// console.log(calculateTotalBalance(users));
// 20916

const calculateTotalBalance = data => {
  // code here
}
// console.log(calculateTotalBalance(users));


// Task 8

// Масив імен всіх користувачів у яких є друг з заданим іменем.
// console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

const getUsersWithFriend = (data, friendName) => {
  // code here
}
// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));


// Task 9

// Масив імен (поле - name) людей, відсортованих в залежності від кількості їх друзів (поле - friends)
// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getNamesSortedByFriendsCount = data => {
  // code here
}
// console.table(getNamesSortedByFriendsCount(users), ['name', 'friends']);


// Task 10

// Отримати масив всіх навичок всіх юзерів (поле - skills), при цьому не має буть
// повторяючихся умінь і вивести їх в алфавітному порядку.
// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

const getSortedUniqueSkills = data => {
  // code here
}
// console.log(getSortedUniqueSkills(users));