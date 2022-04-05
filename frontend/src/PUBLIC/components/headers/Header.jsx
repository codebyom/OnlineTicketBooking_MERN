import React from 'react'
import './Header.css'
 import Admin from '../../../adminpages/Admin'
 import {Navbar,Container,Nav,Form,Button,FormControl} from 'react-bootstrap'
 import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
        <Navbar className='navbar' >
  <Container>
    <Navbar.Brand href="#home"><h3 className='logotitle'>St<span className='logotitlespan'>ar</span>Bus</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  )
}

export default Header