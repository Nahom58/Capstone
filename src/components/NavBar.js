import React, { useEffect , useState } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {Link} from 'react-router-dom';

import { Avatar } from '@material-ui/core';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function NavBar() {
  const  [authUser, setAuthUser] = useState(null);

  const handleClick = () => {
    const element = document.getElementById('my-element');
    element.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log('sign out successful')
    }).catch(error => console.log(error))
  }
  
  return (
    <Navbar expand="sm" bg="white" variant="light">
      <Container className="navContainer">
        <Navbar.Brand className="navBarBrand" href="#home">
          <img
            alt=""
            src="https://i.postimg.cc/hvtkhd6W/icon-512.png"
            width="30"
            height="30"
            className="d-inline-block align-center"
          /> 
          &nbsp;  
          <Link to={"/homepage"} style={{ textDecoration: 'none' }}>
            <span className="brandNameFirst">NRD</span>
            <span className="brandNameLast">Care</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapseNavBar" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">
            <div>About Us</div></Nav.Link>
            <Nav.Link onClick={handleClick} href="#sth">
            Services
            </Nav.Link>
            <Nav.Link href="#somothing">Review</Nav.Link>
          </Nav>
          <Nav className ="navRightDropdownContainer">
            <Nav.Link href="#profile">
                <Avatar className="avatar"/>
            </Nav.Link>
            <NavDropdown title="" id="collasible-nav-dropdown">
                <Link to={"/EditProfile"} style={{ textDecoration: 'none' }}>
                  <NavDropdown.Item href="#action/3.1">Edit Profile</NavDropdown.Item>
                </Link>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                  <NavDropdown.Item href="#action/3.2" onClick={userSignOut}>
                      Sign Out
                  </NavDropdown.Item>
                </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
