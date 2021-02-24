/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.

function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  
  for (let i = 0 ; i< Product.allProducts.length ; i++) {
    let options= document.createElement('option');
    options.textContent = Product.allProducts[i].name ;
    selectElement.appendChild(options);

  }
  
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  
}

let bagQuantity = 0;
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let items = document.getElementById('items').value
  // TODO: get the quantity
    // TODO: suss out the item picked from the select list
    let quantity = document.getElementById('quantity').value
    // TODO: using those, add one item to the Cart
    let itemAndQuantity ;
    bagQuantity += parseInt(quantity)
  itemAndQuantity = items + ", " + bagQuantity 
  // console.log(items);
  // console.log(quantity); 
  console.log(itemAndQuantity);
}

let itemsInTheCart = 0;
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let itemCount = document.getElementById('itemCount')
  let quantity = document.getElementById('quantity').value
  itemsInTheCart += parseInt(quantity)
  itemCount.textContent = itemsInTheCart
  console.log(itemCount);
}


// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  let quantity = document.getElementById('quantity').value
  let items = document.getElementById('items').value
  let list = document.createElement("li")
  list.textContent = items + ", " + quantity 
}

  // TODO: Add a new element to the cartContents div with that information
  let cartContet = document.getElementById('cartContents')
  cartContet.textContent = list

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
