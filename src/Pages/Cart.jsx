import React , {useState} from 'react';
import { BsTrash } from "react-icons/bs"

function Cart() {

  const [item, setItem] = useState({})

  return (
    <div style={{display:'flex',backgroundColor:'#D0D3D4',width:'100%',height:'max-content'}}>
          {/* <th>#</th>
          <th>Producto</th>
          <th>ID</th>
          <th>Price</th>
          <th>Cantidad</th>
          <th>X</th> */}
        {
        item ? 
        <div style={{backgroundColor:'white',width:'75%',height:'200px',borderRadius:'12px',padding:'10px', margin:'10px'}}> No hay productos</div> 
        :
        item.map((item,index)=>
        <tr>
          <p>{index}</p>
          <p>{item.name}</p>
          <p>{item.mal_id}</p>  
          <p>{item.price}</p>
          <p style={{marginLeft:'10px'}} onClick><BsTrash style={{color:'red'}}/></p>
        </tr>
      )}
    </div>
    );
}

export default Cart;