import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./ItemCount.css";

const ItemCount = ({ initial, stockItem, onAdd }) => {
  const [counter, setCounter] = useState(initial);
  const [stocks, setStocks] = useState(stockItem);

  function count(a, b, c) {
    if (a <= 0) {
      c(
        (a = (
          <h6
            style={{
              width: "100%",
              position: "unset",
              backgroundColor: "red",
              borderRadius: "6 px",
              justifyContent: "center",
              display: "flex",
              color: "white",
              opacity: ".5",
            }}
          >
            Sin stock
          </h6>
        ))
      );
    } else if (a > 0) {
      setStocks(a - b);
      setCounter(0);
      onAdd();
    }
  }

  function setterCount(a, b, c) {
    if (a < b) c(a + 1);
  }

  function setterCount_1(a, b, c) {
    if (a > b) c(a - 1);
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
          <p style={{ margin: "auto", color: "black" }}>{counter}</p>
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
              count(stocks, counter, setStocks);
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
