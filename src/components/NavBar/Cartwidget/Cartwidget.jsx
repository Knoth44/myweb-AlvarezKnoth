import { Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartProvider'
import "./Cartwidget.css"

const Cartwidget = () => {

  const { cart } = useContext(CartContext)

  return (
    <div style={{ display: 'flex', justifyContent:'space-around',margin:'1px'}}>
      <Link to={'/cart'}>
        <Button variant='red' style={{    marginRight: '1em',display:'flex',justifyContent:'center',width:'auto',height:'2.5em'}}>
        <i className="bi bi-cart"></i>
          {cart.length <= 0 ?
            <p>Carrito</p>
            :
            <h6 className='buttonCart'>
              {cart.reduce((a, b) => a + (b.quantity), 0)}</h6>}
        </Button>
      </Link>
    </div>
  )
}

export default Cartwidget