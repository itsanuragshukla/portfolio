import React from 'react';
import './ContactDetails.css';
import PageHeading from './PageHeading'
import FollowIcons from './FollowIcons'
import ButtonHollow from './ButtonHollow'
import ButtonFilled from './ButtonFilled'
class ContactDetails extends React.Component {
    render() {
        return(<div className="contactDetails">
        <PageHeading text="Socials" />
        <br/>
        <FollowIcons />
        <div className="btnDivContactMe">
        <ButtonFilled text="Email" />
        <ButtonHollow text="LinkedIn" />
        </div>
        </div>
        );
    }
}

export default ContactDetails;