import './App.css';
import Navbar from '././components/NavBar/Navbar'
import React from 'react';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
       <Navbar/>
         <ItemListConteiner greeting="ItemListConteiner"/>
         <ItemCount/>
    </div>
  );
}

export default App;
