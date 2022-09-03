import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from "react-router-dom"

const ItemDetail = ({ detail }) => {

  const [counter, setCounter] = useState(1)

  function onAdd(counter) {

    setCounter(counter);
    
   }

  let generos = detail.genres;
  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <div className='card-container'>
        <div style={{ display: 'inline-block' }}>
          <Image style={{ width: '300px' }} src={detail.images.jpg.image_url}></Image>
        </div>
        <div className='card-info' >
          <Card style={{
            height: '26rem',
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
                  {generos.map((item, index) =>
                    <h6 key={index}><p>{item.name}</p></h6>)}
                </div>
              </div>{
                ! counter ?
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