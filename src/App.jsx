import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Rutas from './routes/Rutas';
import CartProvider from './context/CartProvider';
import GlobalState from './context/GlobalProvider';
import Layout from './Layout/Layout';

function App() {
  return (
    <>
      <GlobalState>
        <CartProvider>
          <Layout>
            <Rutas />
          </Layout>
        </CartProvider>
      </GlobalState>
    </>
  );
}

export default App;
