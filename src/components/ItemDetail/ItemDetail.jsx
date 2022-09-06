import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartProvider'

const ItemDetail = ({ detail }) => {

  const {
    addItem,
  } = useContext(CartContext)

  const [counter, setCounter] = useState()

  function onAdd(count) {

    setCounter(count);

    addItem(detail, count)

  }

  if(!detail.price){
  detail.price = Math.floor(Math.random() * (2000 - 200) + 200)}

  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <div className='card-container'>
        <div style={{ display: 'inline-block' }}>
          <Image style={{ width: '300px' }} src={detail.images.jpg.image_url}></Image>
        </div>
        <div className='card-info' >
          <Card style={{
            height: '30rem',
            display: 'flex',
            width: 'auto',
            maxWidth: 'max-content',
            padding: '10px',
            alignItems: 'flex-end'
          }}>
            <Card.Title style={{ textDecoration: 'underline' }}>{detail.title}</Card.Title>
            <Card.Body>
              <div>
                <div className='detail-card'>
                  <h6>Capitulos: <p>{detail.episodes}</p></h6>
                </div>
                <div className='detail-card'>
                  <h6>Duracion: <p>{detail.duration}</p></h6>
                </div>
                <div className='detail-card'>
                  <h6>Genero:</h6>
                  {detail.genres.map((item, index) =>
                    <h6 key={index}><p>{item.name}</p></h6>)}
                </div>
                <div className='detail-card'>
                  <h6>Precio: <p>${detail.price}</p></h6>
                </div>
              </div>{
                counter ?
                  <Link to={'/Cart'}> <Button variant="dark">Finalizar Compra</Button> </Link>
                  :
                  <ItemCount stockItem={5} initial={1} onAdd={onAdd}
                  />}
            </Card.Body>
          </Card>
          <div className='sinop-card'>
            <h3> Sinopsis </h3>
            <p>{detail.synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail