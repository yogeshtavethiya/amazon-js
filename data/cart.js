export let cart =  JSON.parse(localStorage.getItem('cart')) || []

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))
}

export function addToCart(productId){
    let matchingItem
    cart.forEach((cartItem)=>{
      if(productId === cartItem.productId){
        matchingItem = cartItem
      }
    })
    if(matchingItem){
      matchingItem.quantity += 1
    } else {
      cart.push({
        productId: productId,
        quantity: 1
      })
    }
    saveToStorage()
  }

export function removeFromCart(productId){
  const newCart = []

  cart.forEach((cartItem)=>{
    if(cartItem.productId !== productId){
      newCart.push(cartItem)
    }
  })
  cart = newCart
  saveToStorage()
}

export function updateCheckoutHeader(){
    let checkoutItems = document.querySelector('.js-total-cart-items-header')
    checkoutItems.innerHTML = cart.length + ' items'
}

export function calculateCartQuantity(){
  let cartQuantity = 0
  console.log(cartQuantity)
  cart.forEach((cartItem)=>{
    cartQuantity += cartItem.quantity
  })
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity
}