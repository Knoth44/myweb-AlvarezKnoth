import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'


const Cartwidget = () => {
  return (
    <div>
      <Link to={'/cart'}><Button variant='red' style={{ marginRight: '10px' }}><i className="bi bi-cart"></i>Carrito</Button></Link>
    </div>
  )
}

export default Cartwidget