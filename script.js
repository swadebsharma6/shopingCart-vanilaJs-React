// Catch DOM Element
const button = document.getElementById('button');
const price = document.getElementById('price');
const total = document.getElementById('total');


const productPrice = 5000;
let totalPrice = 0;

// set product price initially
price.innerText = `৳ ${6000}`;
total.innerText = `Total: ৳ 0`

button.addEventListener('click', ()=>{
      // console.log('clicked')
      totalPrice += productPrice;

      // update UI
      total.innerText = `৳ ${totalPrice}`
});

// console.log('btn clicked', totalPrice)

