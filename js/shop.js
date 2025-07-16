// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
import { products } from "./products.js";
import { saveSession, loadSession } from "./session.js";
// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
import { cart , total, updateCartCounter, printCart} from "./view.js";
// ** Nivell I **

// Exercise 1
 export const buy = (productId) => {
  // 1. Loop for to the array products to get the item to add to cart
  let selected = products.find((item) => item.id === productId);
  // 2. Add found product to the cart array
  let cartProduct = cart.find((item) => item.id === productId);
if (cartProduct) {
  cartProduct.quantity += 1;
} else {
  const product = { ...selected, quantity: 1 };
  cart.push(product);
}
  // console.log(cart);
  updateCartCounter(cart);
  printCart();
  saveSession(cart,total)
};

// Exercise 2
export const cleanCart = () => {
  cart.splice(0, cart.length);
  total = 0
  saveSession(cart,total);
};


// Exercise 3
export const calculateTotal = () => {
  // Calculate total price of the cart using the "cartList" array
  total = 0
 cart.forEach((item) => {
    item.offer
      ? (total += applyPromotionsCart(item))
      : (total += item.price * item.quantity);
  });
  return  total.toFixed(2);
};

// Exercise 4
export const applyPromotionsCart = (item) => {
  
  let price = 0;
if (item.offer && item.quantity >= item.offer.number){ 
    price = (item.price * item.quantity) - (item.price * item.quantity * item.offer.percent) / 100
} else {
    price = item.price * item.quantity;
}
  
  return price;
};


// ** Nivell II **

// Exercise 7
export const removeFromCart = (id) => {
  let item = cart.find((item) => item.id === id);
  item.quantity > 1 
  ? item.quantity -= 1
  : cart.splice(cart.indexOf(item), 1);
  
  updateCartCounter(cart);
  printCart();
  saveSession(cart,total);
};

