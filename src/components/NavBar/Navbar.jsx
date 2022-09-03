import React from 'react'
import './styleNav.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './Cartwidget/Cartwidget';
import logo from "./imgLog/onepiece.png";
import Imagen from "react-bootstrap/Image";
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios'

const NavBar = () => {

  const [category, setCategory] = useState({})

  function categoryArr(a) {
    const c = a.map(i => i.genres)
    let lista = [];
    c.map(item => {
      item.map(i => !lista.includes(i.name) && lista.push(i.name))
    })
    setCategory(lista)
  }

  useEffect(() => {

    const promiseId = async () => {

      try {
        const animeID = await axios.get(`https://api.jikan.moe/v4/top/anime`, { timeout: 5000 })
        const response = await animeID.data
        response && categoryArr(response.data)
      } catch (err) {
        console.log(err);
      }
    };

    promiseId()

  }, []);

  return (

    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to={"/"}><Imagen src={logo} style={{ width: '50px', height: '50px', borderRadius: '10px' }} /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Button variant='white' style={{ marginLeft: '10px' }}><Link style={{ color: 'black', textDecoration: 'none' }} to={"/"}>Home</Link></Button>
            <NavDropdown title="Generos" id="basic-nav-dropdown">
              <div className='category' >
                {category.length >= 0 ? category.map((item, index) =>
                  <Button key={index} variant='ligth' >
                    <Link style={{ textDecoration: 'none', color: '#E9967A', borderColor: '#E9967A' }} to={`/category/${item}`}>
                      {item}
                    </Link>
                  </Button>)
                  :
                  <p style={{ color: 'red', textDecoration: 'none' }}>Cargando....</p>
                }
              </div>
            </NavDropdown >
          </Nav>
          <Cartwidget />
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='search-btn' variant="dark">Search</Button>
          </Form>
          {/* <Button className='search-btn' variant="light" style={{ marginLeft: '10px' }}><Link style={{ color: 'black', textDecoration: 'none' }} to={'/AboutUs'}>About Us</Link></Button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
