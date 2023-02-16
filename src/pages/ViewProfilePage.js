import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'

import { auth, db } from '../firebase';
import { getDoc, doc } from "firebase/firestore";

import "../stylesheets/editprofile.css";
import { onAuthStateChanged } from 'firebase/auth';

export default function ViewProfilePage() {
    const  [authUser, setAuthUser] = useState(null);
    const  [userDetails, setUserDetails] = useState(null);
    const [authUserUid, setAuthUserUid] = useState(null);

    const Gender = {
        male: 'Male',
        female: 'Female',
        unspecified: 'Unspecified'
      };

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                setAuthUserUid(user.uid)

                const docRef = doc(db, 'users', `${authUserUid}`)
        
                getDoc(docRef).then(async (doc) => {
                    setUserDetails({ ...doc.data(), id: doc.id })
                })
            } else {
                setAuthUser(null);
            }
        });
            return () => {
                listen();
            }
    }, [authUserUid])
    
  return (
    <div>
        <Row>
          <NavBar />
        </Row>
        <Container className="profileContainer">
            <Row className="mb-5">
                <Col sm={2}>
                    <Avatar className="profileAvatar"/>
                </Col>
                <Col sm={10} className="profileMessageContainer">
                    <div className="profileName">
                        {userDetails ? <p>{userDetails.firstName} {userDetails.lastName}</p> :
                        <p>No Current User</p>}
                    </div>
                    <div className="profileMessage">
                        Your account is Ready, You can now update your personal details in the Edit Profile Section.
                    </div>
                </Col>
            </Row>
            <Row>
            <Col sm={6} className="profileLeftSection">
            <Form>
                <Row className="mb-4">
                    <Col>
                    <Form.Label>First Name</Form.Label>
                    { userDetails? <Form.Control placeholder="-" defaultValue={userDetails.firstName} disabled />:
                    <Form.Control placeholder="-" disabled />}
                    </Col>
                    <Col>
                    <Form.Label>Last Name</Form.Label>
                    { userDetails? <Form.Control placeholder="-" defaultValue={userDetails.lastName} disabled />:
                    <Form.Control placeholder="-" disabled />}
                    </Col>
                </Row>
        
                <Form.Group className="mb-4" controlId="formGridDateOfBirth">
                    <Form.Label>Birth Date</Form.Label>
                    { userDetails? <Form.Control type="date" placeholder="-" defaultValue={userDetails.dob} disabled />:
                    <Form.Control placeholder="-" disabled />}
                </Form.Group>

                <Form.Group className="mb-4" controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                { userDetails? <Form.Control placeholder="-" defaultValue={userDetails.address} disabled />:
                    <Form.Control placeholder="-" disabled />}
                </Form.Group>
            </Form>
            </Col>
            <Col sm={6} className="profileRightSection">

                
                <Form.Group className="mb-4" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    { userDetails? <Form.Control type="email" placeholder="-" defaultValue={userDetails.email} disabled />:
                    <Form.Control placeholder="-" disabled/>}
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    { userDetails? <Form.Control placeholder="-" defaultValue={userDetails.phone} disabled/>:
                    <Form.Control placeholder="-" disabled />}
                </Form.Group>

                <Form.Group className="mb-4" controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    { userDetails? <Form.Select  value={userDetails.gender} name="gender" disabled >
                    <option value="">Select Gender</option>
                    {Object.values(Gender).map((enumk) => (
                        <option key={enumk} value={enumk}>{enumk}</option>
                      ))}
                    </Form.Select> : <Form.Select aria-disabled>
                    <option>Not selected</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unspecified</option>
                    </Form.Select>}
                </Form.Group>
                
            </Col>
            </Row>
        </Container>
    </div>
  )
}
