import { Avatar } from '@material-ui/core'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'

import "../stylesheets/editprofile.css";

export default function EditProfilePage() {
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
                        Nahom Agize
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
                    <Form.Control placeholder="Nahom" />
                    </Col>
                    <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Agize" />
                    </Col>
                </Row>
        
                <Form.Group className="mb-3" controlId="formGridDateOfBirth">
                    <Form.Label>Birth Date</Form.Label>
                    <Form.Control placeholder="11/11/2000"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridNationality">
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control placeholder="Ethiopian"/>
                </Form.Group>
        
                <Button variant="success" type="submit" className="mb-3">
                Save
                </Button>
            </Form>
            </Col>
            <Col sm={6} className="profileRightSection">

                
                <Form.Group className="mb-3" controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Nahom@uni.minerva.edu" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formGridPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="+251  923481975" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridGender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select defaultValue="Choose...">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Unspecified</option>
                    </Form.Select>
                </Form.Group>
                
            </Col>
            </Row>
        </Container>
    </div>
  )
}
