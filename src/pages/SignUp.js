import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

import "../stylesheets/signup.css";

export default function SignUp() {
  return (
    <Container fluid>
    <Row style={{height: '713px' }}>
        <div className="outerColumn">
        <Col className="innerColumn" md={10} xs={10}>
        <div className="signUpContainer">
            <Form>
                <Row className="formTitle mb-4">
                <span>
                    <span className="brandNameFirst">NRD</span>
                    <span className="brandNameLast">Care</span>
                </span>
                </Row>
                <Row className="mb-3">
                    <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="Enter First name" />
                    </Col>
                    <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Enter Last name" />
                    </Col>
                </Row>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                </Row>
                
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="+251" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>
                </Row>
        
                <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
                </Form.Group>
        
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridDateOfBirth">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control placeholder="Enter Birth Date" />
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select defaultValue="Choose...">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unspecified</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNationality">
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control placeholder="Enter Nationality" />
                </Form.Group>
                </Row>
        
                <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="I agree with Terms and Conditions" />
                </Form.Group>
        
                <Button variant="success" type="submit" className="mb-2">
                Sign Up
                </Button>
                <div>
                    <span>Already have an account?</span> &nbsp;&nbsp;
                    <Link to={{ pathname: "/" }}>
                    <span>Log in </span>
                    </Link>

                </div>
            </Form>
        </div>
        </Col>
        </div>
    </Row>
    </Container>
  )
}
