import React from 'react'
import NavBar from "../components/NavBar/Navbar.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "../App.css"
import Home from "../Pages/Home"
import Footer from '../components/Footer/Footer'
import ItemDetailConteiner from '../Pages/ItemDetailConteiner'
import Cart from '../Pages/Cart.jsx'
import "../index.css"

const Rutas = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/item/:idItem' element={<ItemDetailConteiner />}></Route>
        <Route path='/category/:categoryid' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Rutas