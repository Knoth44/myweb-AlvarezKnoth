import React from 'react'
import "./Items.css"
import ItemCount from '../ItemCount/ItemCount';
import { Card } from 'react-bootstrap';

const Item = ({key,id,nameItem,description,price,brand,img}) => {

  function onAdd() {
    return <p>Felicitaciones tu producto se cargo con exito</p>
  }

  return (
  <>
    <Card style ={{}}>
      <Card.Img variant="top" src={img} />
      <Card.Body style={{color:'#2471A3', backgroundColor:'#7FB3D5'}}>
        <Card.Title>{nameItem}</Card.Title>
        <Card.Text>
          <h3 style={{color:'black',display:'inline'}}>{brand}<p style={{fontSize:'0.5em'}}>{price}</p></h3>
        </Card.Text>
       <ItemCount stockItem={5} initial={1} onAdd={onAdd}/>
      </Card.Body>
    </Card>
  </>
  )
}

export default Item