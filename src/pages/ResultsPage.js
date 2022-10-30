import React from 'react'
import {Link} from "react-router-dom";
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';

import TuneIcon from '@mui/icons-material/Tune';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import "../stylesheets/resultspage.css";
import NavBar from '../components/NavBar';
import PractitionerCard from '../components/PractitionerCard';

export default function ResultsPage() {
  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
   });

  if (!isLoaded) return <div> Loading ... </div>

  return (
    <Container>
    <Row>
        <NavBar />
    </Row>
    <Row className="search-bar">
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
    </Row>
    <Row>
      <Col md = {6} xs = {6}> 
        <div className = "sortBy">
          <div className= "sortByLeft">
            <TuneIcon color = "primary"/> &nbsp;  
            SORT BY
          </div>
          <Dropdown className="sortByDropdown">
            <Dropdown.Toggle className= "border border-dark" variant="Success" id="dropdown-basic">
              Availability
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Availability</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Distance</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="practitionerCard">
          <PractitionerCard/>
          <PractitionerCard/>
          <PractitionerCard/>
          <PractitionerCard/>
          <PractitionerCard/>
        </div>
      </Col>
      <Col md = {6} xs = {6}> 
        <Map />
      </Col>
    </Row>
    </Container>
  )
}


function Map() {
  return (
  <GoogleMap 
    zoom={12} 
    center={{lat: 9.01, lng: 38.76}}
    mapContainerClassName="map-container"
  >
    <Marker position={{lat: 9.01, lng: 38.76}}/>
  </GoogleMap>
  );
}