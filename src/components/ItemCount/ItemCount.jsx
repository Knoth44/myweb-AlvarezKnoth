import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import './Items.css'
import Item from '../Item/Item';


const ItemCount = (props) => {

   const {initial,stockItem,add} = props

   const [counter , setCounter] = useState(initial)
   const [stocks , setStocks] = useState(stockItem)

  function count(a,b,c){
    if(a <= 0) { 
   c(a = <h6 style={{width:'100%',position:'absolute',top:'0px',backgroundColor:'red', justifyContent:'center',display:'flex',color:'white',opacity:'.5'}}>Sin stock</h6>)
  } else if(a > 0 ){
    setStocks(a - b)
    setCounter(0)
   }
  }



  return (
    <div className="container d-flex-direction-rows justify-content-center h-100 rounded-0" style={{width:'20vw',height:'50vh'}}>
      <Card className='card-item'>
        <Card.Img variant="top" src="https://www.ecccomics.com/content/productos/12483/PORTADA_JPG_WEB_superman_exilio_1.jpg" /> 
          <Card.Body>
            <h5 style={{fontSize:'1em',display:'flex',justifyContent:'center'}}>Stock:{stocks}</h5>
             <div className='box-content-items'>
                 <Button variant="light" className='btn-items' onClick={()=> counter > 0 ? setCounter(counter-1) : null }><i className="bi bi-dash"></i></Button>
                 <p style={{margin:'auto'}}>{counter}</p>
                 <Button variant="light" className='btn-items' onClick={()=> counter === stocks ? console.log("error") : setCounter(counter+1)}><i className="bi bi-plus"></i></Button>
              </div>
                <Button variant='dark' className='btn-btn-success'  onClick={() => {  count(stocks,counter,setStocks)  }}>Agregar al carrito</Button>
          </Card.Body>
      </Card>
      {add()}
     </div>
  );
}

export default ItemCount