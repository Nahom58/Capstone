import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import "../stylesheets/practitionerdetailscard.css";

export default function PractitionerDetailsCard({practitionerDetails}) {
  return (
    <div className="practitionerDetailsCardContainerExtended">
    <Container>
        <Row>
            <Col md={6} sm={6} className="bottomLeftDetails">
            <div>
            <h5>About Dr. {practitionerDetails?.firstName}</h5>
            <p> Dr. {practitionerDetails?.firstName} is working as a midwife in Betezatha hospital. He has 5 years of experience and earned his 
            degree from Gondar University.</p>
            
            </div>
            <div>
            <h5>Education</h5>
            <p>{practitionerDetails?.education}</p>
            </div>
            <div>
            <h5>Years of Experience</h5>
            <p> 5 years</p>
            </div>
            
            </Col>
            <Col md={6} sm={6} className="bottomRightDetails">
            <div>
            <h5>Specialty</h5>
            <p>{practitionerDetails?.practice}</p>
            </div>
            <div>
            <h5>Availability</h5>
            <p>Monday - Friday</p>
            </div>
            <div>
            <h5>Fees</h5>
            <p>80 Birr</p>
            </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}
