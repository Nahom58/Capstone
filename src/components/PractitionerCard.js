import React from 'react'

import "../stylesheets/practitionercard.css";

import Seble from '../pictures/Seble.jpg';

import { Image } from 'react-bootstrap';

export default function PractitionerCard() {
  return (
    <div className="practitionerDetailsContainer">
        <div className="practitionerPictureWrapper">
         <Image variant="top" width= "100%" src={Seble} className="practitionerPicture"/>
        </div>
        <div className="practitionerDetails">
         <div> Seblewongel Birku</div>
         <div> 
            <span>4.8</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span>General Practitioner</span>
         </div>
         <div>Availability: Monday - Friday</div>
         <div>Tikur Anbessa Hospital</div>
        </div>
    </div>
  )
}
