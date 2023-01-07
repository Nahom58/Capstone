import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore';
import { db } from '../firebase';


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

export default function ResultsPage(props) {
  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
   });

  const [ results, setResults ] = useState(null)
  const [ loading, setLoading ] = useState(true)

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
    const fetchResults = async () => {
      try{
        // Get reference
        const resultsRef = collection(db, 'practitioners')

        // Create a query
        const q = query(
          resultsRef, 
          limit(10))
        
        // Execute query
        const querySnap = await getDocs(q)

        const results = []

        querySnap.forEach((doc) => {
          return results.push({
            id: doc.id,
            data: doc.data()
          })
        })

        setResults(results)
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    }

    fetchResults()
  }, [])

  if (!isLoaded) return <div> Loading ... </div>

  return (
    <Container className="responsive">
    <Row className="responsive">
        <NavBar />
    </Row>
    <Row className="search-bar responsive">
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
        <Link to={{ pathname: "/ResultsPage" }}>
          <Button variant="success" size = "lg">Search</Button>
        </Link>
      </Form>
    </Row>
    <Row className="responsive">
      <Col md = {6} xs = {12} className="responsive"> 
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
        { loading? <div>...loading</div>: results && results.length > 0 ? <div>
            <ul className="practitionerCard" >
              {results.map((result) => (
                <PractitionerCard result={result.data} id={result.id} key={result.id}/>
              ))}
            </ul>
        </div>: <div>No Available Pracitioners</div>}
      </Col>
      <Col md = {6} xs = {12} className="responsive"> 
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