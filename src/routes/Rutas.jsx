import React from 'react'
import NavBar from "../components/NavBar/Navbar"
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import "../App.css"
import Home from "../Pages/Home"
import Footer from '../components/Footer/Footer'
import ItemDetailConteiner from '../Pages/ItemDetailConteiner'

const Rutas = () => {
  return (
   <BrowserRouter>
     <NavBar/>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/item/:id' element={<ItemDetailConteiner/>}></Route>
            <Route path='/category/:categoryid' element={<Home/>}></Route>
         </Routes>
         <Footer/>
   </BrowserRouter>
  )
}

export default Rutas