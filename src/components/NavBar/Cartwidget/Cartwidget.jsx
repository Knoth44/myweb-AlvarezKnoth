import { Button } from 'react-bootstrap'
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartProvider'


const Cartwidget = () => {

  const { cart } = useContext(CartContext)

  return (
    <div>
      <Link to={'/cart'}><Button variant='red' style={{ marginRight: '10px' }}><i className="bi bi-cart"></i>{cart.length <= 0 ? 'Carrito'  : cart.reduce((a,b)=> a + (b.quantity),0)}</Button></Link>
    </div>
  )
}

export default Cartwidget