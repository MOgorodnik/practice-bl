console.log('tests.js');

const numbers = [1,2,3,4]

numbers.forEach(
  function (number) {
    console.log(this.a);
  },
  {a: '777777'}
)