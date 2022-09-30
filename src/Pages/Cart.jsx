import React from 'react';
import { BsTrash } from "react-icons/bs"
import { useContext } from 'react';
import { CartContext } from "../context/CartProvider"
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'
import "./Cart.css"
import Formulario from '../components/Formulario/Formulario';
import Footer from '../components/Footer/Footer';
import NavBar from '../components/NavBar/Navbar';
import { reduceFunct } from '../assets/Functions';
import FireBase from '../hooks/FireBase';

function Cart() {

  const { orderId } = FireBase()

  const {
    removeItem,
    clearCart,
    cart
  } = useContext(CartContext)

  return (
    <>
      <NavBar />
      <div>
        <Link to='/'><Button style={{ backgroundColor: 'white', margin: '10px', color: 'black', borderColor: 'black' }}><BiArrowBack></BiArrowBack></Button></Link>
      </div>
      {orderId.length > 0 && (
        <div>
          <h1>{orderId}</h1>
        </div>
      )

      }
      <div className="boxcard" >
        <div>
          {cart.length <= 0 ?
            <div style={{ alignItems: 'center', backgroundColor: 'white', height: '200%', borderRadius: '12px', padding: '10% 1%', justifyContent: 'space-between' }}>
              <b style={{ color: 'red', display: 'flex', alignItems: 'center' }}> No hay productos</b>
            </div>
            :
            cart.map((item, index) =>
              <div key={index} >
                <div className='itemCart' style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', height: '200%', borderRadius: '12px', padding: '10px', margin: '10px', justifyContent: 'space-between' }}>
                  <Image src={item.images[1]} />
                  <p>Nombre: {item.title}</p>
                  <p>ID: {item.id}</p>
                  <p>Cantidad:{item.quantity}</p>
                  <p>Precio:{item.price}</p>
                  <Button style={{ backgroundColor: 'white', borderColor: 'black', marginLeft: '50px' }} onClick={() => removeItem(item)}><BsTrash style={{ color: 'red' }} /></Button>
                </div>
              </div>
            )}
          {cart.length > 0 &&
            <div>
              <div style={{ display: 'flex', justifyContent: 'center' }} >
                <Formulario items={cart} total={reduceFunct(cart)} />
              </div>
              <div>
                <Button onClick={clearCart} vartiant='ligth' style={{ backgroundColor: 'white', color: 'black', borderColor: 'black', display: 'block' }}> Vaciar Carrito</Button>
              </div>
            </div>
          }

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;