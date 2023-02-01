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
            {practitionerDetails}?<h5>About Dr. {practitionerDetails.firstName}</h5>: <h5>About Dr. {`First Name`}</h5>
            {practitionerDetails}?
            <p> 
            Dr. {practitionerDetails.firstName} is working as a midwife in Betezatha hospital. He has 5 years of experience and earned his 
            degree from Gondar University.
            </p>: 
            <p> 
            Dr. {`FirstName`} is working as a midwife in Betezatha hospital. He has 5 years of experience and earned his 
            degree from Gondar University.
            </p>
            
            </div>
            <div>
            <h5>Education</h5>
            {practitionerDetails}?<p>{practitionerDetails.education}</p>: <p>{`education`}</p>
            </div>
            <div>
            <h5>Years of Experience</h5>
            <p> 5 years</p>
            </div>
            
            </Col>
            <Col md={6} sm={6} className="bottomRightDetails">
            <div>
            <h5>Specialty</h5>
            {practitionerDetails}?<p>{practitionerDetails.practice}</p>: <p>{`practice`}</p>
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
