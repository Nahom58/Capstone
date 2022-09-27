import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Avatar } from '@material-ui/core';

export default function NavBar() {
  return (
    <Navbar expand="sm" bg="white" variant="light">
      <Container className="navContainer">
        <Navbar.Brand className="navBarBrand" href="#home">
          <img
            alt=""
            src=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          /> 
          &nbsp;  
          <span className="brandNameFirst">NRD</span>
          <span className="brandNameLast">Care</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapseNavBar" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#sth">Services</Nav.Link>
            <Nav.Link href="#somothing">Review</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#home">
                <Avatar className="avatar"/>
            </Nav.Link>
            <NavDropdown title="" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
