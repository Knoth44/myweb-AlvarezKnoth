import React from 'react'
import './styleNav.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from './Cartwidget/Cartwidget';
import logo from "./imgCar/logo.jpg";
import Imagen from "react-bootstrap/Image";
 
const NavbarLine = () => {
  return (  
  <div className='navbar-menu'>
   <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"> <Imagen src={logo} style={{width:'75px',borderRadius:'10px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
          <Cartwidget/>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button className='search-btn' variant="dark">Search</Button>
          </Form>
          <Button className='search-btn' href="#action2" variant="light" style={{marginLeft:'10px'}}>About Us</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavbarLine
