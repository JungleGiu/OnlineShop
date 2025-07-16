import {
  buy,
  cleanCart,
  removeFromCart,
  calculateTotal,
  applyPromotionsCart,
} from "./shop.js";
import { loadSession, saveSession } from "./session.js";

export let { cart, total } = loadSession();

export const updateCartCounter = (cart) => {
  let cartCounter = document.getElementById("count_product");
  cartCounter.textContent = cart.length;
  cartCounter.classList.remove("bg-dark", "bg-danger");
  cartCounter.classList.add(cart.length > 0 ? "bg-danger" : "bg-dark");
};

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = parseInt(e.currentTarget.dataset.productId);
    buy(id);
  });
});

document.querySelector("#clean-cart").addEventListener("click", (e) => {
  cleanCart();
  updateCartCounter(cart);
  printCart();
});

export const printCart = () => {
  const list = document.querySelector("#cart_list");
  list.innerHTML = "";
  let totalPrice = document.querySelector("#total_price");
  cart.forEach((item) => {
    let row = document.createElement("tr");
    row.setAttribute("scope", "row");
    list.appendChild(row);
    let name = document.createElement("th");
    name.textContent = item.name;
    row.appendChild(name);
    let price = document.createElement("td");
    price.textContent = item.price;
    row.appendChild(price);
    let quantity = document.createElement("td");
    quantity.textContent = item.quantity;
    row.appendChild(quantity);
    let discount = document.createElement("td");
    discount.textContent = applyPromotionsCart(item);
    row.appendChild(discount);
    let removeButton = document.createElement("button");
    let addButton = document.createElement("button");
    addButton.textContent = "+";
    addButton.classList.add("btn");
    addButton.classList.add("rounded-pill");
    addButton.setAttribute(
      "style",
      "border:1px solid black; border-radius:10px; padding:10px ; margin:5px;"
    );
    row.appendChild(addButton);
    addButton.addEventListener("click", () => buy(item.id));
    removeButton.textContent = "-";
    removeButton.classList.add("btn");
    removeButton.classList.add("rounded-pill");
    removeButton.setAttribute(
      "style",
      "border:1px solid black; border-radius:10px; padding:10px ; margin:5px;"
    );
    row.appendChild(removeButton);

    removeButton.addEventListener("click", () => removeFromCart(item.id));
  });
  totalPrice.textContent = calculateTotal();
  saveSession(cart, total);
};
