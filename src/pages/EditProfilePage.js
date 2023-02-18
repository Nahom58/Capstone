import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'

import { auth, db } from '../firebase';
import { getDoc, doc, updateDoc } from "firebase/firestore";

import "../stylesheets/editprofile.css";
import { onAuthStateChanged } from 'firebase/auth';

export default function EditProfilePage() {
    const  [authUser, setAuthUser] = useState(null);
    const  [userDetails, setUserDetails] = useState(null);
    const [authUserUid, setAuthUserUid] = useState(null);

    const Gender = {
        male: 'Male',
        female: 'Female',
        unspecified: 'Unspecified'
      };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        dob: '',
        gender: '' 
    })

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                setAuthUserUid(user.uid)

                const docRef = doc(db, 'users', `${authUserUid}`)
        
                getDoc(docRef).then(async (doc) => {
                    setUserDetails({ ...doc.data(), id: doc.id })
                    setFormData({ ...doc.data(), id: doc.id })
                })
            } else {
                setAuthUser(null);
            }
        });
            return () => {
                listen();
            }
    }, [authUserUid])

    const handleChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
        console.log('formDatas', formData)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const docRef = doc(db, 'users', `${authUserUid}`);
        updateDoc(docRef, formData)
          .then(() => {
            console.log('Document successfully updated');
            alert('Profile Updated Successfully')
          })
          .catch((error) => {
            console.error('Error updating document: ', error);
          });
      }
    
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
                        Your account is Ready, You can now update your personal details.
                    </div>
                </Col>
            </Row>
            <Row>
            <Col sm={6} className="profileLeftSection">
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col>
                    <Form.Label>First Name</Form.Label>
                    { userDetails? <Form.Control placeholder="-" name="firstName" defaultValue={userDetails.firstName} onChange={handleChange}/>:
                    <Form.Control placeholder="-" />}
                    </Col>
                    <Col>
                    <Form.Label>Last Name</Form.Label>
                    { userDetails? <Form.Control placeholder="-" name="lastName" defaultValue={userDetails.lastName} onChange={handleChange} />:
                    <Form.Control placeholder="-" />}
                    </Col>
                </Row>
        
                <Form.Group className="mb-3" controlId="formGridDateOfBirth">
                    <Form.Label>Birth Date</Form.Label>
                    { userDetails? <Form.Control type="date" placeholder="-" name="dob" defaultValue={userDetails.dob} onChange={handleChange} />:
                    <Form.Control placeholder="-" />}
                </Form.Group>

                <Form.Group className="mb-4" controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                { userDetails? <Form.Control placeholder="-" name="address" defaultValue={userDetails.address} onChange={handleChange} />:
                    <Form.Control placeholder="-" />}
                </Form.Group>
            </Form>
            </Col>
            <Col sm={6} className="profileRightSection">

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    { userDetails? <Form.Control type="email" placeholder="-" name="email" defaultValue={userDetails.email} onChange={handleChange} />:
                    <Form.Control placeholder="-" />}
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    { userDetails? <Form.Control placeholder="-" name="phone" defaultValue={userDetails.phone} onChange={handleChange} />:
                    <Form.Control placeholder="-" />}
                </Form.Group>

                <Form.Group className="mb-4" controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    { userDetails? <Form.Select defaultValue={userDetails.gender} name="gender" onChange={handleChange} >
                        {Object.values(Gender).map((enumk, index) => (
                            index === 0 ? 
                            <option key={enumk} value={enumk}>{enumk}</option> :
                            userDetails.gender === enumk ? 
                                <option key={enumk} value={enumk} selected>{enumk}</option> :
                                <option key={enumk} value={enumk}>{enumk}</option>
                        ))}
                    </Form.Select> : <Form.Select >
                    <option>Not selected</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unspecified</option>
                    </Form.Select>}
                </Form.Group>
            </Form>
            </Col>
            <Form onSubmit={handleSubmit}>
            <div className='updateProfileButtonContainer'> 
                <Button variant="success" type="submit" className="mb-3 updateProfileButton">
                    Save
                </Button>
            </div>
            </Form>
            </Row>
        </Container>
    </div>
  )
}
