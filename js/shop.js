// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;



const updateCartCounter =() =>{
  
        let cartCounter = document.getElementById('count_product')
        cartCounter.textContent = cart.length
        cartCounter.classList.remove('bg-dark','bg-danger')
        cartCounter.classList.add(cart.length>0?'bg-danger' :'bg-dark')

}
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', e => {
        const id = parseInt(e.currentTarget.dataset.productId);
        buy(id);
    });
});

// Exercise 1
 const buy = (productId) => {
    // 1. Loop for to the array products to get the item to add to cart
  let selected = products.find(item => item.id === productId) 
    // 2. Add found product to the cart array
 let cartProduct = cart.find(item => item.id === productId)

 if (cartProduct){
    cartProduct.quantity +=1
 }
 else {
    cart.push(selected)
    selected.quantity = 1
 }
   
    console.log(cart)
    updateCartCounter()
}


// Exercise 2
const cleanCart = () =>  {
cart.splice(0, cart.length)
}

document.querySelector('#clean-cart').addEventListener('click', (e) => {
    cleanCart();
    updateCartCounter()
    printCart();
});


// Exercise 3
const calculateTotal = () =>  {
    // Calculate total price of the cart using the "cartList" array
    let total = 0
    cart.forEach(item =>{item.offer?total+= applyPromotionsCart(item):total+=item.price*item.quantity})
    return total
}

// Exercise 4
const applyPromotionsCart = (item) =>{
// Apply promotions to each item in the array "cart"
let price =0
if(item.offer && item.offer.number <= item.quantity){
price = (item.price*item.quantity)-((item.price*item.quantity)*item.offer.percent/100)
}
 else {
price =item.price*item.quantity
 }
return price
}

// Exercise 5
const printCart = () => {
    // Fill the shopping cart modal manipulating the shopping cart dom
 const list = document.querySelector('#cart_list')
 list.innerHTML = ''
 const total = document.querySelector('#total_price')
 cart.forEach(item => {
   let row = document.createElement('tr')
   row.setAttribute('scope','row')
    list.appendChild(row)
    let name = document.createElement('th')
    name.textContent = item.name
    row.appendChild(name)
    let price = document.createElement('td')
    price.textContent= item.price
    row.appendChild(price)
    let quantity = document.createElement('td')
    quantity.textContent = item.quantity
    row.appendChild(quantity)
    let discount = document.createElement('td')
    discount.textContent = applyPromotionsCart(item)
    row.appendChild(discount)
})
total.textContent= calculateTotal()
   
}


// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {

}

const open_modal = () =>  {
    document.querySelector('[data-bs-target="#cartModal"]').addEventListener('click', () =>{
        printCart();
    })
}
open_modal()