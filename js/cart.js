/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableBody = document.getElementsByTagName('tbody')
  tableBody.innerHTML = ' ';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.getElementsByTagName('tbody')

  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    let createRow = document.createElement('tr')
    // TODO: Create a TD for the delete link, quantity,  and the item
    let deleteLink = document.createElement('td')
    let quantity = document.createElement('td')
    let product = document.createElement('td')

    deleteLink.innerHTML = '<a href="#" id=" ' + i + ' "> Delete </a>'

    quantity.textContent = cart.items[i].quantity
    product.textContent = cart.items[i].product

    // console.log(product);
    // console.log(quantity);
    // console.log(deleteLink);

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    createRow.appendChild(deleteLink)
    createRow.appendChild(quantity)
    createRow.appendChild(product)
    table.appendChild(createRow)
  }

}


function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  let toDelete = event.target.id
  cart.removeItem(toDelete);

  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();

  // TODO: Re-draw the cart table
  showCart();

}

// This will initialize the page and draw the cart on screen
renderCart();