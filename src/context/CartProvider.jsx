import React, { createContext , useState} from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  function addItem(item, quantity) {
      console.log(item,quantity)
    if(isInCart(item.mal_id)){
    setCart([...item,{...item, quantity}])
    }
    
  }

  function removeItem(id) {

  }

  function clear(params) {
    setCart([])
  }

  function isInCart(itemId) {
    return cart.find(i => i.mal_id === itemId )
  }
  
  return (
    <CartContext.Provider value={{
      addItem,
      removeItem,
      clear,
      isInCart,
      cart
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider