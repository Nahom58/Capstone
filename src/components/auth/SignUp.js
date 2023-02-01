import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { Link, useNavigate } from 'react-router-dom';

import { AuthErrorCodes, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase';

import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 

import "../../stylesheets/signup.css";

export default function SignUp() {

    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName:'',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        dob: '',
        gender: ''
    })
    const {firstName, lastName, email, password, confirmPassword, phone, address, dob, gender } = formData;

    const Gender = {
        male: 'Male',
        female: 'Female',
        unspecified: 'Unspecified'
      };

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('formdata', phone)

        if (firstName === "" || lastName === "" || email === "" || password === ""
        || confirmPassword === "" || phone === "" || address === "" || dob === "" 
        || gender === "") {
            setError('Fill out empty field');
        } else if (password !== confirmPassword) {
            setError('Password does not match');
        } else {
        createUserWithEmailAndPassword(auth, email, password)
          .then(async(userCredential) => {
            // Sign-in successful. Do something here (e.g., navigate to the home page).
            console.log(userCredential);
            const user = userCredential.user

            updateProfile(auth.currentUser, {
                displayName: firstName,
            })    

            const formDataCopy = {...formData}
            delete formDataCopy.password
            delete formDataCopy.confirmPassword
            formDataCopy.timestamp = serverTimestamp()
            console.log(formDataCopy)
            console.log(formData)
            await setDoc(doc(db, 'users', user.uid), formDataCopy)

            navigate('/HomePage');
          })
          .catch((error) => {
            // An error occurred. Handle the error here (e.g., show an error message).
            if (error.code === "auth/email-already-in-use") {
                setError('Email is already in use, try another email');
            } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
                setError('Password Must be 6 character');
            } else {
                setError(error.message)
            }
            console.log(error);
          })};
      }  

  return (
    <Container fluid>
    <Row style={{height: '100vh' }}>
        <div className="outerColumn">
        <Col className="innerColumn" md={10} xs={10}>
        <div className="signUpContainer">
            <Form onSubmit={handleSubmit} className="formContainer">
                <Row className="formTitle mb-2">
                <span>
                    <span className="brandNameFirst">NRD</span>
                    <span className="brandNameLast">Care</span>
                </span>
                </Row>
                <Row className="mb-2">
                    <div className="authErrorMessage mb-1">{error}</div>
                    <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="Enter First name" name="firstName" value={formData.firstName} onChange={handleChange}/>
                    </Col>
                    <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Enter Last name" name="lastName" value={lastName} onChange={handleChange}/>
                    </Col>
                </Row>
                <Row className="mb-2">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange}/>
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={handleChange}/>
                </Form.Group>
                </Row>
                
                <Row className="mb-2">
                <Form.Group as={Col} controlId="formGridAddress1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="+251" value={phone} name="phone" onChange={handleChange}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={handleChange}/>
                </Form.Group>
                </Row>
        
                <Form.Group className="mb-2" controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" value={address} name="address" onChange={handleChange}/>
                </Form.Group>
        
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridDateOfBirth">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter Birth Date" value={dob} name="dob" onChange={handleChange}/>
                </Form.Group>
        
                <Form.Group as={Col} controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select value={gender} name="gender" onChange={handleChange}>
                    <option value="">Select Gender</option>
                    {Object.values(Gender).map((enumk) => (
                        <option key={enumk} value={enumk}>{enumk}</option>
                      ))}
                    </Form.Select>
                </Form.Group>

                
                </Row>
        
                <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="I agree with Terms and Conditions" />
                </Form.Group>
        
                <div className="signUpButton">
                <Button variant="success" type="submit" className="mb-3">
                Sign Up
                </Button>
                <div>
                    <span>Already have an account?</span> &nbsp;&nbsp;
                    <Link to={{ pathname: "/SignIn" }}>
                    <span>Log in </span>
                    </Link>
                </div>
                </div>
            </Form>
        </div>
        </Col>
        </div>
    </Row>
    </Container>
  )
}
