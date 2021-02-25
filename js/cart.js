/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;


function loadCart() {
  let getItem = localStorage.getItem('cart')
  const cartItems = JSON.parse(getItem) || [];
  cart = new Cart(cartItems);

}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}


// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let toRemove = document.getElementsByTagName('tbody')
  toRemove.textContent = '';

  // console.log(toRemove);

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tableBody = document.createElement('tbody');
  // table.appendChild.tableBody

  // TODO: Iterate over the items in the cart

  function createData() {
    for (let i = 0; i < cart.length; i++) {

    }
  }

  // TODO: Create a TR
  let tableRow = document.createElement('tr')

  // TODO: Create a TD for the delete link, quantity,  and the item
  createData();

  let tableData1 = document.createElement('td');
  tableData1.textContent = 'Link'

  let tableData2 = document.createElement('td');
  tableData2.textContent = 'Quantity'

  let tableData3 = document.createElement('td');
  tableData3.textContent = 'item'

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  tableRow.appendChild.tableData1;
  tableRow.appendChild.tableData2;
  tableRow.appendChild.tableData3;

  tableBody.appendChild.tableRow
  table.appendChild.tableBody
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
