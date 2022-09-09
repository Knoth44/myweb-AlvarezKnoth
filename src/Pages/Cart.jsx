import React from 'react';
import { BsTrash } from "react-icons/bs"
import { useContext } from 'react';
import { CartContext } from "../context/CartProvider"
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import "./Cart.css"

function Cart() {

  const {
    removeItem,
    clearCart,
    cart,
  } = useContext(CartContext)

  return (
    <>
      <div>
        <Link to='/'><Button style={{ backgroundColor: 'white',margin:'10px',color: 'black', borderColor: 'black' }}><BiArrowBack></BiArrowBack></Button></Link>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignContent: 'space-around',
        width: '100%',
        alignItems: 'center',
        marginBottom: '100px'
      }}>
        <div>

          {cart.length <= 0 ?
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', height: '200px', borderRadius: '12px', padding: '10px', margin: '10px', justifyContent: 'space-between' }}>

              <div>
                <b style={{ color: 'red', alignItems: 'center' }}>No hay productos</b> <br />
              </div>
            </div>
            :
            cart.map((item, index) =>
              <div className='itemCart' key={index} style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', height: '200px', borderRadius: '12px', padding: '10px', margin: '10px', justifyContent: 'space-between' }}>
                <Image src={item.images.jpg.small_image_url} />
                <p>Nombre: {item.title}</p>
                <p>ID: {item.mal_id}</p>
                <p>Cantidad:{item.quantity}</p>
                <p>Precio:{item.price}</p>
                <Button style={{ backgroundColor: 'white', borderColor: 'black', marginLeft: '50px' }} onClick={() => removeItem(item.mal_id)}><BsTrash style={{ color: 'red' }} /></Button>
              </div>
            )}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4>Precio final : ${cart.reduce((a, b) => a + (b.price * b.quantity), 0)}</h4>
            <Button onClick={clearCart} vartiant='ligth' style={{ backgroundColor: 'white', color: 'black', borderColor: 'black', display: 'block' }}> Vaciar Carrito</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;