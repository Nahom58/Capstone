import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate, Link} from "react-router-dom";

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
  const [authUser, setAuthUser] = useState(null);
  const [nameSearchTerm, setNameSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const location = useLocation();

  const navigate = useNavigate();

  const SubCity = {
    1: 'Addis Ketema',
    2: 'Akaky Kaliti ',
    3: 'Arada', 
    4: 'Bole',
    5: 'Gullele',
    6: 'Kirkos',
    7: 'Kolfe Keranio',
    8: 'Lideta',
    9: 'Nifas Silk-Lafto',
    10: 'Yeka'
  };

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

  const handleSearch = (event) => {
    event.preventDefault();
    setResults([]);
    location.state = { nameSearchTerm };
    location.pathname = '/ResultsPage';
    console.log('nameSearchTerm', location.state);
    navigate('/ResultsPage', { state: { nameSearchTerm } });
  };

  return (
    <div className="flex" >
        <Row>
          <NavBar />
        </Row>
        <Container className="responsive">
          <Row className="homePageBody responsive">
            <Col className="homePageBodyLeft responsive" md={6} lg={9} style={{backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZk4Xq7g3UbM1JwnPTxpChs46AfQGo_MtSw&usqp=CAU")`, backgroundSize: '42%', backgroundRepeat:"no-repeat", backgroundPosition: "right bottom" }} >
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
            <Link to={{ pathname: "/ContactUs" }}>
              <Button variant="outline-success" size='lg'>Contact Us</Button>{' '}
            </Link>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              style={{ fontSize: 15, padding: 5 }}
              type="search"
              placeholder="Search By First or Last Name"
              className="me-0"
              id = "me-0"
              aria-label="Search"
              size = "lg"
              onChange={(event) => setNameSearchTerm(event.target.value)}
            />
            <Form.Control
              style={{ fontSize: 15, padding: 10 }}
              type="search"
              placeholder="Search by Speciality"
              className="me-0"
              aria-label="Search"
              size = "lg"
            />
            <Form.Select
              style={{ fontSize: 15, padding: 10 }}
              type="select"
              className="me-1"
              aria-label="Filter"
              size = "lg"
            >
            <option value="">Filter by SubCity</option>
            {Object.values(SubCity).map((item) => (
              <option key={item} value={item}>{item} SubCity</option>
            ))}
            </Form.Select>
            <br> 
            </br>
            
            <Button variant="success" size = "lg" type="submit"> Search </Button>
            
          </Form>
            </Col>
            <Col className="responsive" md={6} lg={3}>
            <Image 
              height= "100%"
              width= "100%"
              src = {FemaleDoctorPicture}
              alt = "FemaleDoctor" />
            </Col>
          </Row>
          <Row>
          <CardGroup id="my-element"  >
            <Col sm={12} md={6} lg={3} className="cards">
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
            </Col>
            <Col sm={12} md={6}lg={3} className="cards">
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
            </Col>
            <Col sm={12} md={6} lg={3} className="cards">
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
            </Col>
            <Col sm={12} md={6} lg={3} className="cards">
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
            </Col>
          </CardGroup>
          </Row>
          <hr class="featurette-divider"></hr>
          <footer class="footer">
            <p class="float-end"><button>Back to top</button></p>
            <p>&copy; 2023 NRDCare, Inc. &middot; Privacy &middot; Terms</p>
          </footer>
        </Container>
    </div>
  )
}
