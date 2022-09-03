import React from "react";
import "./Items.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ id, nameItem, img }) => {


  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={img.jpg.image_url}
          style={{ borderColor: 'black' }}
        ></Card.Img>
        <Card.Body style={{ color: "white", backgroundColor: "#d6933a" , display:'flex', flexDirection:'column'}}>
          <Card.Title style={{ display: 'inline-block' }}>{nameItem}</Card.Title>
          <Card.Text>
          </Card.Text>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="dark" style={{
              marginTop: '10px',
              display: 'flex',
              height: '40px'
            }} > <Link style={{ color: 'white', textDecoration: 'none' }} to={`/item/${id}`}>Ver mas</Link></Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
