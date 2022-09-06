import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";

const ItemCount = ({ initial, stockItem, onAdd }) => {

  const [counter, setCounter] = useState(initial);
  const [stocks, setStocks] = useState(stockItem);

  function setterCount(a, b, c) {
    (a < b) && c(a + 1);
  }
 
  function setterCount_1(a, b, c) {
    (a > b) && c(a - 1);
  }

  return (
    <>
      <div className='box-itemcount'>
        <h5
          style={{
            fontSize: "1em",
            display: "flex",
            justifyContent: "center",
            color: "black",
          }}
        >
          Stock:{stocks}
        </h5>
        <div className="box-content-items">
          <Button
            variant="light"
            stlye={{ color: "white" }}
            onClick={() => setterCount_1(counter, initial, setCounter)}
          >
            <i className="bi bi-dash" style={{ color: "black" }}></i>
          </Button>
          <p style={{ margin: "auto", color: "black", textDecoration: 'none' }}>{counter}</p>
          <Button
            variant="light"
            stlye={{ color: "white" }}
            onClick={() => setterCount(counter, stocks, setCounter)}
          >
            <i className="bi bi-plus" style={{ color: "black" }}></i>
          </Button>
        </div>
        <div className="btn-btn-success">
          <Button
            variant="dark"
            onClick={() => {
              onAdd(counter)
            }}
          >
            Agregar al carrito
          </Button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
