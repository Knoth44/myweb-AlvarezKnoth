import React from "react";
import { GlobalProvider } from "../../context/GlobalProvider";
import Item from "../Item/Item";

const ItemList = ({ products }) => {

  const { buscar } = GlobalProvider()

  let arr = [];
  if (buscar.length > 0) {
    if (products.length > 0) {
      let busqueda = buscar.toLowerCase()
      for (const product of products) {
        let nombre = product.title.toLowerCase()
        if (nombre.indexOf(busqueda) !== -1) {
          arr.push(product)
        }
      }
    }
    products = arr
  }

  return (
    <div style={{ display: "flex", flexFlow: 'row wrap', justifyContent: 'space-evenly', marginBottom: '50px' }}>
      {products.length > 0 ?
        products.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            nameItem={item.title}
            img={
              item.images
            }
            price={item.price}
          ></Item>
        )) : (
          <div style={{
            margin: '20%',
            display: 'flex',
            width: ' 20%',
            border: '1px solid rgb(214, 147, 58)',
            borderRadius: '10px',
            height: '40%',
            backgroundColor: 'white',
            padding: '10px',
          }}>
            <h3>No hay productos</h3>
          </div>
        )

      }
    </div >
  );
};

export default ItemList;
