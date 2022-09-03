import React,  {createContext} from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {

  return (
  <CartContext.Provider value={asdas}>
    {children}
  </CartContext.Provider>
  )
}

export default CartProvider