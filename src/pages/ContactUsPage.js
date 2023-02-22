import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./contact_option";

import "../stylesheets/contactuspage.css";
import NavBar from "../components/NavBar";

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function ContactUsPage() {
  

  return (
    <div>
        <Row>
          <NavBar />
        </Row>
      <Container>
        <Row className="mb-4 mt-5">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address className="address">
              <strong>Email&nbsp;<EmailIcon color="info" />&nbsp;:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone&nbsp;<PhoneIcon color="success" />&nbsp;:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p className="message mt-4">We're here to help! If you have any questions or concerns, please don't hesitate to get in touch. We'll do our best to get back to you.</p>
            <h4 className="mt-4"> Reach out to us on Social Media: </h4>
            <div className="icons mt-3"> 
              <InstagramIcon color="error" fontSize="large"/> 
              <FacebookIcon color="primary" fontSize="large"/> 
              <TwitterIcon color="info" fontSize="large"/>
            </div>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn" type="submit"> 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}