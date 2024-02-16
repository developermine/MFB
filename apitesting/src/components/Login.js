import React, { useState } from 'react'
import { Container, Row, Form, Col, Alert} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom'
// import { useLoginMutation } from '../services/appApi';
import './Signup.css'

const Login = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("userDataInformation")) || {};

    if (email === storedUserData.email && password === storedUserData.password) {
        history("/bankcustomer");
    } else {
        alert(" incorrect email and password")
    }
    
  };


  return (
    <Container>
        <Row>
            <Col md={6} className="login__form--container">
            <Form style={{width: "100%"}}
             onSubmit={handleSubmit}
             >
                <h1>Login to your bank account</h1>
                {/* {isError && <Alert variant='danger'>{error.data}</Alert>} */}
                <Form.Group>
                    <Form.Label>Account email</Form.Label>
                    <Form.Control type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} value={password} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Check me out" />
                 </Form.Group>

                <Form.Group>
                <Button type="submit"
                //  disabled={isLoading}
                 >Login </Button>
                </Form.Group>
                <p className='pt-3 text-center'>Don't have an account ? <Link to="/signupcustomer">Sign up Account</Link></p>
            </Form>
            </Col>
            <Col md={6} className="login__image--container"></Col>
        </Row>
    </Container>
  )
}

export default Login