import React from 'react'
import {Link} from "react-router-dom";
import "../stylesheets/practitionercard.css";

import Seble from '../pictures/Seble.jpg';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import HomeIcon from '@mui/icons-material/Home';
import { yellow } from '@mui/material/colors';

import { Image } from 'react-bootstrap';

export default function PractitionerCard({result, id}) {

  return (
    <div className="practitionerDetailsContainer" >
        <div className="practitionerPictureWrapper" >
        <Link to={{
          pathname: `/PractitionerDetails/${id}`,
        }} style={{ textDecoration: 'none' }}>
         <Image variant="top" width= "100%" src={result.imageUrl} className="practitionerPicture"/>
        </Link>
        </div>
        <div className="practitionerDetails">
         <div className="practitionerName"><strong> {result.firstName} {result.lastName} </strong></div>
         <div className="practitionerRatingLine"> 
            <StarRateRoundedIcon sx={{ color: yellow[700] }}/>&nbsp;
            <span>4.8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>{result.practice}</span>
         </div>
         <div className="practitionerAvailability"><b><i>Availability</i>:</b> Monday - Friday</div>
         <div className="practitionerWorkplace">
            <HomeIcon color="success"/>&nbsp;
            {result.officeLocation}
         </div>
        </div>
    </div>
  )
}
