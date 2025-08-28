const session = {
    cart: [] ,
    total : 0
}
 
localStorage.setItem("cart", JSON.stringify(session.cart));
localStorage.setItem("total", session.total.toString());

export const saveSession = (cart, total) => {
  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("total", total.toString());
};

export const loadSession = () => {
 const cart = JSON.parse(localStorage.getItem("cart")) ;
 let total = parseFloat(localStorage.getItem("total")) ;

  return { cart, total };
};
