import React from 'react';
import './ContactDetails.css';
import PageHeading from './PageHeading'
import FollowIcons from './FollowIcons'
import ButtonHollow from './ButtonHollow'
import ButtonFilled from './ButtonFilled'
class ContactDetails extends React.Component {
  
  constructor(props){
    super()
    this.redirect=this.redirect.bind(this);
  }
  redirect = (url) => {
    window.open(url,"_blank");
  }
    render() {
        return(<div className="contactDetails">
        <PageHeading text="Socials" />
        <br/>
        <FollowIcons />
        <div className="btnDivContactMe">
        <ButtonFilled onClick={()=>{this.redirect("mailto:www.anuragshukla@gmail.com")}} text="Email" />
        <ButtonHollow onClick={()=>{this.redirect("https://www.LinkedIn.com/in/therealanuragshukla")}} text="LinkedIn" />
        </div>
        </div>
        );
    }
}

export default ContactDetails;