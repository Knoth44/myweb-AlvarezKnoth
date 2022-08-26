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
 
const NavbarLine = () => {
  return (  
  <div className='navbar-menu'>
   <Navbar bg="light" expand="lg">
      <Container fluid>
      <Link to={"/"}><Imagen src={logo} style={{width:'50px',height:'50px',borderRadius:'10px'}}/></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Button variant='white'><Link style={{color:'black',textDecoration:'none'}}  to={"/"}>Home</Link></Button>
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
          <Button className='search-btn' variant="light" style={{marginLeft:'10px'}}><Link style={{color:'black',textDecoration:'none'}} to={'/AboutUs'}>About Us</Link></Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavbarLine
