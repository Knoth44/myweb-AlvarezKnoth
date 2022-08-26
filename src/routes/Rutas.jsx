import React from 'react'
import  Navbar from "../components/NavBar/Navbar"
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import ItemListConteiner from '../components/ItemListConteiner/ItemListConteiner'
import "../App.css"
import ItemDetailConteiner from '../components/ItemDetailConteiner/ItemDetailConteiner'

const Rutas = () => {
  return (
   <BrowserRouter>
     <Navbar/>
         <Routes>
            <Route path='/' element={<ItemListConteiner/>}></Route>
            <Route path='/item/:id' element={<ItemDetailConteiner/>}></Route>
         </Routes>
   </BrowserRouter>
  )
}

export default Rutas