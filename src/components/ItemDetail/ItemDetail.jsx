import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"
import { CartContext } from '../../context/CartProvider'
import { GlobalProvider } from '../../context/GlobalProvider'

const ItemDetail = ({ detail }) => {
  
 const { setAlerta, setMsg, setError } = GlobalProvider()
  let obj;
  detail.forEach(element => {
    obj = {
      ...element
    }
  });

  const {
    addItem,
  } = useContext(CartContext)

  const [counter, setCounter] = useState()

  function onAdd(count) {

    setAlerta(true)
    setError(true)
    setMsg(`Se añadio al carrito '${obj.title}'`)
    setCounter(count);
    addItem(obj, count)

  }

  return (
    <>
      <div>
        <Link to='/'><Button style={{ backgroundColor: 'white', margin: '10px', color: 'black', borderColor: 'black' }}><BiArrowBack></BiArrowBack></Button></Link>
      </div>
      <div style={{ justifyContent: 'center', display: 'flex', margin: '1% 1%' }}>
        <div className='card-container'>
          <div className='card-info' >
            <Card style={{
              width: '100%',
              height: 'auto',
            }}>
              <Card.Body style={{ display: 'flex', width: '100%' }}>
                <div>
                  <Image style={{ width: '300px', padding: '2%', borderRadius: '10px' }} src={obj.images[0]}></Image>
                </div>
                <div>
                  <Card.Title style={{ letterSpacing: '.1rem' }}>{detail.title}</Card.Title>
                  <div className='detail-card'>
                    <h6>Capitulos: <p>{obj.episodes}</p></h6>
                  </div>
                  <div className='detail-card'>
                    <h6>Duracion: <p>{obj.duration}</p></h6>
                  </div>
                  <div className='detail-card'>
                    <h6>Genero:</h6>
                    {obj.genres.map((item, index) =>
                      <p key={index}>{item}</p>)}
                  </div>
                  <div className='detail-card'>
                    <h6>Precio: <p>${obj.price}</p></h6>
                  </div>
                  <div >
                    <ItemCount stockItem={obj.stock} initial={1} onAdd={onAdd} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '1%' }}>
                    <Link to={'/Cart'}> <Button variant="dark">Finalizar Compra</Button> </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <div className='sinop-card'>
              <h3> Sinopsis </h3>
              <p>{obj.synopsis}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail