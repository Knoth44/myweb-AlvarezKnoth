import Spinner from 'react-bootstrap/Spinner';
import React from 'react';
import { GlobalProvider } from '../../context/GlobalProvider';

function Spinners() {
  const { cargar } = GlobalProvider();

  return (
    <>
      {
        cargar && (
          <div style={{display:'flex', justifyContent:'center',marginTop:'20rem'}}>
            <Spinner style={{ width: "3rem", height: "3rem" }} animation="border" variant="primary" />
          </div>
        )
      }
    </>
  );
}

export default Spinners;