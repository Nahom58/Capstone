import React, { useState } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import "../../stylesheets/signin.css";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (event) => {
      event.preventDefault();
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Sign-in successful. Do something here (e.g., navigate to the home page).
          console.log(userCredential);
        })
        .catch((error) => {
          // An error occurred. Handle the error here (e.g., show an error message).
          console.log(error);
        });
      
      navigate('/');
    }  

  return (
    <Container fluid>
    <Row style={{height: '713px' }}>
    <Col className="rightColumn">
    <Form className="signInForm" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail"  className="mb-3 mt-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail"  className="mb-4">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
      <Button variant="success" type="submit" className="mb-2">
            Log In
        </Button>
    </Form>
    </Col>
    </Row>
    </Container>
  )
}
