import React from 'react'
import {Link} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import "../stylesheets/resultspage.css";
import NavBar from '../components/NavBar';

export default function ResultsPage() {
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
    </Container>
  )
}
