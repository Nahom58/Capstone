import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";

import "../stylesheets/navbar.css";
import "../stylesheets/homepage.css";
import NavBar from '../components/NavBar';

import FemaleDoctorPicture from '../pictures/Female_Doctor_Img.jpg';

import StarIcon from '../icons/starIcon.png';
import SearchIcon from '../icons/searchIcon.png';
import CalendarIcon from '../icons/calenderIcon.png';
import PersonIcon from '../icons/personIcon.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

export default function HomePage() {
  const  [authUser, setAuthUser] = useState(null);

  useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
              setAuthUser(user)
          } else {
              setAuthUser(null);
          }
      });
          return () => {
              listen();
          }
  }, [])
  return (
    <div className="flex" >
        <Row>
          <NavBar />
        </Row>
        <Container >
          <Row className="homePageBody">
            <Col className="homePageBodyLeft" sm={9} style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZk4Xq7g3UbM1JwnPTxpChs46AfQGo_MtSw&usqp=CAU")`, backgroundSize: '410px', backgroundRepeat:"no-repeat", backgroundPosition: "right bottom" }} >
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
            <Link to={{ pathname: "/ResultsPage" }}>
              <Button variant="success" size = "lg">Search</Button>
            </Link>
          </Form>
            </Col>
            <Col sm={3}>
            <Image 
              width= "100%"
              src = {FemaleDoctorPicture}
              alt = "FemaleDoctor" />
            </Col>
          </Row>
          <CardGroup className="cards" >
            <Card border="success" style={{ margin: '1rem' }} className = "card">
              <Image variant="top" src={SearchIcon} className="card-img"/>
              <Card.Body>
                <Card.Title>Check health complaints</Card.Title>
                <Card.Text>
                Check the disease so you can
                easily choose the right specialist
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="success" style={{ margin: '1rem' }} className="card">
              <Image variant="top" src={PersonIcon} className="card-img"/>
              <Card.Body>
                <Card.Title>Choose doctor Specialist</Card.Title>
                <Card.Text>
                Choose a specialist according
                to your disease complaints
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="success" style={{ margin: '1rem' }} className="card">
              <Image variant="top" src={CalendarIcon} className="card-img"/>
              <Card.Body>
                <Card.Title>Make a Schedule</Card.Title>
                <Card.Text>
                Make a schedule with the doctor 
                concerned so you can start the
                examination
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="success" style={{ margin: '1rem' }} className="card">
              <Image variant="top" src={StarIcon} className="card-img" />
              <Card.Body>
                <Card.Title>Get your Solutions</Card.Title>
                <Card.Text>
                After conducting an examination
                with a specialist we can help find
                the right healing method
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
    </div>
  )
}
