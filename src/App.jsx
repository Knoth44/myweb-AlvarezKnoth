import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Rutas from './routes/Rutas';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <>
      <CartProvider>
        <Rutas />
      </CartProvider>
    </>
  );
}

export default App;
