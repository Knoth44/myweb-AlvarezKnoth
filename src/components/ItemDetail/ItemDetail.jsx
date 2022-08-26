import React from 'react'
import { Card } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ detail }) => {
  //duration**
  //manga
  //title**
  //demographics[0].name
  //episodes**
  //genres[].name
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
            <Card.Title style={{ textDecoration: 'underline', padding: '0px' }}>{detail.title}</Card.Title>
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
                  {generos.map((item) =>
                    <h6 key={item.id}><p>{item.name}</p></h6>)}
                </div>
              </div>
              <ItemCount />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail