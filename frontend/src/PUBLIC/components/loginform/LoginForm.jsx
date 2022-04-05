import React from 'react'
import './loginform.css'
import {Container,Col,Row,Form,Button} from 'react-bootstrap'
import Header from '../headers/Header'
const LoginForm = () => {
  return (
    <>
        <Header/>
        <div className="login_form-start">
            <Container>
              <Row>
                  <Col sm={12} md={11} lg={6} xl={6}>
                    <h3 className="login_form_title">Login</h3>
                    <div className="login_form">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Username or email</Form.Label>
                          <Form.Control type="text" placeholder="Enter your username or email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" />
                          <a href="#">Forget Password?</a>
                        </Form.Group>
                        
                        
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </Form>
                    </div>
                  </Col>
                  <Col sm={12} md={11} lg={6} xl={6}>
                    <div className="login_image">
                      <img src='/image/login.png'/>
                    </div>
                  </Col>
              </Row>
            </Container>
        </div>
    </>
  )
}

export default LoginForm