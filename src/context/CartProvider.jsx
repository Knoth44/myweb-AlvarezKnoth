import React, { createContext, useState } from 'react'
import { GlobalProvider } from './GlobalProvider';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const { setAlerta, setError,setMsg } = GlobalProvider()
  const [cart, setCart] = useState([])

  function addItem(item, quantity) {

    if (isInCart(item.id)) {
      let aux = cart ;
      let arrInx = aux.findIndex(i => i.id === item.id)
      aux[arrInx].quantity += quantity
      setCart([...aux])
      setAlerta(true)
    } else {
      setCart([...cart , { ...item, quantity }])
      setAlerta(true)
    }

  }

  function removeItem(item) {
    const {id , title} = item
    let arr = cart.filter(item => item.id !== id && item)
    setAlerta(true)
    setError(false)
    setMsg(`Se saco del carrito '${title}'`)
  
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