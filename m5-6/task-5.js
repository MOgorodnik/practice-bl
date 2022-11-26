console.log('M 5-6: 5');

// 5.
// Виправте помилки, щоб код працював

const product = {
    price: 5000,
    showPrice() {
      console.log(this.price);
    },
 };
 
 function callAction(action) {
    action();
 }

 callAction(product.showPrice);