import React from "react";
import "./Items.css";
import ItemCount from "../ItemCount/ItemCount";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, nameItem, img }) => {

  function onAdd() {
    return <p>Felicitaciones tu producto se cargo con exito</p>;
  }

  return (
    <>
      <Card >
        <Card.Img
          variant="top"
          src={img.jpg.image_url}
        ></Card.Img>
        <Card.Body style={{ color: "white", backgroundColor: "#d6933a" }}>
          <Card.Title>{nameItem}</Card.Title>
          <Card.Text> 
          </Card.Text>
          <ItemCount stockItem={5} initial={1} onAdd={onAdd} />
          <div style={{ display:'flex',justifyContent:'center'}}>
            <Button variant="dark" style={{marginTop:'10px'}} > <Link style={{ color: 'white', textDecoration: 'none' }} to={`/item/${id}`}>Ver mas</Link></Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
