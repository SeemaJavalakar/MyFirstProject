let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let account= document.querySelector('.user-account');

document.querySelector('#user-btn').onclick=()=>
{
  account.classList.add('active');
}

document.querySelector('#close-acount').onclick=()=>
{
  account.classList.remove('active');
}


let myOrder = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick=()=>
{
  myOrder.classList.add('active');
}

document.querySelector('#close-orders').onclick=()=>
{
myOrder.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>
{
  shoppingCart.classList.add('active');
}

document.querySelector('#close-cart').onclick=()=>
{
shoppingCart.classList.remove('active');
}

window.onscroll=()=>
{
  navbar.classList.remove('active');
}