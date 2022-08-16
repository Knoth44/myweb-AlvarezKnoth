import React , {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import './Items.css'


const ItemCount = () => {

   const [counter , setCounter] = useState(1)
   const [stock , setStock] = useState(10)

  function count(a,b,c){
    if(a <= 0) { 
   c(a = <p style={{backgroundColor:'red', justifyContent:'center',display:'flex',borderRadius:'10px',color:'white'}}>Sin stock</p>)
  } else if(a > 0 ){
    setStock(a - b)
    setCounter(0)
  }
  }

  return (
    <div className="container d-flex-direction-rows justify-content-center h-100 rounded-0" style={{width:'20vw',height:'50vh'}}>
      <Card className='card card-item' style={{}}>
        <Card.Img variant="top" src="https://www.ecccomics.com/content/productos/12483/PORTADA_JPG_WEB_superman_exilio_1.jpg" /> 
          <Card.Body>
            <h4 style={{alignContent:'center'}}>Stock:{stock}</h4>
             <div style={{borderColor:'black', display:'flex',flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}>
                 <Button variant="light" className='btn-btn-items' onClick={()=> counter > 0 ? setCounter(counter-1) : null }><i className="bi bi-dash"></i></Button>
                 <p style={{margin:'auto'}}>{counter}</p>
                 <Button variant="light" className='btn-btn-items' onClick={()=> counter === stock ? console.log("error") : setCounter(counter+1)}><i className="bi bi-plus"></i></Button>
              </div>
                <Button variant='dark' className='color-blue' style={{alignContent:'center',marginTop:'10px', marginLeft:'20px'}} onClick={() => { count(stock,counter,setStock)}}>Agregar al carrito</Button>
          </Card.Body>
      </Card>
     </div>
  );
}

export default ItemCount