import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
import { GlobalProvider } from '../../context/GlobalProvider';

function Spinners() {
  const { cargar } = GlobalProvider();

  return (
    <>
      {
        cargar && (
          <div style={{display:'flex', justifyContent:'center'}}>
            <Spinner style={{ width: "3rem", height: "3rem",position:'absolute',marginTop:'20%' }} animation="border" variant="primary" />
          </div>
        )
      }
    </>
  );
}

export default Spinners;