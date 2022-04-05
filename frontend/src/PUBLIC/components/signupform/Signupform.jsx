import React from 'react'
import './signupform.css'

import {Form,Button} from 'react-bootstrap'

const Signupform = () => {
  return (
    <>
        <div className="main_signup_form">
            <h3 className='register_title'>Register New User</h3>
            <div className="signup_form_start">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email Address" />
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control type="password" placeholder="Conform Password" />
                </Form.Group>               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Mobile Number" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        </div>
    </>
  )
}

export default Signupform