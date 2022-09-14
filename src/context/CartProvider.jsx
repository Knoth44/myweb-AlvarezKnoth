import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  function addItem(item, quantity) {

    if (isInCart(item.id)) {
      let aux = cart ;
      let arrInx = aux.findIndex(i => i.id === item.id)
      aux[arrInx].quantity += quantity
      setCart([...aux])
    } else {
      setCart([...cart , { ...item, quantity }])
    }

  }

  function removeItem(id) {
    let arr = cart.filter(item => item.id !== id && item)
    setCart(arr)  
  }
 
  function clearCart() {
    setCart([])
  }

  function isInCart(itemId) {
    return cart.find(i => i.id === itemId)
  }

  return (
    <CartContext.Provider value={{
      addItem,
      removeItem,
      clearCart,
      isInCart,
      cart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider