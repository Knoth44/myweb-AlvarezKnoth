import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {

  return (
    <div style={{ display: "flex", flexFlow:'row wrap', justifyContent:'space-evenly',marginBottom:'50px'}}>
      {products.map((item,index) => (
        <Item
          key={index} 
          id={item.id}
          nameItem={item.title}
          img={
            item.images
          }
          price={item.price}
        ></Item>
      ))}
    </div>
  );
};

export default ItemList;
