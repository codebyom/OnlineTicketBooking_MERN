

import React,{useState,useEffect} from 'react'
import './signupform.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Form,Button} from 'react-bootstrap'
import axios from'axios'


const Signupform = () => {

    
toast.configure();
const [user,setUser] = useState({
    fullName:"",email:"",password:"",cpassword:"",mobileNum:""
})
let name,value;

const formhandle = (e)=>{
    name=e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
}
const formsubmit = async(e)=>{
    e.preventDefault()
    const res = await axios.post("http://localhost:5000/user",user);
    toast.success("Register Successfull");   
}
  return (
    <>
        <div className="main_signup_form">
            <h3 className='register_title'>Register New User</h3>
            <div className="signup_form_start">
            <Form method='POST'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" name="fullName" value={user.fullName} onChange={formhandle} autoComplete="off"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Your Email Address" name="email" value={user.email} onChange={formhandle} autoComplete="off"/>
                </Form.Group>
               
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={formhandle} autoComplete="of"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control type="password" placeholder="Conform Password" name="cpassword" value={user.cpassword} onChange={formhandle} autoComplete="off"/>
                </Form.Group>               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Mobile Number" name="mobileNum" value={user.mobileNum} onChange={formhandle} autoComplete="off"/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={formsubmit}>
                    Submit
                </Button>
                </Form>
            </div>
        </div>
    </>
  )
}

export default Signupform