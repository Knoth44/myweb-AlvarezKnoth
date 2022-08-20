import React from 'react'
import Item from '../Item/Item'


const ItemList = ({products}) => {

  return (
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        {products.map((item,index)=> 
        <Item key={item.id +""+ index} id={item.id} nameItem={item.nombre} description={item.description} price={item.precio} brand={item.marca} img={item.image}></Item>
        )}
     </div>
  )
}

export default ItemList