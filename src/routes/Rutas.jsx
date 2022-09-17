import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "../App.css"
import Home from "../Pages/Home"
import ItemDetailConteiner from '../Pages/ItemDetailConteiner'
import Cart from '../Pages/Cart.jsx'
import "../index.css"

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/item/:idItem' element={<ItemDetailConteiner />}></Route>
        <Route path='/category/:categoryid' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas