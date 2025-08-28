
import { products } from "./products.js";
import { saveSession } from "./session.js";
import { updateCartCounter, printCart, getTotal , getCart} from "./view.js";

let cart = getCart();
let total = getTotal();

 export let buy = (productId) => {
  let selected = products.find((item) => item.id === productId);
  let cartProduct = cart.find((item) => item.id === productId);
if (cartProduct) {
  cartProduct.quantity += 1;
} else {
  const product = { ...selected, quantity: 1 };
  cart.push(product);
}
  total = calculateTotal(cart);
  updateCartCounter(cart);
  saveSession(cart,total)
  printCart(cart);
};

export let cleanCart = () => {
  cart.splice(0, cart.length);
  total = 0
  updateCartCounter(cart);
  printCart(cart);
  saveSession(cart,total);
};



export let calculateTotal = (cart) => {
  total = 0
 cart.forEach((item) => {
    item.offer
      ? (total += applyPromotionsCart(item))
      : (total += item.price * item.quantity);
  });
  return  total.toFixed(2);
};


export let applyPromotionsCart = (item) => {
  
  let price = 0;
if (item.offer && item.quantity >= item.offer.number){ 
    price = (item.price * item.quantity) - (item.price * item.quantity * item.offer.percent) / 100
} else {
    price = item.price * item.quantity;
}
  
  return price;
};


export let removeFromCart = (id) => {
  let item = cart.find((item) => item.id === id);
  item.quantity > 1 
  ? item.quantity -= 1
  : cart.splice(cart.indexOf(item), 1);
  total = calculateTotal(cart);
  updateCartCounter(cart);
  printCart(cart);
  saveSession(cart,total);
};


