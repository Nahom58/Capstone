import React from 'react'
import { Container, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import PractitionerCardExtended from '../components/PractitionerCardExtended'

export default function PractitionerDetailsPage() {
  return (
    <div>
    <Row>
        <NavBar />
    </Row>
    <Container>
      <PractitionerCardExtended />
    </Container>
    </div>
  )
}
