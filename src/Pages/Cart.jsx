import React, { useState } from 'react';
import { BsTrash } from "react-icons/bs"
import { useContext } from 'react';
import { CartContext } from "../context/CartProvider"
function Cart() {

  const [item, setItem] = useState(cart)
  const {
    removeItem,
    cart
  } = useContext(CartContext)

  return (
    <div style={{ display: 'flex', backgroundColor: '#D0D3D4', width: '100%', height: ' 570px' }}>
      {/* <th>#</th>
          <th>Producto</th>
          <th></th>
          <th>Price</th>
          <th></th>
          <th>X</th> */}
      {
        cart.length <= 0 ?
          <div style={{ backgroundColor: 'white', width: '75%', height: '200px', borderRadius: '12px', padding: '10px', margin: '10px' }}> No hay productos</div>
          :
          cart.map((item, index) =>
            <div style={{ backgroundColor: 'white', width: '75%', height: '200px', borderRadius: '12px', padding: '10px', margin: '10px' }}>
              <p>{index}</p>
              {/* <img src={item.image[0].jpg.small_image_url} alt="" /> */}
              <p>Nombre: {item.name}</p>
              <p>ID: {item.mal_id}</p>
              <p>Cantidad:{item.quantity}</p>
              <p style={{ marginLeft: '10px' }} onClick={() => removeItem(item)}><BsTrash style={{ color: 'red' }} /></p>
            </div>
          )}
    </div>
  );
}

export default Cart;