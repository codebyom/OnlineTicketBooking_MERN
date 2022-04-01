import React from "react";
import './tobar.css'
import { Navbar,Container,Nav,Form,Button,FormControl } from "react-bootstrap";

const AdminHeader = () => {
  return (
    <>
      <div className="header">
      <Navbar  bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Admin Pannel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
               >
              <Nav.Link href="#action1">Setting</Nav.Link>
              <Nav.Link href="#action2">Logout</Nav.Link>
              <Nav.Link href="#action2">BakcTo Home</Nav.Link>                   
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
      </div>
    </>
  );
};

export default AdminHeader;
