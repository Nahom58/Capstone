import React from 'react'
import "../stylesheets/navbar.css";
import "../stylesheets/homepage.css";
import NavBar from '../components/NavBar';
import FemaleDoctorPicture from '../pictures/Female_Doctor_Img.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function HomePage() {
  return (
    <div className="flex" >
        <Row>
          <NavBar />
        </Row>
        <Container >
          <Row>
            <Col className="homePageText" sm={9}>
            <div className="homePageMessage">
            Medical Care Now
            <br> 
            </br>
            <span>Simplified For</span> 
            <span className="homePageMessageColored"> Everyone</span>
            </div>
            <div className="homePageDescription">
            <span className='homePageDescriptionBrandNameFirst'>NRD</span>
            <span className="homePageDescriptionBrandNameLast">Care</span> is a web platform that mainly operates in Addis Ababa, Ethiopia. We connect 
            individuals with medical practitioners from various fields in the medical industry
            to ease access to healthcare.
            </div>
            <Button variant="outline-success" size='lg'>Contact Us</Button>{' '}
          <Form className="d-flex">
            <Form.Control
              style={{ fontSize: 15, padding: 5 }}
              type="search"
              placeholder="Search By Name"
              className="me-0"
              id = "me-0"
              aria-label="Search"
              size = "lg"
            />
            <Form.Control
              style={{ fontSize: 15, padding: 10 }}
              type="search"
              placeholder="Search by Speciality"
              className="me-0"
              aria-label="Search"
              size = "lg"
            />
            <Form.Control
              style={{ fontSize: 15, padding: 5 }}
              type="filter"
              placeholder="Filter"
              className="me-1"
              aria-label="Filter"
              size = "lg"
            />
            <br> 
            </br>
            <Button variant="success" size = "lg">Search</Button>
          </Form>
            </Col>
            <Col sm={3}>
            <Image 
              width= "100%"
              src = {FemaleDoctorPicture}
              alt = "FemaleDoctor" />
            </Col>
          </Row>
      </Container>
    </div>
  )
}
