import {React} from 'react'
import {Link} from "react-router-dom";
import "../stylesheets/practitionercardextended.css";

import Seble from '../pictures/Seble.jpg';

import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import HomeIcon from '@mui/icons-material/Home';
import { yellow } from '@mui/material/colors';

import { Button, Image } from 'react-bootstrap';
import { Rating, Typography } from '@mui/material';

export default function PractitionerCardExtended({practitionerDetails}) {

    var value;
  return (
    <div className="practitionerDetailsContainerExtended">
        <div className="practitionerPictureWrapperExtended">
            <Link style={{ textDecoration: 'none' }}>
            <Image variant="top" src={practitionerDetails?.imageUrl} className="practitionerPicture"/>
            </Link>
        </div>
        <div className="practitionerDetailsExtended">
            <div className="practitionerNameExtended"><strong> Dr. {practitionerDetails?.firstName} {practitionerDetails?.lastName}</strong></div>
            <div className="practitionerRatingLineExtended"> 
                <StarRateRoundedIcon sx={{ color: yellow[700] }}/>&nbsp;
                <span>4.8</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>{practitionerDetails?.practice}</span>
            </div>
            <div className="practitionerAvailabilityExtended"><b><i>Availability</i>:</b> Monday - Friday</div>
            <div className="practitionerWorkplaceExtended">
                <HomeIcon color="success"/>&nbsp;
                {practitionerDetails?.officeLocation}
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
                <Button variant="secondary" size = "md"><span>Book Appointment</span></Button>
            </div>
            </div>
        </div>
    </div>
  )
}
