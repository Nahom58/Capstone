import {React} from 'react'
import {Link} from "react-router-dom";
import "../stylesheets/practitionercardextended.css";

import Seble from '../pictures/Seble.jpg';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import HomeIcon from '@mui/icons-material/Home';
import { yellow } from '@mui/material/colors';

import { Button, Image } from 'react-bootstrap';
import { Rating, Typography } from '@mui/material';

export default function PractitionerCardExtended() {

    var value;
  return (
    <div className="practitionerDetailsContainerExtended">
        <div className="practitionerPictureWrapperExtended">
            <Link to={"/PractitionerDetails/3"} style={{ textDecoration: 'none' }}>
            <Image variant="top" src={Seble} className="practitionerPicture"/>
            </Link>
        </div>
        <div className="practitionerDetailsExtended">
            <div className="practitionerNameExtended"><strong> Seblewongel Birku</strong></div>
            <div className="practitionerRatingLineExtended"> 
                <StarRateRoundedIcon sx={{ color: yellow[700] }}/>&nbsp;
                <span>4.8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>General Practitioner</span>
            </div>
            <div className="practitionerAvailabilityExtended"><b><i>Availability</i>:</b> Monday - Friday</div>
            <div className="practitionerWorkplaceExtended">
                <HomeIcon color="success"/>&nbsp;
                Tikur Anbessa Hospital
            </div>
        </div>
        <div className="space">
        </div>
        <div className="practitionerExtraDetailsExtended">
            <div className="practitionerDetailsExtended">
            <div> 
                <Typography component="legend">Rating</Typography>
                <Rating name="read-only" value={value} readOnly />
            </div>
            <div className="practitionerAvailabilityExtended"><b><i>Fees</i>:</b> Birr 80</div>
            <div>
                <Button variant="secondary" size = "md"><span>Book </span><span>Appointment</span></Button>
            </div>
            </div>
        </div>
    </div>
  )
}
