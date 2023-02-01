import React, { useState } from 'react'
import { Form, Button, Container, Col, Row} from 'react-bootstrap';
import {Box } from '@material-ui/core'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

import "../../stylesheets/signin.css";
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
      event.preventDefault();
      
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Sign-in successful. Do something here (e.g., navigate to the home page).
          console.log(userCredential);
          navigate('/HomePage');
        })
        .catch((error) => {
          // An error occurred. Handle the error here (e.g., show an error message).
          if (error.code === 'auth/wrong-password') {
            setError('Incorrect password.');
          } else if (error.code === 'auth/invalid-email') {
            setError('Email address is invalid')
          } else if (error.code === 'auth/user-not-found') {
            setError('User is not found')
          } else {
            setError(error.message);
          }
          console.log(error);
        });
    }  

  return (
    <Container fluid className="signInContainer">
    <Box
    className="signInBox"
    sx={{
      width: '65%',
      height: '100%',
      backgroundColor: 'primary.dark',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
    >
    <Row className="signInRow" style={{height: '100vh' }}>
    <Col className="rightColumn">
    <Form className="signInForm" onSubmit={handleSubmit}>
    <span className="signInTitle">
      <span>Log into </span>&nbsp;
      <span className="brandNameFirst">NRD</span>
      <span className="brandNameLast">Care</span>
    </span>
      <div className="authErrorMessage mb-1">{error}</div>
      <Form.Group controlId="formBasicEmail"  className="mb-3 mt-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail"  className="mb-4">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </Form.Group>
      <div className="logInButton">
      <Button variant="success" type="submit" className="mb-2">
          Log In
      </Button>
      </div>
    </Form>
    </Col>
    </Row>
    </Box>
    </Container>
  )
}
