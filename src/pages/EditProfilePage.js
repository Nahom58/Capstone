import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'

import { auth, db, upload } from '../firebase';
import { getDoc, doc } from "firebase/firestore";

import "../stylesheets/editprofile.css";
import { onAuthStateChanged } from 'firebase/auth';
import { PhotoCamera } from '@mui/icons-material';

export default function EditProfilePage() {
    const [authUser, setAuthUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const [authUserUid, setAuthUserUid] = useState(null);

    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState('');

    const Gender = {
        male: 'Male',
        female: 'Female',
        unspecified: 'Unspecified'
      };

    function handleChange(e) {
        if(e.target.files[0]) {
            setPhoto(e.target.files[0])
        }
    }

    function handleClick() {
        upload(photo, userDetails, setLoading );
    }

    {/*useEffect(() => {
        if (userDetails?.photoUrl) {
            setPhotoURL(userDetails.photoURL)
        }
    }, [userDetails])*/}

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
                setAuthUserUid(user.uid)

                const docRef = doc(db, 'users', `${authUserUid}`)
        
                getDoc(docRef).then(async (doc) => {
                    setUserDetails({ ...doc.data(), id: doc.id })
                })

                if (authUser?.photoURL) {
                    setPhotoURL(authUser.photoURL)
                }
            } else {
                setAuthUser(null);
            }
        });
            return () => {
                listen();
            }
    }, [authUserUid, userDetails])
    
  return (
    <div>
        <Row>
          <NavBar />
        </Row>
        <Container className="profileContainer">
            <Row className="mb-5">
                <Col sm={2} className="profilePicture">
                    <Avatar src={photoURL} className="profileAvatar"/>
                    <IconButton disabled={loading} color="success" aria-label="upload picture" component="label" className="profileUpload" onClick={handleClick}>
                        <input hidden accept="image/*" type="file" onChange={handleChange} />
                        <PhotoCamera />
                    </IconButton>
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
            <Form>
                <Row className="mb-3">
                    <Col>
                    <Form.Label>First Name</Form.Label>
                    { userDetails? <Form.Control placeholder="-" defaultValue={userDetails.firstName} />:
                    <Form.Control placeholder="-" />}
                    </Col>
                    <Col>
                    <Form.Label>Last Name</Form.Label>
                    { userDetails? <Form.Control placeholder="-" defaultValue={userDetails.lastName} />:
                    <Form.Control placeholder="-" />}
                    </Col>
                </Row>
        
                <Form.Group className="mb-3" controlId="formGridDateOfBirth">
                    <Form.Label>Birth Date</Form.Label>
                    { userDetails? <Form.Control type="date" placeholder="-" defaultValue={userDetails.dob} />:
                    <Form.Control placeholder="-" />}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                { userDetails? <Form.Control placeholder="-" defaultValue={userDetails.address} />:
                    <Form.Control placeholder="-" />}
                </Form.Group>
        
                <Button variant="success" type="submit" className="mb-3">
                Save
                </Button>
            </Form>
            </Col>
            <Col sm={6} className="profileRightSection">

                
                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    { userDetails? <Form.Control type="email" placeholder="-" defaultValue={userDetails.email} />:
                    <Form.Control placeholder="-" />}
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    { userDetails? <Form.Control placeholder="-" defaultValue={userDetails.phone} />:
                    <Form.Control placeholder="-" />}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    { userDetails? <Form.Select  value={userDetails.gender} name="gender" >
                    <option value="">Select Gender</option>
                    {Object.values(Gender).map((enumk) => (
                        <option key={enumk} value={enumk}>{enumk}</option>
                      ))}
                    </Form.Select> : <Form.Select >
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
