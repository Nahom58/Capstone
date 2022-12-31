import { getDoc, doc} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import PractitionerCardExtended from '../components/PractitionerCardExtended'
import PractitionerDetailsCard from '../components/PractitionerDetailsCard'
import { db } from '../firebase'

import "../stylesheets/practitionerdetails.css";

export default function PractitionerDetailsPage() {

  const params = useParams();

  // console.log(searchParams);

  const [ practitionerDetails, setPractitionerDetails ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const fetchPractitionerDetails = async () => {
      try{
        // Get reference
        const docRef = doc(db, 'practitioners', params.id)

        getDoc(docRef).then(async (doc) => {
          setPractitionerDetails({ ...doc.data(), id: doc.id })
      })
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    }

    fetchPractitionerDetails()
  }, [])

  return (
    <div>
    <Row>
        <NavBar />
    </Row>
    <Container className="practitionerExtraDetails">
      <PractitionerCardExtended  practitionerDetails={practitionerDetails}/>
      <PractitionerDetailsCard  practitionerDetails={practitionerDetails}/>
    </Container>
    </div>
  )
}
