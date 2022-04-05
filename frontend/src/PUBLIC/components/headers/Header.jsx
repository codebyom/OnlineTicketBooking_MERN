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
    <Navbar.Brand href="#home"><Link to='/' className='title-link'><h3 className='logotitle'>St<span className='logotitlespan'>ar</span>Bus</h3></Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <Nav.Link href="#link"><Link to='/' className='link'>Home</Link></Nav.Link>
      
        <Nav.Link href="#link"><Link to='/login' className='link'>Login</Link></Nav.Link>
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