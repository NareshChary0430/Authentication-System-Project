import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Registration.css'
import { useState } from 'react';
import axiosClient from '../../utils/axiosClient';

export default function Signup() {
    const [userDetails, setUserDetails] = useState({
        name: null,
        email: null,
        password: null
    })

    function updateFieldData(fieldName, newValue) {
        setUserDetails(prevDetails => ({
            ...prevDetails,
            [fieldName]: newValue
        })
        )
    }


    async function submitUserDetails() {
        let response=await axiosClient.post('/register-new-user',userDetails);
    }
    
    return <div className='d-flex' style={{ height: '100vh' }}>
        <div className="signup-left-half w-50" style={{ maxHeight: '100%', overflow: 'hidden' }}>
            <img src="/auth-cover.jpg" alt="authentication cover" style={{ width: '100%' }} />
        </div>
        <div className="signup-right-half w-50 border border-1 border-danger d-flex align-items-center justify-content-center">
            <div className='w-75'>
                <h1>Sign up</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter your name" className='form-field' value={userDetails.name} onChange={(e)=>{updateFieldData('name',e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" className='form-field' value={userDetails.email} onChange={(e)=>{updateFieldData('email',e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" className='form-field' value={userDetails.password} onChange={(e)=>{updateFieldData('password',e.target.value)}}/>
                    </Form.Group>
                    <Button variant="primary" type="button" className='w-100' onClick={() => { submitUserDetails() }} >
                        Signup
                    </Button>
                </Form>
                <p>
                    Already Registered? <a href='#' style={{ textDecoration: 'underline' }}> Signin</a>
                </p>
            </div>
        </div>
    </div>
}