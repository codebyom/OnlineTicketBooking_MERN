import React from 'react'
import './signup.css'
import {Container,Row,Col} from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Header from '../headers/Header'
import Signupform from '../signupform/Signupform'
import {Link} from 'react-router-dom'
const Signup = () => {
  return (
    <>  
        <Header/>
        <div className="main_div_signup">
            <Container>
                <Row>
                    <Col sm={12} md={11} lg={6} xl={6}>
                        <div className="signup_form-main">
                            
                            {/* routing */}
                           <Signupform/>

                        </div>
                    </Col>
                    <Col sm={12} md={11} lg={6} xl={6}>
                        <div className="image">
                            <img src='/image/signup.png'/>
                            <div className="footer_text">
                                <p>I have already a account!</p>
                                <Link to='/login'>Login</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Signup